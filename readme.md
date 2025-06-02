# Project README

## Overview
This project is a React-based web application built with Vite as the frontend build tool. It includes a main Express backend server for handling API requests and payment integration with Razorpay. Additionally, there is a separate Airtable backend service for managing Airtable-related operations.

## Running the Project

### Prerequisites
- Node.js, npm, and Python installed (Python is required for some Node.js dependencies)
- Environment variables configured in a `.env` file at the root and in `src/airtable-backend` as needed

### Frontend (React + Vite)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173` (default Vite port) to view the app.

4. To build the production version:
   ```bash
   npm run build
   ```
5. To preview the production build locally:
   ```bash
   npm run preview
   ```

### Backend (Express Server)
1. Ensure environment variables are set in `.env` file for backend configuration.
2. Start the backend server:
   ```bash
   node server.js
   ```
3. The backend server will run on the port specified in the `.env` file or default to port 3000.

### Airtable Backend Service
1. Navigate to the Airtable backend directory:
   ```bash
   cd src/airtable-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Airtable backend server:
   ```bash
   node serverAirtable.js
   ```

## Project Structure and Navigation

- `src/`
  - `App.tsx` - Main React component setting up routing.
  - `main.tsx` - React entry point rendering the app.
  - `index.css` - Global styles.
  - `server.js` - Main Express backend server.
  - `airtable-backend/` - Separate backend service for Airtable integration.
  - `components/` - Reusable React components used across pages.
  - `pages/` - React components representing different pages/routes (Home, Order, About, FAQ, Contact, Payment status pages).
  - `services/` - Service modules for API integrations (e.g., Razorpay, Firestore, RealtimeDB).
  - `firebase/` - Firebase configuration and setup.
  - `types/` - TypeScript type definitions.
  - `vite-env.d.ts` - Vite environment type declarations.

## Environment Variables
- Use `.env` files to configure environment variables for both frontend and backend.
- Backend server (`src/server.js`) and Airtable backend (`src/airtable-backend/serverAirtable.js`) use `dotenv` to load environment variables.

## Additional Notes
- The frontend uses React Router for client-side routing.
- Notifications are handled using `react-toastify`.
- Payment integration is done via Razorpay.
- The backend server has CORS configured to allow requests from `https://arunshashtri.com`.

---

This README provides a guide to run and navigate the project. For any further details, refer to the respective files and folders.
