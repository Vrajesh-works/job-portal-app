# Job Portal Application

A full-stack web application for job management with separate admin and employee portals, built with React, Redux, Express, and MongoDB.

## Project Overview

This job portal application provides a platform for admins to manage employees and post job listings, while employees can browse available positions. The application features role-based access control, modern UI with Material UI, and state management with Redux.

## Features

### Admin Portal
- **User Management:**
  - View all registered users in a table format (excluding passwords)
  - See user details including email, full name, and role type

- **Job Management:**
  - Create job postings with company name, job title, description, and salary
  - View and manage all job listings

### Employee Portal
- **Job Listings:**
  - Browse all available job opportunities
  - View detailed job information including company name, job title, description, and salary

### Shared Features
- **Authentication & Authorization:**
  - Secure login system with role-based access control
  - Protected routes based on user role (admin/employee)

- **Company Showcase:**
  - View featured companies with images and information
  
- **Navigation:**
  - About Us and Contact pages accessible to all authenticated users

## Tech Stack

### Frontend
- **React**: For building the user interface components
- **Redux**: For centralized state management
- **Material UI**: For styled components and responsive design
- **React Router**: For navigation and routing

### Backend
- **Node.js & Express**: For the server and API endpoints
- **MongoDB & Mongoose**: For database and data modeling
- **bcrypt**: For password hashing and security

## Project Structure

```
job-portal-app/
├── backend/                   # Backend server code
│   ├── images/                # Company images (Amazon, Apple, Flipkart, Google, Myntra)
│   ├── models/                # MongoDB schema definitions
│   │   ├── Job.js            # Job schema definition
│   │   └── User.js           # User schema definition
│   ├── routes/                # API route handlers
│   │   └── userRoutes.js     # User and job API endpoints
│   └── server.js              # Express server setup
│
└── frontend/                  # React application
    ├── public/                # Static files
    └── src/                   # React source code
        ├── components/        # React components
        │   ├── About.js       # About page
        │   ├── AddJobs.js     # Job creation form
        │   ├── CompanyShowcase.js # Company display
        │   ├── Contact.js     # Contact information
        │   ├── Employees.js   # Employee management
        │   ├── Home.js        # Landing page
        │   ├── JobListing.js  # Job listing component
        │   ├── Jobs.js        # Jobs page
        │   ├── Login.js       # Authentication
        │   └── LogoutButton.js # Logout functionality
        ├── store/             # Redux store setup
        │   ├── slices/        # Redux slices
        │   │   └── authSlice.js # Authentication state
        │   └── store.js       # Redux configuration
        └── api.js             # API integration
```

## Data Flow & Architecture

### Authentication Flow
1. User submits login credentials via the Login component
2. Credentials are sent to `/user/login` endpoint
3. Server validates credentials and returns user role and ID
4. Frontend stores authentication state in Redux store and localStorage
5. Protected routes check authentication status before rendering components
6. Different navigation options are presented based on user role

### Job Management Flow
1. Admin creates job posting through the AddJobs component
2. Job data is sent to `/user/create/job` endpoint
3. Server stores job in MongoDB using the Job model
4. Jobs are fetched from `/user/get/jobs` endpoint when needed
5. Job data is displayed in the Jobs component for both admins and employees

### State Management
- Authentication state is maintained in Redux store via authSlice.js
- Components access user role and authentication status from Redux
- Protected routes enforce role-based access control

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd job-portal-app/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Ensure MongoDB is running locally at mongodb://localhost:27017 or update the connection string in server.js

4. Start the server:
   ```
   npm start
   ```
   The server will run on http://localhost:4000

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd job-portal-app/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The application will open at http://localhost:3000

## Usage Guide

### Admin Users
1. Login with admin credentials
2. Access the Employees section to view all registered users
3. Navigate to Add Jobs to create new job listings
4. View the Jobs section to see all available positions
5. Check the Company Showcase to view featured companies
6. Access About and Contact pages for additional information

### Employee Users
1. Login with employee credentials
2. Browse available job listings in the Jobs section
3. View job details including company name, title, description, and salary
4. Access the Company Showcase to learn about featured companies
5. Visit About and Contact pages for additional information

## API Endpoints

### Authentication
- **Login**: `POST /user/login`
  - Request body: `{ email, password }`
  - Response: User role and ID
  - Description: Authenticates user credentials and returns role information

### User Management
- **Create User**: `POST /user/create`
  - Request body: `{ fullName, email, password, type }`
  - `type` must be either `admin` or `employee`
  - Description: Creates a new user with hashed password

- **Get All Users**: `GET /user/getAll`
  - Returns all users (excludes passwords)
  - Description: Retrieves a list of all registered users

### Job Management
- **Create Job**: `POST /user/create/job`
  - Request body: `{ companyName, jobTitle, description, salary }`
  - Description: Creates a new job posting

- **Get Jobs**: `GET /user/get/jobs`
  - Returns all job listings
  - Description: Retrieves all job postings from the database

### Resources
- **Company Images**: `GET /api/images`
  - Returns a list of available company images
  - Description: Scans the images directory and returns URLs

## Database Schemas

### User Schema
```javascript
{
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, required: true, enum: ['admin', 'employee'] }
}
```

### Job Schema
```javascript
{
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: Number, required: true }
}
```

## Security Features
- Password hashing using bcrypt
- Role-based access control for routes
- Protected API endpoints
- Authentication state management

## Deployment Considerations
- Configure environment variables for production
- Set up MongoDB Atlas for cloud database
- Use environment-specific configuration for API endpoints
- Consider containerization with Docker for easier deployment

## Future Enhancements
- Job application submission and tracking
- Search and filter capabilities for job listings
- User profile management and resume uploads
- Email notifications for new job postings
- Advanced analytics dashboard for admins
- Mobile application support
- Social media integration for job sharing
