import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

// Input validation helpers
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 100;
};

const validateName = (name) => {
  return name.trim().length >= 2 && name.trim().length <= 100 && !/[<>\"']/g.test(name);
};

const validateMessage = (message) => {
  return message.trim().length >= 10 && message.trim().length <= 2000 && !/<script|<iframe|<img|on\w+\s*=/gi.test(message);
};

// Sanitize input to prevent XSS
const sanitizeInput = (str) => {
  return str
    .trim()
    .replace(/[<>\"']/g, '') // Remove potentially dangerous characters
    .substring(0, 2000); // Limit length
};

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Send email notification (only if credentials are set)
const sendEmailNotification = async (to, subject, html) => {
  // Skip email if credentials not configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.log('⚠️ Email credentials not configured. Skipping email notification.');
    return;
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    });
    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error('❌ Email sending error:', error);
    // Don't throw - we don't want the whole operation to fail if email fails
  }
};

// Get all contact messages
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Failed to fetch messages' });
  }
};

// Create contact message
export const createMessage = async (req, res) => {
  try {
    let { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide name, email, and message' });
    }

    // Validate and sanitize inputs
    if (!validateName(name)) {
      return res.status(400).json({ message: 'Invalid name. Name must be 2-100 characters.' });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }

    if (!validateMessage(message)) {
      return res.status(400).json({ message: 'Message must be 10-2000 characters.' });
    }

    // Sanitize inputs
    name = sanitizeInput(name);
    email = sanitizeInput(email).toLowerCase();
    message = sanitizeInput(message);

    // Save to database
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    console.log('✅ Message saved to database:', newMessage._id);

    // Email to admin (you)
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">📬 New Contact Message</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px;">Message ID: ${newMessage._id}</p>
      </div>
    `;

    // Email to user (confirmation)
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">✅ Your Message Has Been Received</h2>
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Your message:</strong></p>
          <p style="background-color: #fff; padding: 15px; border-left: 4px solid #28a745;">${message}</p>
        </div>
        <p>Best regards,<br><strong>Shubham Karade</strong></p>
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This is an automated message. Please do not reply to this email.</p>
      </div>
    `;

    try {
      // Send email to admin
      await sendEmailNotification(
        process.env.EMAIL_TO,
        `New Contact Message from ${name}`,
        adminEmailHtml
      );

      // Send confirmation email to user
      await sendEmailNotification(
        email,
        'We Received Your Message - Shubham Karade',
        userEmailHtml
      );
    } catch (emailError) {
      console.warn('⚠️ Email notification failed, but message was saved to database');
    }

    res.status(201).json({ 
      message: 'Message sent successfully!',
      data: newMessage 
    });
  } catch (error) {
    console.error('❌ Error in createMessage:', error);
    res.status(500).json({ message: 'Failed to save message' });
  }
};

// Update message status
export const updateMessageStatus = async (req, res) => {
  try {
    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (error) {
    console.error('Error updating message status:', error);
    res.status(400).json({ message: 'Failed to update message status' });
  }
};

// Delete message
export const deleteMessage = async (req, res) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ message: 'Failed to delete message' });
  }
};
