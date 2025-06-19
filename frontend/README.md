# Job Portal Frontend

This is the frontend part of the Job Portal application, built with React, Redux, and Material UI.

## Features

- **User Authentication**: Login functionality with role-based access
- **Admin Dashboard**: User management and job posting capabilities
- **Employee Portal**: Job listing and browsing functionality
- **Responsive Design**: Built with Material UI for a modern, responsive interface
- **State Management**: Redux for efficient state management across the application

## Project Structure

```
src/
├── api.js                # API integration layer
├── App.js                # Main component and routing logic
├── components/           # UI components
│   ├── About.js          # About page
│   ├── AddJobs.js        # Job creation form for admins
│   ├── CompanyShowcase.js # Featured companies display
│   ├── Contact.js        # Contact information page
│   ├── Employees.js      # Employee management for admins
│   ├── Home.js           # Landing page
│   ├── JobListing.js     # Individual job listing component
│   ├── Jobs.js           # Job listings page
│   ├── Login.js          # Authentication component
│   ├── LogoutButton.js   # Logout functionality
│   └── ProtectedRoute.js # Route protection logic
├── store/                # Redux store setup
│   ├── slices/           
│   │   └── authSlice.js  # Authentication state management
│   └── store.js          # Redux store configuration
```

## Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
The build is optimized for performance with minified files and hashed filenames.

## Integration with Backend

This frontend connects to a Node.js/Express backend running at `http://localhost:4000`. The API integration is handled in the `api.js` file, which provides methods for authentication, user management, and job operations.

## Authentication Flow

1. User logs in through the Login component
2. Authentication state is stored in Redux and localStorage
3. Protected routes check authentication status before rendering
4. Different views are shown based on user role (admin/employee)

## UI Framework

The application uses Material UI components for a consistent, modern design that's responsive across different device sizes.
