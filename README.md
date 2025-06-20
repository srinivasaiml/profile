# Patchipala Srinivas Portfolio

A modern, interactive portfolio website showcasing my projects, skills, and experience as a developer. Built with React, TypeScript, Tailwind CSS, and Vite for lightning-fast performance and beautiful UI.

---

## Features

- 🎨 **Modern UI** – Clean, responsive, and animated design
- 🖥️ **Project Showcase** – Filterable, animated project cards with live links
- 📱 **Mobile Friendly** – Fully responsive for all devices
- ⚡ **Fast Build** – Powered by Vite for instant loading
- 🛠️ **Tech Stack Badges** – See the technologies used in each project
- 🌙 **Dark Mode** (optional)
- 📨 **Contact Section** – Easy way to reach out

---

## Tech Stack

**Frontend**
- Framework: React 18 + TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React
- Build Tool: Vite

**Other**
- Deployment: Vercel, GitHub Pages
- Linting: ESLint

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/srinivasaiml/portfolio.git
   cd portfolio
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
   The app will be running at [http://localhost:5173](http://localhost:5173)

### Build for Production
```sh
npm run build
# or
yarn build
```
The output will be in the `dist` folder.

---

## Project Structure

```
portfolio/
├── src/
│   ├── components/      # React components (Projects, About, Contact, etc.)
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind and global styles
├── public/              # Static assets
├── package.json         # Project dependencies
└── README.md            # This file
```

---

## Deployment

### Deploy on Vercel
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com), import your repo, and set the project name to `patchipalasrinivas`.
3. Use the following settings if prompted:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy** and your portfolio will be live!

### Deploy on GitHub Pages
1. Build the project: `npm run build`
2. Use a tool like `gh-pages` to publish the `dist` folder.

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Support

For support, open an issue on GitHub or contact me via the contact section on the portfolio.

---

## Acknowledgments
- UI inspiration from modern developer portfolios
- Icons from Lucide React
- Animations from Framer Motion
- Images from Unsplash and Pexels
