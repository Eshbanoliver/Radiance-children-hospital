# 🏥 Radiance Children's Hospital - Web Application

A modern, high-performance web application designed for a pediatric and neonatal healthcare facility. Built with React 19, TypeScript, Vite, and Tailwind CSS, this platform provides a seamless experience for parents and guardians to explore medical services, book appointments, and access 24x7 emergency information.

---

## ✨ Features

- **🏠 Comprehensive Landing Pages**: Includes Home, About Us, Specialities & Services, Photo Gallery, Testimonials, and Contact Us.
- **⚡ Performance Optimized**: Utilizes React dynamic imports (`React.lazy` & `Suspense`) for code splitting and ultra-fast page load times.
- **📅 Interactive Appointment Booking Modal**: Users can easily request medical consultations, select specific pediatric services, choose dates, and submit inquiries.
- **🚑 24/7 Emergency & Quick Actions**: Floating call & WhatsApp action triggers for instant connection with healthcare providers.
- **🎨 Premium UI/UX**: Smooth micro-interactions powered by Framer Motion, micro-celebrations with Canvas Confetti, and clean modern typography.
- **📱 Fully Responsive**: Custom mobile navigation drawer, fluid grid layouts, and touch-optimized components.
- **🔍 Search Engine Optimization (SEO)**: Pre-configured XML Sitemap (`sitemap.xml`), `robots.txt`, and Open Graph metadata for enhanced search visibility.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS
- **Animations & Icons**: [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Linting**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

---

## 📁 Project Structure

```text
Radiance-children-hospital/
├── public/
│   ├── favicon.png
│   ├── logo.png
│   ├── robots.txt            # Search engine crawler instructions
│   └── sitemap.xml           # XML Sitemap for SEO indexing
├── src/
│   ├── assets/               # Image assets and graphics
│   ├── components/           # Reusable UI components (Navbar, Footer, Modal, FloatingActions)
│   ├── data/                 # Static data & hospital service content
│   ├── pages/                # Route pages (Home, AboutUs, ServicesPage, GalleryPage, etc.)
│   ├── types.ts              # TypeScript interfaces & definitions
│   ├── App.tsx               # Main application component & routes setup
│   ├── main.tsx              # Application entry point
│   └── index.css             # Tailwind imports & global styles
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Eshbanoliver/Radiance-children-hospital.git
   cd Radiance-children-hospital
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Development

Run the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 🛠️ Build & Deployment

### Build for Production

To generate an optimized production bundle in the `dist` folder:

```bash
npm run build
```

### Preview Production Build

To test the production build locally:

```bash
npm run preview
```

### Linting

To run the linter and check for code formatting/errors:

```bash
npm run lint
```

---

