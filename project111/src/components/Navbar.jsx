



// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import CartIcon from './CartIcon';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// const Navbar = (props) => {
//   const { window } = props;
//   const { isAuthenticated, logout } = useAuth();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         TOYS STORE
//       </Typography>
//       <List>
//         {['Home', 'About', 'Contact'].map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             TOYS STORE
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
//   <Link to="/" className="nav-item">Home</Link>
//   <Link to="/about" className="nav-item">About</Link>
//   <Link to="/contact" className="nav-item">Contact</Link>
// </Box>

//           <CartIcon />
//           {isAuthenticated ? (
//         <Button color="inherit" onClick={logout} className="nav-item nav-button">Logout</Button>
//       ) : (
//         <Link to="/login"  className="nav-item nav-button">
//           <Button color="inherit" >Login</Button>
//         </Link>
//       )}
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// };



// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import CartIcon from './CartIcon';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// const Navbar = (props) => {
//   const { window } = props;
//   const { isAuthenticated, logout } = useAuth();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         TOYS STORE
//       </Typography>
//       <List>
//         {['Home', 'About', 'Contact'].map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             TOYS STORE
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
//   <Link to="/" className="nav-item">Home</Link>
//   <Link to="/about" className="nav-item">About</Link>
//   <Link to="/contact" className="nav-item">Contact</Link>
// </Box>

//           <CartIcon />
//           {isAuthenticated ? (
//         <Button color="inherit" onClick={logout} className="nav-item nav-button">Logout</Button>
//       ) : (
//         <Link to="/login"  className="nav-item nav-button">
//           <Button color="inherit" >Login</Button>
//         </Link>
//       )}
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// };

// export default Navbar;



// // src/components/Navbar.jsx
// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import CartIcon from './CartIcon';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// const Navbar = (props) => {
//   const { window } = props;
//   const { isAuthenticated, currentUser, logout } = useAuth();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         TOYTOWN
//       </Typography>
//       <List>
//         {['Home', 'About', 'Contact'].map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
          

// <ChildFriendlyIcon
//   sx={{
//     fontSize: '2.5rem',
//     color: 'white',
//     mr: 2
//   }}
// />




//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },
//             // fontFamily: '"Pacifico", cursive',
//             //   fontSize: '2.5rem',
//             //   color: 'white',
//             //   textShadow: '3px 3px 6px rgba(0,0,0,0.2)'
//              }}
//           >
//            Our Store
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
//             <Link to="/" className="nav-item">Home</Link>
//             <Link to="/about" className="nav-item">About</Link>
//             <Link to="/contact" className="nav-item">Contact</Link>
//             {isAuthenticated && currentUser?.email === 'dharsini@gmail.com' && (
//               <Link to="/admin-dashboard" className="nav-item">Admin Dashboard</Link>
//             )}
//             {isAuthenticated && currentUser?.role === 'user' && (
//               <Link to="/user-dashboard" className="nav-item">User Dashboard</Link>
//             )}
//           </Box>
//           <CartIcon />
//           {isAuthenticated ? (
//           //   <div className="flex justify-center items-center gap-3">
//           //   <Link to="/profile" className="text-white">
//           //     {user?.first_name} {user?.last_name}
//           //   </Link>
//           //   <span
//           //     onClick={handleLogout}
//           //     className="bg-red-400 px-3 py-2 rounded cursor-pointer text-white hover:bg-slate-300"
//           //   >
//           //     Logout
//           //   </span>
//           // </div>
//              <Button color="inherit" onClick={logout} className="nav-item nav-button">Logout</Button>
//           ) : (
//             <Link to="/login" className="nav-item nav-button">
//               <Button color="inherit">Login</Button>
//             </Link>
//           )}
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// };

import React from 'react';
import { useAuth } from '../context/AuthContext';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Navbar = (props) => {
  const { window } = props;
  const { isAuthenticated, currentUser, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TOYTOWN
      </Typography>
      <List>
        {['Home', 'About', 'Contact'].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          

<ChildFriendlyIcon
  sx={{
    fontSize: '2.5rem',
    color: 'white',
    mr: 2
  }}
/>




          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },
            // fontFamily: '"Pacifico", cursive',
            //   fontSize: '2.5rem',
            //   color: 'white',
            //   textShadow: '3px 3px 6px rgba(0,0,0,0.2)'
             }}
          >
           Our Store
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
            {isAuthenticated && currentUser?.email === 'dharsini@gmail.com' && (
              <Link to="/admin-dashboard" className="nav-item">Admin Dashboard</Link>
            )}
            {isAuthenticated && currentUser?.role === 'user' && (
              <Link to="/user-dashboard" className="nav-item">User Dashboard</Link>
            )}
          </Box>
          <CartIcon />
          
          {isAuthenticated ? (
            <Button color="inherit" onClick={logout} className="nav-item nav-button">Logout</Button>
          ) : (
            <Link to="/login" className="nav-item nav-button">
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
