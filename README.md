# UGC.AI — AI Short Video Ads Generator 🎥🤖

UGC.AI is a premium, full-stack AI SaaS application designed to turn product photos into viral, engaging short video ads in seconds. By combining advanced image compositing and video generation, the app allows merchants and creators to upload product images, customize visual styles, choose layout aspect ratios, and generate high-quality video advertisements.

---

## ✨ Features

- **Intuitive Ad Generator Dashboard**: Upload product and model photos, add a name/description, specify custom prompt parameters, and select your preferred aspect ratio (16:9 widescreen or 9:16 vertical).
- **Interactive "My Generations" Gallery**: View, filter, and manage your previously generated images and videos. Hover previews play video ads dynamically.
- **Dynamic Action Menu**: Share generated assets instantly or download high-quality images and video files.
- **Generation Result View**: Review completed projects on dedicated detail pages containing high-fidelity previews.
- **Community Feed**: Discover and share UGC-style video ads created by other creators.
- **Pricing & Credit System**: Choose pricing plans customized using Clerk features.
- **Ultra-Smooth UX**: Powered by Lenis smooth scrolling, micro-animations via Framer Motion, and beautiful dark-themed aesthetics.

---

## 🛠️ Tech Stack

### Frontend Architecture
- **Core Framework**: React 19 (TypeScript)
- **Build Tooling**: Vite 7
- **Routing**: React Router 7
- **Styling**: Tailwind CSS v4 (incorporating `@tailwindcss/vite` plugin)
- **Authentication**: Clerk React (`@clerk/react` & `@clerk/themes`)
- **Animations**: Framer Motion
- **Scroll Physics**: Lenis Scroll
- **Icons**: Lucide React

### Backend Infrastructure
- **Server Framework**: Node.js & Express
- **Database ORM**: Prisma (PostgreSQL with PG Pool adapter)
- **Authentication**: Clerk Express Middleware (`@clerk/express`)
- **Webhook Handlers**: SVIX webhook validation (`@clerk/express/webhooks`)
- **Environment**: dotenv & TypeScript execution using `tsx`

---

## 📂 Project Structure

```
├── Client/
│   └── reactjs/
│       ├── src/
│       │   ├── assets/        # Shared assets (images, static data mockups)
│       │   ├── components/    # Reusable UI components (Navbar, Footer, ProjectCard, Buttons, Pricing, etc.)
│       │   ├── pages/         # Page components (Home, Generator, MyGenerations, Result, Community, Plans)
│       │   ├── types/         # TypeScript type and interface declarations
│       │   ├── App.tsx        # Application root and route configuration
│       │   └── main.tsx       # Entry point
│       ├── .env.example       # Client environment configuration template
│       └── package.json
├── Server/
│   ├── configs/               # Configuration files (Prisma client settings)
│   ├── controllers/           # Route logic controllers (Clerk Webhooks, etc.)
│   ├── middlewares/           # Authentication check and authorization middlewares
│   ├── prisma/                # Schema database definitions and migration history
│   ├── types/                 # Express custom global type overrides
│   ├── .env.example           # Server environment configuration template
│   ├── package.json
│   ├── server.ts              # Server entrypoint
│   └── tsconfig.json          # TypeScript config
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) and a running [PostgreSQL](https://www.postgresql.org/) database.

### 1. Running the Server Backend

1. Navigate to the server directory:
   ```bash
   cd Server
   ```

2. Install dependency packages:
   ```bash
   npm install
   ```

3. Configure your environment variables:
   - Duplicate `.env.example` and name the file `.env`:
     ```bash
     cp .env.example .env
     ```
   - Fill in your `DATABASE_URL` (and optionally `CLERK_PUBLISHABLE_KEY`/`CLERK_SECRET_KEY` if authenticating routes).

4. Apply database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Launch the backend server (using Nodemon & TSX):
   ```bash
   npm run server
   ```
   *The server runs locally at [http://localhost:5000](http://localhost:5000).*

### 2. Running the Client Frontend

1. Navigate to the client directory:
   ```bash
   cd Client/reactjs
   ```

2. Install dependency packages:
   ```bash
   npm install
   ```

3. Configure your environment variables:
   - Duplicate `.env.example` and name the file `.env`:
     ```bash
     cp .env.example .env
     ```
   - Fill in your `VITE_CLERK_PUBLISHABLE_KEY`.

4. Launch the development server:
   ```bash
   npm run dev
   ```
   *The client runs locally at [http://localhost:5173](http://localhost:5173).*

---

## 📦 Build & Production Commands

### Client Production Build
To generate static production files for the frontend:
```bash
cd Client/reactjs
npm run build
```

### Server Compilation
To compile TypeScript code to Javascript in `/dist`:
```bash
cd Server
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
