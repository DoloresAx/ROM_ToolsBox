# ROM Toolbox Store

A modern React web application for accessing and managing a suite of robotics and AI tools.  
Includes theme switching, search/filter, and quick access to social/contact links.

---

## Features

- **Responsive UI** with [Bootstrap](https://getbootstrap.com/) and custom styles
- **Theme toggle** (light/dark mode)
- **Search bar** to filter available tools
- **Tool grid** for quick access to:
  - Chat
  - Robot Parts Estimator
  - AI Image Detection Model
  - Qt Robot Control
  - AI Agent
  - Ground Control Station
  - Speech Recognition
  - GitHub
- **Floating action buttons** for Facebook, YouTube, Telegram, Viber, and Email

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd toolbox-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
toolbox-app/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── ChatGrid.js         # Tool grid display
  │   │   ├── ChatGrid.css
  │   │   ├── FloatingButtons.js  # Social/contact floating buttons
  │   │   ├── FloatingButtons.css
  │   │   ├── Header.js           # App header and theme toggle
  │   │   ├── SearchBar.js        # Search/filter bar
  │   │   ├── ThemeToggle.js      # Theme switch button
  │   │   └── ToolboxStore.js     # (Reserved for future use)
  │   ├── App.js                  # Main app logic
  │   ├── App.css
  │   ├── index.js                # Entry point
  │   ├── index.css
  │   ├── reportWebVitals.js
  │   └── setupTests.js
  ├── package.json
  └── README.md
```

---

## Scripts

- `npm start` – Run the app in development mode
- `npm run build` – Build for production
- `npm test` – Run tests
- `npm run eject` – Eject configuration (irreversible)

---

## Deployment

You can deploy the build folder to any static hosting (e.g., GitHub Pages, Netlify, Vercel).

---

## Customization

- **Add/Edit Tools:**  
  Update the `gridItems` array in [`ChatGrid.js`](src/components/ChatGrid.js) to add or modify tool cards.
- **Change Social Links:**  
  Edit the `rightButtons` and `leftButtons` arrays in [`FloatingButtons.js`](src/components/FloatingButtons.js).

---

## Contact

- Facebook: [ROM Robotics](https://www.facebook.com/ROMROBOTS)
- YouTube: [ROM Robotics](https://www.youtube.com/@ROMROBOTICS)
- Telegram: [@rom_dynamics](https://t.me/rom_dynamics)
- Viber: +959250074008
- Email: info@romdynamics.com

---

## License

This project is licensed under the MIT License.

# Github setup

## GitHub Pages Deployment

1. **Install gh-pages:**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Modify `package.json`:**
   - Add the homepage field:
     ```json
     "homepage": "https://your-username.github.io/your-repo-name",
     ```
   - Add deployment scripts:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```

3. **Use `HashRouter`** in your React app for GitHub Pages compatibility.

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin prototype
   ```

5. **Deploy:**
   ```bash
   npm run deploy
   ```

6. **Configure GitHub Pages:**
   - Go to your repository on GitHub.
   - Navigate to **Settings** → **Pages**.
   - Under **Source**, select:
     - **Branch:** `gh-pages`
     - **Folder:** `/ (root)`
   - Click **Save**.

7. **Access your site:**  
   After a few minutes, visit:  
   `https://your-username.github.io/your-repo-name`

8. **Update `.gitignore`:**

Add `/build` to `.gitignore` to prevent the build folder from being tracked by Git.

