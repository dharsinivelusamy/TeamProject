// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice'; // Import your auth slice

// // Create the Redux store
// const store = configureStore({
//   reducer: {
//     auth: authReducer,
    
//   },
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import your auth slice

// Create the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
    
  },
});

export default store;