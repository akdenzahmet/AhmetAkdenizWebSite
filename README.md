# Ahmet Akdeniz — Personal Portfolio Website

A modern, professional portfolio website built with **React** and **Vite**. Features a clean dark/light mode, bilingual support (TR/EN), smooth animations, and a fully functional contact form.

🌐 **Live Site:** _Coming soon (Vercel)_
📧 **Contact:** akdenz.ahmet@outlook.com

---

## 🚀 Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, Vite 8, Vanilla CSS |
| **UI / Icons** | Lucide React |
| **Fonts** | Inter, Outfit (Google Fonts) |
| **Form** | Formspree |
| **Deployment** | Vercel |

---

## ✨ Features

- 🌓 **Dark / Light Mode** — persisted via localStorage
- 🌍 **Bilingual** — Turkish & English with instant toggle
- 📱 **Fully Responsive** — mobile, tablet, desktop
- ⚡ **Smooth Animations** — fade-in on scroll, hover effects, micro-interactions
- 📬 **Contact Form** — powered by Formspree with mailto fallback
- 📄 **CV Download** — Turkish & English resume PDF links
- 🖼️ **Project Showcase** — 3×2 grid with screenshots, tech tags, GitHub & demo links

---

## 📁 Project Structure

```
src/
├── assets/
│   ├── profile.jpg
│   └── projects/          # Project screenshot images
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Services.jsx
│   ├── WorkProcess.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── CVSection.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   ├── translations.js    # TR / EN content
│   └── links.js           # All URLs & Formspree config
├── App.jsx
└── index.css              # Full design system (variables, components, responsive)
```

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🎯 Sections

1. **Hero** — Name, title, profile card with specializations
2. **About** — Education, internship background, focus areas
3. **Projects** — 6 featured projects in a 3×2 grid
4. **Services** — Freelance service offerings
5. **Process** — 4-step work methodology
6. **Experience** — 2 STM internships (Defense industry)
7. **Skills** — 6 skill categories with technology tags
8. **CV** — Download TR / EN resume
9. **Contact** — Formspree form + social links

---

## 📬 Contact Form Setup

The form uses [Formspree](https://formspree.io). The endpoint is configured in `src/data/links.js`:

```js
formspreeId: "mlgygjwp"
```

---

## 📝 License

© 2025 Ahmet Akdeniz. All rights reserved.
