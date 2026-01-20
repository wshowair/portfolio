# Portfolio Website

A simple, static portfolio website built with pure HTML and CSS.

## Features

- ✅ Pure HTML/CSS - No frameworks or build tools required
- ✅ Minimal and clean design
- ✅ Responsive layout
- ✅ SEO-friendly with meta tags and Open Graph data
- ✅ Fast and lightweight

## 🚀 Project Structure

```
├── public/              # Static assets (images, fonts, SVGs)
├── src/
│   └── styles/         # CSS stylesheets
├── .github/
│   └── workflows/      # GitHub Actions for deployment
├── index.html          # Main HTML file
├── package.json        # Dev dependencies for linting
└── README.md
```

All static assets like images, fonts, and SVGs are in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Installs dev dependencies (linting tools)     |
| `npm run dev`     | Starts local dev server at `localhost:3000`   |
| `npm run preview` | Preview site locally at `localhost:4173`      |
| `npm run lint`    | Lint CSS files                                |

## 🌐 Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

The deployment workflow is configured in `.github/workflows/cd.yml`.

## 💻 Development

1. Clone the repository
2. Run `npm install` to install linting dependencies
3. Run `npm run dev` to start the development server
4. Open `http://localhost:3000` in your browser

## 📝 License

See LICENSE file for details.
