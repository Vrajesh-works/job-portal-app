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
│   ├── images/                # Company images
│   ├── models/                # MongoDB schema definitions
│   ├── routes/                # API route handlers
│   └── server.js              # Express server setup
│
└── frontend/                  # React application
    ├── public/                # Static files
    └── src/                   # React source code
        ├── components/        # React components
        ├── store/             # Redux store and slices
        └── api.js             # API integration
```

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

3. Start the server:
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

## API Endpoints

### Authentication
- **Login**: `POST /user/login`
  - Request body: `{ email, password }`
  - Response: User role and ID

### User Management
- **Create User**: `POST /user/create`
  - Request body: `{ fullName, email, password, type }`
  - `type` must be either `admin` or `employee`

- **Get All Users**: `GET /user/getAll`
  - Returns all users (excludes passwords)

### Job Management
- **Create Job**: `POST /user/create/job`
  - Request body: `{ companyName, jobTitle, description, salary }`

- **Get Jobs**: `GET /user/get/jobs`
  - Returns all job listings

### Resources
- **Company Images**: `GET /api/images`
  - Returns a list of available company images

## Future Enhancements
- Job application functionality
- Search and filter capabilities for job listings
- User profile management
- Email notifications for new job postings
- Analytics dashboard for admins
