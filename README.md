# 🎃 HacktobHERfest 2025 - Broken Repo Challenge! 👩‍💻

Welcome to the **HacktobHERfest Broken Repo** - a fun, beginner-friendly React project where you can practice contributing to open source by fixing small "broken" issues! This is the perfect place to learn GitHub workflows, pull requests, and collaborative coding in a supportive environment.

## 🌟 What is this?

This is a themed React landing page for SheCodesOKC's HacktobHERfest event. The codebase has some intentional "bugs" (like typos and missing letters) that are perfect for first-time contributors to find and fix. It's designed to be educational, fun, and welcoming to everyone!

## 🚀 Getting Started

### Prerequisites
- A GitHub account
- Git installed on your computer
- Node.js and npm installed

### Setup Instructions

1. **Fork the repository** 🍴
   - Click the "Fork" button in the top-right corner of this page
   - This creates your own copy of the project

2. **Clone your fork locally** 📥
   ```bash
   git clone https://github.com/YOUR_USERNAME/hacktober-broken-repo.git
   cd hacktober-broken-repo
   ```

3. **Install dependencies** 📦
   ```bash
   npm install
   ```

4. **Start the development server** 🏃‍♀️
   ```bash
   npm run dev
   ```

5. **Open in your browser** 🌐
   - Visit `http://localhost:5173`
   - You should see the HacktobHERfest landing page!

## 🔍 Finding Issues

Check out the **Issues** tab on GitHub to find fun broken things to fix! Each issue will have:
- A description of what's broken
- Which file to look in
- What the fix should be
- Difficulty level (beginner-friendly!)

## 🤝 How to Contribute

### Step-by-Step Guide

1. **Pick an issue** 📋
   - Go to the Issues tab and find something that looks fun to fix
   - Comment on the issue to let others know you're working on it

2. **Create a new branch** 🌿
   ```bash
   git checkout -b fix/your-issue-description
   ```
   Example: `git checkout -b fix/header-typo`

3. **Make your changes** ✏️
   - Open the file mentioned in the issue
   - Fix the broken code (typos, missing letters, etc.)
   - Test your changes by refreshing the browser

4. **Add yourself to the Contributors Wall** 🏆
   - Open `src/components/Contributors.jsx`
   - Add your GitHub handle to the contributors array
    ```js
    const contributors = [
            { name: "UserName", github: "https://github.com/USERNAME" },
    ]
    ```

5. **Commit your changes** 💾
   ```bash
   git add .
   git commit -m "Fix: [describe what you fixed]"
   ```

6. **Push your branch** ⬆️
   ```bash
   git push origin fix/your-issue-description
   ```

7. **Open a Pull Request** 🔄
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Fill out the PR description
   - Submit your PR!

8. **Celebrate!** 🎉
   - Once your PR is merged, your name will appear on the Contributors Wall
   - You've just made your first open source contribution!

## ✨ Fun Features

This project includes several festive elements:

- **🎨 Contributors Wall**: See all the amazing people who've contributed!
- **🌈 Festive Hover Effects**: Rainbow gradients and fun animations
- **👻 Playful "Ghost" Bugs**: Intentional typos and missing letters (with fun comments!)
- **🎃 Halloween Theme**: Perfect for HacktobHERfest season

## 🔗 Helpful Links

- [GitHub Issues](https://github.com/shecodesokc/hacktober-broken-repo/issues) - Find bugs to fix
- [GitHub Docs for Beginners](https://docs.github.com/en/get-started) - Learn GitHub basics
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/) - General contribution guide
- [SheCodesOKC](https://shecodesokc.com/) - Learn more about our community

## 🆘 Need Help?

- Check the Issues tab for guidance
- Ask questions in the issue comments
- Join the SheCodesOKC community for support
- Remember: Everyone was a beginner once! 💜

## 🎯 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Main header with logo and title
│   ├── Hero.jsx            # Welcome section with CTA button
│   ├── Contributors.jsx    # Contributors wall
│   └── Footer.jsx          # Footer with organization info
├── App.jsx                 # Main app component
└── App.css                 # Global styles
```

---

**Made with 💜 by SheCodesOKC**

Happy contributing! 🎃✨👩‍💻
