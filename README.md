# ASVPA Website

Volunteer Association for Environmental Protection - Official Website

## 🚀 Migration to Astro + Tailwind CSS

This project has been migrated from React to Astro with Tailwind CSS for improved performance and maintainability.

### Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/          # Static assets (images, icons, etc.)
├── src/
│   ├── components/  # Reusable Astro components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Page routes (file-based routing)
│   └── styles/      # Global styles
├── astro.config.mjs # Astro configuration
└── tailwind.config.mjs # Tailwind configuration
```

## 🎨 Styling

This project uses Tailwind CSS for styling. Custom colors from the original design have been preserved in the Tailwind config:

- `esmeralda`: #3b7a7d
- `teal-100`: #157075
- `darkslategray`: #0c6267
- `silver`: #a7bfc7
- `lightblue`: #9bc0c2

## 📄 Pages

- `/` - Home
- `/about-us` - About Us
- `/services` - Volunteer Services
- `/projects` - Conservation Projects
- `/what-to-expect` - What To Expect
- `/faq` - Frequently Asked Questions
- `/register` - Registration Form

## 🌐 Deployment

The site is static and can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Notes

- All React components have been converted to Astro components
- CSS Modules have been replaced with Tailwind utility classes
- Interactive components (like the mobile menu) use minimal client-side JavaScript
- All public assets remain in the `/public` directory
