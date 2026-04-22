# 🚀 Cortexium - React Website

A stunning, modern React website showcasing Cortexium's AI solutions for business scaling.

## 🎯 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern Animations** - Smooth transitions and floating effects  
- **Dark Theme** - Professional dark UI with cyan accents
- **Component-Based** - Clean, reusable React components
- **Performance Optimized** - Fast loading and smooth interactions
- **Your Custom Logo** - Integrated with your theme colors

## 📁 Project Structure

```
cortexium/
├── public/
│   ├── index.html
│   └── cortexium-logo.png
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhyUs.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd /Users/apple/cortexium
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎨 Customization

### Change Contact Information
Edit `/src/components/Contact.jsx` and update:
- Email: `hello@cortexium.ai`
- Phone: `(555) 123-4567`

### Modify Colors
Edit `/src/index.css` CSS variables:
```css
--accent-cyan: #00d4ff;
--primary-dark: #0a0e27;
--primary-darker: #050810;
```

### Update Logo
Replace the logo in `/public/cortexium-logo.png` with your own image.

## 📱 Sections

- **Hero** - Eye-catching landing section with CTAs
- **Services** - Your 6 core service offerings (AI Strategy, Automation, etc.)
- **Why Us** - 4 key differentiators with smooth animations
- **About** - Mission, approach, and impressive stats
- **Contact** - Contact form with email, phone, and support info
- **Footer** - Links and social media

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

- **React 18.2.0** - UI framework
- **React DOM 18.2.0** - DOM rendering
- **React Icons 4.11.0** - Icon library

## 🔧 Tech Stack

- React 18
- CSS3 (with animations and gradients)
- JavaScript ES6+
- HTML5

## 📖 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm run eject` - Eject from create-react-app (one-way operation)

## 🎬 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your repo to Netlify
3. Set build command to: `npm run build`
4. Set publish directory to: `build`

### Deploy to Vercel

1. Push code to GitHub
2. Import the repository in Vercel
3. Vercel auto-detects React and deploys!

## 🎨 Design Features

✨ **Smooth Animations**
- Staggered card animations
- Floating elements
- Fade-in effects
- Hover transitions

🎯 **Professional UI**
- Gradient text effects
- Glassmorphism backgrounds
- Smooth color transitions
- Responsive typography

📱 **Mobile-First**
- Hamburger menu (mobile)
- Touch-friendly buttons
- Optimized spacing
- Fast performance

## 🚀 What's Included

✅ 7 Complete Sections
✅ Fully Responsive Design
✅ Smooth Animations
✅ Contact Form
✅ Your Custom Logo
✅ Professional Typography
✅ Dark Theme with Cyan Accents
✅ Mobile Navigation
✅ Production-Ready Code

## 📝 Notes

- The contact form is currently set up for basic functionality
- To enable email sending, integrate with a service like EmailJS, Nodemailer, or AWS SES
- All images should be optimized for web (consider using next/image or similar)

## 🆘 Support

For issues or questions, check the React documentation at https://react.dev

---

**Made with ❤️ for Cortexium**
