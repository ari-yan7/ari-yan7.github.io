# 🚀 Personal Portfolio Website & GitHub Pages Deployment Guide

A modern, high-performance, glassmorphic portfolio website built with HTML5, CSS3, JavaScript, and FontAwesome icons. Optimized for hosting on **GitHub Pages** (`github.io`).

---

## 🛠️ Portfolio Features

- **Dynamic Data Configuration**: All personal info, skills, projects, stats, and timeline items are stored in [`js/config.js`](file:///d:/BracU%20Courses/Portfolio%20Website/js/config.js). Update one file to change all portfolio details!
- **Dark & Light Mode Toggle**: Smooth theme switcher with local storage preference memory.
- **Interactive Project Showcase**: Filter projects by category (*Web Apps, Mobile, Dev Tools*) with rich detail popups.
- **Animated Typing Effect**: Dynamic role switching in the hero header.
- **Interactive Tech Stack Bars**: Animated skill level progress bars on scroll.
- **Contact Form & Quick Email Copy**: Form validation and copy-to-clipboard button.
- **Interactive Canvas Particle FX**: Subtle floating particle backdrop effect.
- **100% Mobile & Desktop Responsive**: Looks stunning on all screen sizes.

---

## 🌐 How to Host on GitHub Pages (`github.io`)

There are **two common ways** to host your portfolio on GitHub Pages:

---

### Option A: Hosting as `<your-username>.github.io` (Recommended Main Website)

If you want your portfolio to be accessible directly at `https://<your-username>.github.io`:

1. **Create a GitHub Repository**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Set the repository name **EXACTLY** to: `<your-username>.github.io` (replace `<your-username>` with your actual GitHub username).
   - Ensure the repository is set to **Public**.
   - Do **NOT** initialize with a README (since we already have our project locally).

2. **Push your code from VS Code / Terminal**:
   Open terminal inside this project directory (`d:\BracU Courses\Portfolio Website`) and run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. **Verify Deployment**:
   - GitHub Pages automatically builds and deploys root repositories named `<username>.github.io`.
   - Wait 1-2 minutes, then visit `https://<your-username>.github.io`!

---

### Option B: Hosting as a Sub-path (e.g. `<username>.github.io/portfolio`)

If your repository has a different name (e.g., `portfolio` or `Portfolio-Website`):

1. **Create a GitHub Repository**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Name it `portfolio` (or any repository name you like).
   - Set to **Public**.

2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** (top tab) -> **Pages** (left menu).
   - Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
   - Your site will be live at `https://<your-username>.github.io/portfolio/` within 2 minutes!

---

## ✏️ How to Customize Your Content

All data is stored in [`js/config.js`](file:///d:/BracU%20Courses/Portfolio%20Website/js/config.js). Simply open `js/config.js` and edit:

1. **Personal Info**: `name`, `headline`, `bio`, `email`, `github`, `linkedin`, `twitter`, `location`, `resumeUrl`.
2. **Hero Roles**: Edit `typedRoles` array to change the animated role text.
3. **Projects**: Add, remove, or modify project cards in the `projects` array.
4. **Skills**: Adjust language, framework, and tool skill levels (`"85%"`, `"90%"`).
5. **Experience**: Update your education degree, dates, or internships in `experience`.

---

## 🎨 Local Preview

To test your website locally before pushing to GitHub:
- Open `index.html` directly in your browser, OR
- Run `python -m http.server 8080` in VS Code terminal and go to `http://localhost:8080`.
