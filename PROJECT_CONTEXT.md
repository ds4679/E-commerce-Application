# Project Context

## Project Scope

This is a production-ready e-commerce web application skeleton that provides a complete folder and file structure for building a full-stack e-commerce platform.

### Core Features (To Be Implemented)

1. **Authentication**
   - User signup
   - User login
   - User logout
   - JWT-based authentication

2. **Product Management**
   - View product listings
   - View product details
   - Product search and filtering

3. **Shopping Cart**
   - Add items to cart
   - Remove items from cart
   - Update cart quantities

4. **Order Management**
   - Place orders
   - View order history
   - View order details

### User Roles

- **USER**: Can signup/login, view products, add to cart, and place orders
- **ADMIN**: (Optional - Phase 2) Can add/manage products

## Development Rules

### General Rules

1. **No Business Logic Implementation**
   - Files are created as empty skeletons with comments only
   - Do not implement authentication logic
   - Do not implement business logic
   - Do not add API calls or UI styling

2. **File Structure**
   - Follow the exact folder structure as specified
   - Use industry-standard naming conventions
   - Maintain consistent file organization

3. **Comments**
   - Each file should contain minimal placeholder comments
   - Comments should explain the file's purpose and responsibilities
   - Comments should guide future implementation

4. **Architecture**
   - Follow Clean Architecture principles
   - Implement MVC pattern on the backend
   - Separate concerns properly (components, services, controllers)

### Frontend Rules

1. **Component Organization**
   - Common components in `components/common/`
   - Feature-specific components in respective folders
   - Pages are full-page components in `pages/`

2. **Service Layer**
   - All API calls should go through service files
   - Services are organized by domain (auth, product, cart, order)
   - Use `api.js` for centralized HTTP client configuration

3. **State Management**
   - Use React Context for global authentication state
   - Use local state for component-specific data
   - Consider using custom hooks for reusable state logic

4. **Routing**
   - Use React Router for navigation
   - Implement protected routes using `ProtectedRoute` component
   - Define all routes in `AppRoutes.jsx`

### Backend Rules

1. **Model Layer**
   - Define Mongoose schemas in `models/` directory
   - Include validation rules in schemas
   - Use appropriate data types and indexes

2. **Controller Layer**
   - Controllers handle HTTP requests and responses
   - Controllers should be thin - delegate business logic to services if needed
   - Return consistent response formats

3. **Route Layer**
   - Define routes in `routes/` directory
   - Group routes by feature (auth, product, cart, order)
   - Apply middleware at route level (authentication, validation)

4. **Middleware**
   - Use `authMiddleware.js` for JWT token verification
   - Use `errorMiddleware.js` for centralized error handling
   - Keep middleware focused and reusable

5. **Configuration**
   - Store sensitive data in environment variables
   - Use `config/env.js` for environment configuration
   - Use `config/db.js` for database connection

## Coding Standards

### Naming Conventions

1. **Files**
   - Use PascalCase for React components (e.g., `LoginForm.jsx`)
   - Use camelCase for JavaScript modules (e.g., `authService.js`)
   - Use descriptive names that indicate purpose

2. **Variables and Functions**
   - Use camelCase for variables and functions
   - Use descriptive names
   - Use verbs for functions (e.g., `getUser`, `createOrder`)

3. **Components**
   - Use PascalCase for component names
   - Use descriptive names (e.g., `ProductCard`, `CartItem`)

4. **Constants**
   - Use UPPER_SNAKE_CASE for constants
   - Group related constants together

### Code Organization

1. **Imports**
   - Group imports: external libraries, internal modules, relative imports
   - Use absolute imports where possible (configure path aliases)

2. **Exports**
   - Use named exports for utilities and services
   - Use default exports for React components
   - Be consistent with export style

3. **File Structure**
   - Keep files focused on a single responsibility
   - Split large files into smaller, focused modules
   - Group related functionality together

### Best Practices

1. **Error Handling**
   - Always handle errors appropriately
   - Provide meaningful error messages
   - Log errors for debugging

2. **Security**
   - Never expose sensitive data in frontend code
   - Validate all user inputs
   - Use environment variables for configuration
   - Implement proper authentication and authorization

3. **Performance**
   - Optimize database queries
   - Implement pagination for large datasets
   - Use lazy loading for routes and components
   - Minimize unnecessary re-renders

4. **Testing**
   - Write unit tests for utilities and services
   - Write integration tests for API endpoints
   - Write component tests for React components

5. **Documentation**
   - Document complex logic and algorithms
   - Keep comments up to date with code changes
   - Write clear commit messages

## Next Steps

1. **Environment Setup**
   - Create `.env` files for frontend and backend
   - Configure MongoDB connection string
   - Set up JWT secret keys

2. **Dependencies Installation**
   - Install React and related dependencies
   - Install Express and related dependencies
   - Install Mongoose and MongoDB driver

3. **Implementation Order**
   - Start with database models
   - Implement authentication endpoints
   - Build product endpoints
   - Implement cart functionality
   - Add order management

4. **Testing**
   - Set up testing framework
   - Write tests as you implement features
   - Ensure code coverage

## Notes

- This structure is designed to be scalable and maintainable
- Follow the separation of concerns principle
- Keep code DRY (Don't Repeat Yourself)
- Refactor as needed to maintain code quality
- Review and update this document as the project evolves
