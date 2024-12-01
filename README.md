# Redux-Based Admin and Employee Portal

This project is a React-based admin and employee portal application with functionality for user management, job postings, and state management using Redux. It also integrates Material UI for design components and Axios for API handling.

## Features

### Admin Portal
- **User Management:**
  - Displays all users in a table format (excluding passwords).
  - Displays details such as email, full name, and user type (employee/admin).
  
- **Job Management:**
  - Admins can create job postings using a form with the following fields:
    - Company Name
    - Job Title
    - Description
    - Salary
  - Jobs are stored in the database and retrieved as needed.

- **Access Control:**
  - Admins can access only admin-related functionalities and pages.

### Employee Portal
- **Job Listings:**
  - Employees can view all jobs posted by admins.
  - Job details include company name, job title, description, and salary.

- **Access Control:**
  - Employees are restricted to the `Jobs` page only.

### Shared Features
- **Authentication:**
  - Login is required to access any pages in the application.
  - Routes are restricted based on the logged-in user's type (`admin` or `employee`).

- **State Management:**
  - Application state is managed entirely using Redux.

- **Loading Indicators:**
  - Spinners or loaders are displayed during API requests for better user experience.

- **Pagination:**
  - The `Jobs` page supports pagination to improve usability with large datasets.

---

## Technologies Used
- **React**: For building the user interface.
- **Redux**: For state management.
- **Material UI**: For pre-styled components like navigation bars, tables, and forms.
- **Axios**: For handling API requests.
- **React Router**: For routing and navigation between pages.

---

## Setup and Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- A code editor like VS Code

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

---

## Project Structure
```
src/
├── components/       # Reusable React components
├── pages/            # Individual page components (Admin, Employee, Login)
├── redux/            # Redux slices and store
│   ├── slices/       # Feature-specific Redux slices
│   └── store.js      # Centralized Redux store
├── services/         # API call logic
├── utils/            # Helper functions and constants
├── App.js            # Main application component
└── index.js          # Application entry point
```

---

## APIs

### User APIs
1. **Create User** (`POST /user/create`):
   - Fields: `fullName`, `email`, `password`, `type`
   - `type` must be either `admin` or `employee`.

2. **Get All Users** (`GET /user/all`):
   - Returns a list of users (excluding passwords).

### Job APIs
1. **Create Job** (`POST /create/job`):
   - Fields: `companyName`, `jobTitle`, `description`, `salary`.

2. **Get Jobs** (`GET /get/jobs`):
   - Returns all job postings.

---

## State Management with Redux
State is centralized using Redux to manage global application state efficiently:
- User authentication state (login status, user type).
- Job data for admin and employee views.
- Loading states for API requests.

---

## Routing
Routing is handled using React Router:
- Admin pages (`/admin`) are accessible only by admin users.
- Employee pages (`/employee`) are accessible only by employee users.
- Redirects unauthorized users to the login page.

---

## UI Design
- Material UI components for consistent and modern design.
- Features include:
  - Responsive layout for desktop and mobile.
  - Pre-built components like cards, buttons, and tables.
  - Styled forms for job creation and user management.

---

## Future Enhancements
- **Search and Filter:**
  - Add search functionality for users and jobs.
  - Filter jobs by title or salary.

- **Notifications:**
  - Notify employees of new job postings.

- **Real-Time Updates:**
  - Use WebSockets for real-time updates on job postings.

- **User Profiles:**
  - Allow users to update their profiles and view details.

---

## Helpful Resources
- [React Router Documentation](https://reactrouter.com/docs)
- [Material UI Documentation](https://mui.com/material-ui/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
- [Axios GitHub Repository](https://github.com/axios/axios)

---
