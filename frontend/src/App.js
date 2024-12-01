import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Import Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/common/PrivateRoute';
import Navbar from './components/common/Navbar';

// Admin Components
import EmployeeList from './components/admin/EmployeeList';
import AddJob from './components/admin/AddJob';

// Employee Components
import JobList from './components/employee/JobList';

// Dashboard or Home
import Dashboard from './components/common/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            {/* Public Routes */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            {/* Protected Routes */}
            <PrivateRoute exact path="/" component={Dashboard} />
            
            {/* Admin Routes */}
            <PrivateRoute 
              exact 
              path="/employees" 
              component={EmployeeList} 
              allowedRoles={['admin']} 
            />
            <PrivateRoute 
              exact 
              path="/add-job" 
              component={AddJob} 
              allowedRoles={['admin']} 
            />

            {/* Employee Routes */}
            <PrivateRoute 
              exact 
              path="/jobs" 
              component={JobList} 
              allowedRoles={['employee']} 
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
