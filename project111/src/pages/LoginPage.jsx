
// // src/components/LoginPage.jsx
// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate, Link } from 'react-router-dom';

// const LoginPage = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState({ email: false, password: false, login: '' });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { email, password } = formData;

//     // Reset error messages
//     setError({ email: false, password: false, login: '' });

//     // Validate email format
//     if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//       setError(prev => ({ ...prev, email: true }));
//       return;
//     }

//     // Check if email and password are provided
//     if (email && password) {
//       try {
//         login(email, password);
//         navigate('/'); // Redirect to the home page after login
//       } catch (error) {
//         setError(prev => ({ ...prev, login: 'Invalid credentials or user not registered.' }));
//       }
//     } else {
//       setError({
//         email: !email,
//         password: !password,
//         login: ''
//       });
//     }
//   };

//   return (
//     <Box sx={{ marginRight: 155 }}>
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '100%' },
//           display: "flex",
//           justifyContent: 'center',
//           alignItems: "center",
//           flexDirection: "column",
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100vh',
//           backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//           zIndex: 1000
//         }}
//         noValidate
//         autoComplete="off"
//         onSubmit={handleSubmit}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             maxWidth: 400,
//             padding: 4,
//             backgroundColor: '#fff',
//             borderRadius: 2,
//             boxShadow: 3,
//           }}
//         >
//           <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h4'>LOGIN</Typography>
//           <TextField
//             id="email"
//             label="Email"
//             variant="outlined"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             error={error.email}
//             helperText={error.email && "Enter a valid email"}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             id="password"
//             type="password"
//             label="Password"
//             variant="outlined"
//             value={formData.password}
//             onChange={handleChange}
//             error={error.password}
//             helperText={error.password && "Fill in the password"}
//             fullWidth
//             margin="normal"
//           />
//           <Button sx={{ width: '100%', mt: 2 }} variant="contained" type="submit">SUBMIT</Button>
//           {error.login && (
//             <Typography color="error" variant="body2" sx={{ mt: 2 }}>
//               {error.login}
//             </Typography>
//           )}
//           <Typography sx={{ mt: 2, textAlign: 'center' }}>
//             Don't have an Account?<Link to="/register">Register</Link>
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default LoginPage;
// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate, Link } from 'react-router-dom';

// const LoginPage = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState({ email: false, password: false, login: '' });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = formData;
//     setError({ email: false, password: false, login: '' });

//     try {
//       const user = login(email, password);
//       if (user.email === 'dharsini@gmail.com') {
//         navigate('/admin-dashboard');
//       } else {
//         navigate('/user-dashboard');
//       }
//     } catch (error) {
//       setError(prev => ({ ...prev, login: 'Invalid credentials or user not registered.' }));
//     }
//   };

//   return (
//     <Box
//     sx={{marginRight:155}}>
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '100%' },
//           display: "flex",
//           justifyContent: 'center',
//           alignItems: "center",
//           flexDirection: "column",
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100vh',
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           zIndex: 1000
//         }}
//         noValidate
//         autoComplete="off"
//         onSubmit={handleSubmit}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             maxWidth: 400,
//             padding: 4,
//             backgroundColor: '#fff',
//             borderRadius: 2,
//             boxShadow: 3,
//           }}
//         >
//           <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h4'>LOGIN</Typography>
//           <TextField
//             id="email"
//             label="Email"
//             variant="outlined"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             error={error.email}
//             helperText={error.email && "Enter a valid email"}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             id="password"
//             type="password"
//             label="Password"
//             variant="outlined"
//             value={formData.password}
//             onChange={handleChange}
//             error={error.password}
//             helperText={error.password && "Fill in the password"}
//             fullWidth
//             margin="normal"
//           />
//           <Button sx={{ width: '100%', mt: 2 }} variant="contained" type="submit">SUBMIT</Button>
//           {error.login && (
//             <Typography color="error" variant="body2" sx={{ mt: 2 }}>
//               {error.login}
//             </Typography>
//           )}
//           <Typography sx={{ mt: 2, textAlign: 'center' }}>
//             Don't have an Account?<Link to="/register">Register</Link>
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default LoginPage;
// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate, Link } from 'react-router-dom';

// const LoginPage = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState({ email: false, password: false, login: '' });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = formData;
//     setError({ email: false, password: false, login: '' });

//     try {
//       const user = login(email, password);
//       if (user.email === 'dharsini@gmail.com') {
//         navigate('/admin-dashboard');
//       } else {
//         navigate('/user-dashboard');
//       }
//     } catch (error) {
//       setError(prev => ({ ...prev, login: 'Invalid credentials or user not registered.' }));
//     }
//   };

//   return (
//     <Box
//     sx={{marginRight:155}}>
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '100%' },
//           display: "flex",
//           justifyContent: 'center',
//           alignItems: "center",
//           flexDirection: "column",
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100vh',
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           zIndex: 1000
//         }}
//         noValidate
//         autoComplete="off"
//         onSubmit={handleSubmit}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             maxWidth: 400,
//             padding: 4,
//             backgroundColor: '#fff',
//             borderRadius: 2,
//             boxShadow: 3,
//           }}
//         >
//           <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h4'>LOGIN</Typography>
//           <TextField
//             id="email"
//             label="Email"
//             variant="outlined"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             error={error.email}
//             helperText={error.email && "Enter a valid email"}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             id="password"
//             type="password"
//             label="Password"
//             variant="outlined"
//             value={formData.password}
//             onChange={handleChange}
//             error={error.password}
//             helperText={error.password && "Fill in the password"}
//             fullWidth
//             margin="normal"
//           />
//           <Button sx={{ width: '100%', mt: 2 }} variant="contained" type="submit">SUBMIT</Button>
//           {error.login && (
//             <Typography color="error" variant="body2" sx={{ mt: 2 }}>
//               {error.login}
//             </Typography>
//           )}
//           <Typography sx={{ mt: 2, textAlign: 'center' }}>
//             Don't have an Account?<Link to="/register">Register</Link>
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../redux/authSlice';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: false, password: false, login: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    setError({ email: false, password: false, login: '' });

    try {
      const user = authLogin(email, password);
      dispatch(login(user));
      if (user.email === 'dharsini@gmail.com') {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } catch (error) {
      setError(prev => ({ ...prev, login: 'Invalid credentials or user not registered.' }));
    }
  };

  return (
    <Box sx={{ marginRight: 155 }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
          flexDirection: "column",
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            padding: 4,
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h4'>LOGIN</Typography>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={error.email}
            helperText={error.email && "Enter a valid email"}
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            error={error.password}
            helperText={error.password && "Password must be at least 6 characters"}
            fullWidth
            margin="normal"
          />
          {error.login && <Typography color="error">{error.login}</Typography>}
          <Button
            variant="contained"
            type="submit"
            sx={{ display: 'block', width: '100%', mt: 2 }}
          >
            Login
          </Button>
          <Typography sx={{ textAlign: 'center', mt: 2 }}>Not registered yet? <Link to="/register">Register</Link></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
