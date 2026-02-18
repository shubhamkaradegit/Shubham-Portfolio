# Shubham Karade - Professional Portfolio

A modern, full-stack portfolio website built with **React**, **Node.js**, and **MongoDB**. Featuring a secure contact form, project showcase, certificates, and professional experience sections.

## ✨ Features

### Frontend
- 🎨 **Modern UI** with smooth animations using Framer Motion
- 📱 **Fully Responsive** - Mobile, tablet, and desktop layouts
- 🌙 **Dark Mode** - Theme switcher support
- ⚡ **Optimized Performance** - Fast loading and smooth scrolling
- 🔐 **Client-side Validation** - Form validation before submission
- 🎯 **Scroll Animations** - Intersection Observer for smooth animations
- 📧 **Contact Form** - Integrated with FormSubmit.co for emails

### Backend
- 🛡️ **Security Hardened:**
  - Input validation and sanitization
  - Rate limiting (100 req/15min general, 5 req/hour for contact)
  - CORS protection with specific allowed methods
  - Environment-based error handling (no stack traces in production)
  - Payload size limit (10KB)
  
- 📊 **Database:**
  - MongoDB Atlas with secure credentials
  - Mongoose ODM for schema validation
  - Complete CRUD operations for messages
  
- 📧 **Email Integration:**
  - FormSubmit.co for reliable email delivery
  - User confirmation emails
  - Admin notifications

## �️ Tech Stack

### Frontend
- **React 18** - UI library
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Hot Toast** - Notifications
- **React Scroll** - Smooth scrolling
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM
- **Express Rate Limit** - API throttling
- **CORS** - Cross-origin requests

### Deployment
- **Frontend:** Vercel
- **Backend:** Render or Railway
- **Database:** MongoDB Atlas
- **Email:** FormSubmit.co

## 📋 Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB Atlas account
- GitHub account (for Vercel/Render deployment)

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Certificates.js
│   │   │   ├── Experience.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── context/
│   │   │   └── ThemeContext.js
│   │   ├── api/
│   │   │   └── index.js
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   ├── certificates/
│   │   └── project_img/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   │   ├── contactController.js
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   └── experienceController.js
│   ├── models/
│   │   ├── Contact.js
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   └── Experience.js
│   ├── routes/
│   │   ├── contact.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── experiences.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🚀 Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend runs on: `http://localhost:3000`

### 3. Backend Setup
```bash
cd backend
npm install
npm run dev
```
Backend runs on: `http://localhost:5000`

### 4. Environment Variables

**Backend (.env file):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/portfolio
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

**Frontend (.env.production):**
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

## � Security Features

### Implemented Security Measures:
- ✅ **Input Validation** - Email format, message length, name validation
- ✅ **Input Sanitization** - Removes dangerous characters and XSS attempts
- ✅ **Rate Limiting** - Prevents spam and DoS attacks
- ✅ **CORS Protection** - Restricted to specific origins and methods
- ✅ **Environment Variables** - Secure credential management
- ✅ **Error Handling** - No stack traces exposed in production
- ✅ **Payload Size Limits** - 10KB maximum request size
- ✅ **MongoDB Password Rotation** - Secure database credentials

### Best Practices Applied:
- HTTPS only (enforced by deployment platforms)
- Secure password handling with environment variables
- Database credentials never committed to git
- `.gitignore` prevents sensitive file exposure
- Security headers configured (CORS, CSP ready)

## 📧 Contact Form Integration

The contact form uses **FormSubmit.co** for secure email delivery:

1. Form data is validated on both frontend and backend
2. Messages are saved to MongoDB
3. Emails are sent via FormSubmit.co to: `infoshubham1196@gmail.com`
4. User receives confirmation email automatically

**Validation Requirements:**
- Name: 2-100 characters
- Email: Valid format (xxx@yyy.zzz)
- Message: 10-2000 characters

## 🚀 Deployment Guide

### Frontend Deployment (Vercel)

1. Push code to GitHub
2. Visit https://vercel.com
3. Connect GitHub repository
4. Select `frontend` folder as root
5. Choose React as framework
6. Deploy automatically on push

**Environment Variables (Vercel):**
```
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

### Backend Deployment (Render)

1. Visit https://render.com
2. Create new Web Service
3. Connect GitHub repository
4. **Build Command:** `npm install`
5. **Start Command:** `npm start`

**Environment Variables (Render):**
```
PORT=5000
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/portfolio
CORS_ORIGIN=https://your-frontend-url.vercel.app
NODE_ENV=production
```

## � API Endpoints

### Contact Routes
- `GET /api/contact` - Get all messages
- `POST /api/contact` - Submit new message
- `PUT /api/contact/:id` - Update message status
- `DELETE /api/contact/:id` - Delete message

### Other Routes
- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get all skills
- `GET /api/experiences` - Get all experiences

## 🔧 Available Scripts

### Frontend
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from create-react-app (irreversible)
```

### Backend
```bash
npm run dev        # Start with nodemon (development)
npm start          # Start production server
```

## 📋 MongoDB Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Create a database user
5. Whitelist your IP
6. Copy connection string
7. Update `.env` file with connection string

## 🐛 Troubleshooting

### Frontend Issues
- **"Cannot find module"** → Run `npm install`
- **Port 3000 already in use** → Kill process or use `PORT=3001 npm start`
- **CORS errors** → Update `REACT_APP_API_URL` in `.env.production`

### Backend Issues
- **MongoDB connection error** → Check connection string in `.env`
- **Port 5000 already in use** → Check `netstat -ano | findstr :5000`
- **Rate limit blocking** → Wait 15 minutes or change IP

### Email Issues
- **Emails going to spam** → Mark as "not spam" in Gmail
- **FormSubmit not working** → Verify email is confirmed on FormSubmit.co

## 📝 Environment Variables Guide

### Required for Backend:
- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 5000)
- `CORS_ORIGIN` - Allowed frontend URL

### Optional:
- `NODE_ENV` - "development" or "production"

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Shubham Karade**
- Portfolio: https://your-app.vercel.app
- GitHub: https://github.com/shubhamkaradegit
- LinkedIn: https://www.linkedin.com/in/shubhamkarade/
- LeetCode: https://leetcode.com/u/Shubham_Karade/

## 📞 Support

For issues, questions, or suggestions:
1. Open an issue on GitHub
2. Contact via portfolio contact form
3. Email: infoshubham1196@gmail.com

## 🙏 Acknowledgments

- Framer Motion for smooth animations
- FormSubmit.co for email service
- MongoDB Atlas for database hosting
- Vercel for frontend deployment
- Render for backend hosting

---

**Made with ❤️ by Shubham Karade**
