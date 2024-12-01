# Redux-Based Admin and Employee Portal

This project is a React-based admin and employee portal application with functionality for user management, job postings, and state management using Redux. The portal has distinct features for admin and employee users and incorporates Material UI for design components.

## Features

### Admin Portal
1. **User Management:**
   - Display a list of all users in a table format (excluding passwords).
   - Users are categorized by type (`employee` or `admin`).

2. **Job Management:**
   - Add new job postings using a form that includes:
     - Company Name
     - Job Title
     - Description
     - Salary
   - Manage jobs using the `/create/job` API.

3. **Access Control:**
   - Admin users can access the admin functionalities, including user management and adding jobs.

### Employee Portal
1. **Job Listings:**
   - View all available jobs posted by the admin using the `/get/jobs` API.

2. **Access Control:**
   - Employees can only view the `Jobs` page.

### Shared Features
- **Authentication:**
  - Login required to access any pages.
  - Routing and page access are restricted based on the user type (`employee` or `admin`).

- **State Management:**
  - Application state is managed entirely through Redux.

- **Loading Indicators:**
  - Spinners are displayed during API calls for improved user experience.

- **Pagination (Optional):**
  - Jobs page includes pagination for better usability when viewing large datasets.

## Installation

### Prerequisites
Ensure that you have the following installed on your system:
- **Node.js** (v16 or above)
- **npm** or **yarn**

### Steps to Install and Run
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
