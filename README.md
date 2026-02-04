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
│   ├── public/              # Static assets
│   └── src/
│       ├── assets/          # Images, fonts, and other static assets
│       ├── components/      # Reusable React components
│       │   ├── common/      # Common components (Header, Footer, ProtectedRoute)
│       │   ├── auth/        # Authentication components (LoginForm, SignupForm)
│       │   ├── product/     # Product-related components
│       │   ├── cart/        # Shopping cart components
│       │   └── order/       # Order-related components
│       ├── pages/           # Page components
│       │   ├── Login.jsx
│       │   ├── Signup.jsx
│       │   ├── Home.jsx
│       │   ├── Products.jsx
│       │   ├── ProductDetails.jsx
│       │   ├── Cart.jsx
│       │   └── Orders.jsx
│       ├── routes/          # Routing configuration
│       │   └── AppRoutes.jsx
│       ├── services/        # API service functions
│       │   ├── api.js
│       │   ├── authService.js
│       │   ├── productService.js
│       │   ├── cartService.js
│       │   └── orderService.js
│       ├── context/         # React Context providers
│       │   └── AuthContext.jsx
│       ├── hooks/           # Custom React hooks
│       ├── utils/           # Utility functions
│       ├── App.jsx          # Root component
│       └── main.jsx         # Application entry point
│
├── backend/                 # Node.js backend application
│   └── src/
│       ├── config/         # Configuration files
│       │   ├── db.js       # Database connection
│       │   └── env.js      # Environment variables
│       ├── models/         # Mongoose models
│       │   ├── User.js
│       │   ├── Product.js
│       │   ├── Cart.js
│       │   └── Order.js
│       ├── controllers/    # Request handlers
│       │   ├── authController.js
│       │   ├── productController.js
│       │   ├── cartController.js
│       │   └── orderController.js
│       ├── routes/         # API route definitions
│       │   ├── authRoutes.js
│       │   ├── productRoutes.js
│       │   ├── cartRoutes.js
│       │   └── orderRoutes.js
│       ├── middleware/     # Express middleware
│       │   ├── authMiddleware.js
│       │   └── errorMiddleware.js
│       ├── services/       # Business logic services
│       ├── utils/          # Utility functions
│       ├── app.js          # Express app configuration
│       └── server.js       # Server entry point
│
├── README.md               # Project documentation
└── PROJECT_CONTEXT.md      # Project context and development rules
```

## Folder Structure Explanation

### Frontend Structure

- **components/**: Reusable UI components organized by feature
  - **common/**: Shared components used across multiple pages
  - **auth/**: Authentication-related components
  - **product/**: Product display and interaction components
  - **cart/**: Shopping cart components
  - **order/**: Order-related components

- **pages/**: Full page components that represent routes
- **routes/**: React Router configuration
- **services/**: API communication layer, separated by domain
- **context/**: React Context API for global state management
- **hooks/**: Custom React hooks for reusable logic
- **utils/**: Helper functions and utilities

### Backend Structure

- **config/**: Application configuration (database, environment)
- **models/**: Mongoose schemas defining data structures
- **controllers/**: Request handlers that process HTTP requests
- **routes/**: API endpoint definitions
- **middleware/**: Express middleware for cross-cutting concerns
- **services/**: Business logic layer (optional, for complex operations)
- **utils/**: Helper functions and utilities

## Architecture Pattern

This project follows **Clean Architecture** and **MVC (Model-View-Controller)** patterns:

- **Models**: Data structures and database schemas
- **Views**: React components (frontend)
- **Controllers**: Request handlers that coordinate between models and views
- **Routes**: API endpoint definitions
- **Middleware**: Cross-cutting concerns (authentication, error handling)

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

## Development Notes

- This is a skeleton structure with empty files
- Each file contains comments explaining its purpose
- No business logic or authentication logic has been implemented
- Follow the comments in each file to understand where to add implementation

## License

[Add your license here]
