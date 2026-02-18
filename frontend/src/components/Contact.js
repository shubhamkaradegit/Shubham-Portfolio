import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  // Validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.length <= 100;
  };

  const validateName = (name) => {
    return name.trim().length >= 2 && name.trim().length <= 100;
  };

  const validateMessage = (message) => {
    return message.trim().length >= 10 && message.trim().length <= 2000;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateName(formData.name)) {
      toast.error('Name must be 2-100 characters long');
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!validateMessage(formData.message)) {
      toast.error('Message must be 10-2000 characters long');
      return;
    }

    setLoading(true);

    try {
      // ✅ 1️⃣ Save to Backend (optional)
      try {
        await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
      } catch (dbError) {
        console.log('Database save failed:', dbError);
      }

      // ✅ 2️⃣ Send Email via FormSubmit
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);

      // Required hidden fields
      formDataObj.append('_captcha', 'false');
      formDataObj.append('_template', 'table');
      formDataObj.append('_subject', 'New Portfolio Contact Message');

      const response = await fetch(
        'https://formsubmit.co/infoshubham1196@gmail.com',
        {
          method: 'POST',
          body: formDataObj
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('FormSubmit Error:', errorText);
        throw new Error('Failed to send email');
      }

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">

          {/* Left Side */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect!</h3>

            <p>
              I'm always excited to discuss new projects and opportunities.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <h4>📧 Email</h4>
                <a href="mailto:shubhamkarade1196@gmail.com">
                  shubhamkarade1196@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <h4>📱 Phone</h4>
                <p>+91-7039304305</p>
              </div>

              <div className="contact-item">
                <h4>📍 Location</h4>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-social">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a
                  href="https://github.com/shubhamkaradegit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/shubhamkarade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin /> LinkedIn
                </a>

                <a
                  href="https://leetcode.com/u/Shubham_Karade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <SiLeetcode /> LeetCode
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your message..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
