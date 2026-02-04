# E-commerce Web Application

A production-ready full-stack e-commerce web application built with modern web technologies.

## Tech Stack

### Frontend
- **React** - UI library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router** - Declarative routing for React applications

### Backend
- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework for Node.js
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT** - JSON Web Tokens for authentication

## Project Structure

```
E-commerce Application/
├── frontend/                 # React frontend application
│   └── src/
│       ├── components/      # Reusable React components
│       ├── pages/           # Page components
│       ├── routes/          # Routing configuration
│       ├── services/        # API service functions
│       ├── context/         # React Context providers
│       └── utils/           # Utility functions
│
├── backend/                 # Node.js backend application
│   └── src/
│       ├── config/         # Configuration files
│       ├── models/         # Mongoose models
│       ├── controllers/    # Request handlers
│       ├── routes/         # API route definitions
│       └── middleware/     # Express middleware
│
└── README.md
```

## Project Overview

### 1. Authentication
- Signup
- Login
- Logout

### 2. User
- View profile
- Edit profile (optional)

### 3. Product (E-commerce)
- View products
- View product details

### 4. Cart
- Add to cart
- Remove from cart

### 5. Orders (Basic)
- Place order
- View order history

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

4. Set up environment variables (see `.env.example` files)

5. Start the development servers:
   - Frontend: `npm start` (from frontend directory)
   - Backend: `npm start` (from backend directory)

## License

[Add your license here]
