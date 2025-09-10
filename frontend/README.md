# Portfolio Frontend

React + TypeScript + Vite frontend for the portfolio website.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Three.js** - 3D graphics
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── ...
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🔧 Configuration

The frontend is configured to proxy API requests to the backend during development. Update `vite.config.ts` if you need to change the backend URL.

## 🚀 Deployment

Build the project and deploy the `dist` folder to any static hosting service:

```bash
npm run build
```

Popular options:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting