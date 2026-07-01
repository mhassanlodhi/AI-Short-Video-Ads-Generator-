# UGC.AI — AI Short Video Ads Generator 🎥🤖

UGC.AI is a premium, full-stack AI SaaS application designed to turn product photos into viral, engaging short video ads in seconds. By combining advanced image compositing and video generation, the app allows merchants and creators to upload product images, customize visual styles, choose layout aspect ratios, and generate high-quality video advertisements.

---

## ✨ Features

- **Intuitive Ad Generator Dashboard**: Upload product and model photos, add a name/description, specify custom prompt parameters, and select your preferred aspect ratio (16:9 widescreen or 9:16 vertical).
- **Interactive "My Generations" Gallery**: View, filter, and manage your previously generated images and videos. Hover previews play video ads dynamically.
- **Dynamic Action Menu**: Share generated assets instantly or download high-quality images and video files.
- **Generation Result View**: Review completed projects on dedicated detail pages containing high-fidelity previews.
- **Community Feed**: Discover and share UGC-style video ads created by other creators.
- **Ultra-Smooth UX**: Powered by Lenis smooth scrolling, micro-animations via Framer Motion, and beautiful dark-themed aesthetics.

---

## 🛠️ Tech Stack

### Frontend Architecture
- **Core Framework**: React 19 (TypeScript)
- **Build Tooling**: Vite 7
- **Routing**: React Router 7
- **Styling**: Tailwind CSS v4 (incorporating `@tailwindcss/vite` plugin)
- **Animations**: Framer Motion
- **Scroll Physics**: Lenis Scroll
- **Icons**: Lucide React

### Backend Infrastructure
- **Server Framework**: Node.js & Express
- **Database**: PostgreSQL (with PG Pool connection)
- **AI Processing Engine**: Google Gemini API & specialized image/video composition pipelines

---

## 📂 Project Structure

```
├── Client/
│   └── reactjs/
│       ├── src/
│       │   ├── assets/        # Shared assets (images, static data mockups)
│       │   ├── components/    # Reusable UI components (Navbar, Footer, ProjectCard, Buttons, etc.)
│       │   ├── pages/         # Page components (Home, Generator, MyGenerations, Result, Community, Plans)
│       │   ├── types/         # TypeScript type and interface declarations
│       │   ├── App.tsx        # Application root and route configuration
│       │   └── main.tsx       # Entry point
│       ├── package.json
│       ├── vite.config.ts
│       └── tailwind.config.js
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Running the Client Locally

1. Navigate to the client directory:
   ```bash
   cd Client/reactjs
   ```

2. Install dependency packages:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   *The client will default to running on [http://localhost:5173](http://localhost:5173).*

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🤝 Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License
This project is licensed under the terms of the license file located in `Client/LICENSE.txt`.
