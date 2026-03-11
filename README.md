# UniOne Platform 🎓

> Your complete academic platform for engineering students. Free notes, premium packs, AI assistant & more.

Built with **React** and **Vite**, featuring a completely responsive and custom-designed dark/light mode landing page.

---

## 🚀 Quick Start Guide

Follow these steps to set up and run the UniOne platform on your local machine.

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer. (Version 18+ is recommended).

### 2. Clone the Repository
Download the project code to your local machine:
```bash
git clone https://github.com/sayalikale318/UniOne.git
```

### 3. Navigate into the Project folder
```bash
cd UniOne
```

### 4. Install Dependencies
Install all the required packages that the project needs to run:
```bash
npm install
```

### 5. Start the Development Server
Run the project locally:
```bash
npm run dev
```

### 6. View the App ✨
Once the server starts, open your browser and navigate to the address shown in your terminal (usually `http://localhost:5173/`).

---

## 🛠️ Built With

* **[React 18](https://react.dev/)** - Frontend library for building user interfaces
* **[Vite](https://vitejs.dev/)** - Lightning fast development build tool
* **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
* **Plain CSS** - All styling is handled via custom `/src/global.css` with extensive CSS custom variables for dynamic dark/light themes.

## 📁 Project Structure highlights

* `/src/pages/LandingPage.jsx` - The main homepage containing hero sections, features, testaments.
* `/src/components/` - Global components including:
  * `Navbar.jsx` & `Footer.jsx`
  * `ScrollBanner.jsx` - Dynamic infinite marquee for features
  * `ThemeContext.jsx` - Context provider handling the custom Dark/Light toggling
* `/src/global.css` - The single source of truth for all styling tokens and component logic.
