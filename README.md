# Contact Manager API

A RESTful API for managing contacts with user authentication, built with Node.js and Express.js.

## Features

- User authentication (register/login)
- JWT token-based authorization
- CRUD operations for contacts
- User-specific contact management
- Error handling middleware
- Database integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd contact-manager/backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
CONNECTION_STRING=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
```

## Project Structure

```
backend/
├── config/
│   └── dbConnection.js     # Database configuration
├── controllers/
│   ├── contactController.js # Contact related operations
│   └── userController.js    # User authentication operations
├── middleware/
│   ├── errorHandler.js      # Global error handling
│   └── validateTokenhandler.js # JWT validation
├── models/
│   ├── contactModel.js     # Contact schema
│   └── userModel.js        # User schema
├── Routes/
│   ├── contactRoutes.js    # Contact routes
│   └── userRoutes.js       # Authentication routes
├── constants.js            # Application constants
├── server.js              # Main application file
└── package.json           # Project dependencies
```

## API Endpoints

### Authentication

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/current` - Get current user info

### Contacts

- `GET /api/contacts` - Get all contacts for the logged-in user
- `POST /api/contacts` - Create a new contact
- `GET /api/contacts/:id` - Get contact by ID
- `PUT /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact

## Running the Application

Start the server in development mode:

```bash
npm run dev
```

For production:

```bash
npm start
```

## API Authentication

All contact endpoints require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

The API implements centralized error handling through middleware. Common HTTP status codes used:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Security Features

- Password hashing
- JWT token authentication
- Protected routes
- Request validation
- Input sanitization
