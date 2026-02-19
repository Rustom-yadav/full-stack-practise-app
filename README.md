# Full Stack Practise App

A full-stack practice application with a React frontend and Express backend. The frontend fetches and displays programmer jokes from the backend API.

---

## Live Demo

| App      | URL |
|----------|-----|
| Backend  | `https://your-backend.onrender.com` *(add your deployed URL)* |
| Frontend | `https://your-app.vercel.app` *(add your deployed URL)* |

*Update the table above with your production URLs after deploying (e.g. Render, Railway, Vercel).*

---

## Features

- REST API backend (Express) with CORS support
- React frontend with Vite (HMR, fast refresh)
- Fetches and displays programmer jokes from the API
- Ready for local development with proxy setup

## Tech Stack

| Layer   | Technologies |
|---------|--------------|
| Backend | Node.js, Express, CORS, dotenv |
| Frontend | React 19, Vite 7, Axios |

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes with Node.js)

## Getting Started

### 1. Clone and install

```bash
# Clone the repository (if applicable)
# git clone <repo-url>
# cd full-stack-practise-app

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies (from project root)
cd ../frontend
npm install
```

### 2. Environment variables (optional)

**Backend** — create `backend/.env`:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### 3. Run locally

**Terminal 1 — Backend:**

```bash
cd backend
npm start
```

Backend runs at [http://localhost:5000](http://localhost:5000).

**Terminal 2 — Frontend:**

```bash
cd frontend
npm run dev
```

Frontend runs at [http://localhost:5173](http://localhost:5173).

Ensure the frontend is configured to proxy `/api` requests to the backend (e.g. in `frontend/vite.config.js`) so API calls work in development.

---

## Project Structure

```
├── backend/          # Express API
│   ├── server.js
│   └── package.json
├── frontend/         # React + Vite app
│   ├── src/
│   ├── index.html
│   └── package.json
└── README.md
```

## API Reference

| Method | Endpoint      | Description        |
|--------|---------------|--------------------|
| GET    | `/`           | Health check       |
| GET    | `/api/data`   | Sample JSON message |
| GET    | `/api/html`   | Sample HTML       |
| GET    | `/api/jokes`  | List of programmer jokes (JSON) |

## Scripts

**Backend** (`backend/`):

- `npm start` — start the server

**Frontend** (`frontend/`):

- `npm run dev` — start dev server with HMR
- `npm run build` — production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## License

ISC
