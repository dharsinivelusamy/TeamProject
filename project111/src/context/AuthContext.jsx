


// // src/context/AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [users, setUsers] = useState([]); // List of registered users

//   const register = (newUser) => {
//     // Check if user already exists
//     const existingUser = users.find(user => user.email === newUser.email);
//     if (existingUser) {
//       throw new Error('User already exists');
//     }
//     // Add new user to the list
//     setUsers((prevUsers) => [...prevUsers, newUser]);
//   };

//   const login = (email, password) => {
//     const user = users.find(user => user.email === email && user.password === password);
//     if (user) {
//       setIsAuthenticated(true);
//       setCurrentUser(user);
//     } else {
//       throw new Error('Invalid credentials');
//     }
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setCurrentUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout, register, currentUser, users }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([
    // // Example of predefined users with roles
    // { name: 'Admin User', email: 'admin@example.com', password: 'adminpass', role: 'admin' },
    // { name: 'Regular User', email: 'user@example.com', password: 'userpass', role: 'user' },
  ]);

  const register = (newUser) => {
    const existingUser = users.find(user => user.email === newUser.email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const login = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
      return user;
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout, register, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// src/context/AuthContext.js
// import React, { createContext, useContext, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login as reduxLogin, logout as reduxLogout } from '../redux/authSlice';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const dispatch = useDispatch();

//   const login = (email, password) => {
//     const user = { email, password }; // Replace with your authentication logic
//     setIsAuthenticated(true);
//     setCurrentUser(user);
//     dispatch(reduxLogin(user));
//     return user;
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setCurrentUser(null);
//     dispatch(reduxLogout());
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
