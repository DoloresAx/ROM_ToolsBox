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

