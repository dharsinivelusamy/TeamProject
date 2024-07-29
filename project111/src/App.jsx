

// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import AddToCart from './components/AddToCart';

import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Register from './pages/Register';
import Sidebar from './components/Sidebar';
import './App.css';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import Contact from './pages/Contact';
import About from './pages/About';
//import { useSelector } from 'react-redux';
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
const App = () => {
  //const { isAuthenticated, user } = useSelector(state => state.auth);
  const [filters, setFilters] = useState({ categories: [], priceRange: '' });
  const products = [
    { id: 1, name: 'Toy Car', description: 'A fun toy car for kids.', price: 15.99, imageUrl: 'toy1.jpg', category: 'cars' },
    { id: 2, name: 'Bugatti toy car', description: ' Experience the thrill of luxury, a perfect replica of the iconic Bugatti sports car.', price: 1449.99, imageUrl: 'toy2.jpeg', category: 'cars' },
    { id: 3, name: 'Building Blocks', description: 'Educational building blocks set.', price: 29.99, imageUrl: 'toy3.jpg', category: 'blocks' },
    { id: 4, name: 'Abacus', description: 'A timeless, colorful tool for enhancing math skills and cognitive development in children and learners of all ages.', price: 29.99, imageUrl: 'toy4.jpeg', category: 'blocks' },
    { id: 5, name: 'Microwave Toys Play Kitchen Set', description: 'Enhance kitchen skills for kids.', price: 129.99, imageUrl: 'toy5.jpg', category: 'blocks' },
    { id: 6, name: 'Wooden Tool Box Kit', description: 'A durable, engaging set that inspires creativity and hands-on learning for young builders.', price: 150.00, imageUrl: 'toy6.jpg', category: 'blocks' },
    { id: 7, name: 'Wooden Musical Toy', description: 'To learn and enjoy in music.', price: 150.00, imageUrl: 'toy7.jpg', category: 'musical' },
    { id: 8, name: 'Baby Einstein Take Along Tunes Musical Toy', description: 'A delightful, portable music player to stimulate your babys auditory senses and encourage musical exploration.', price: 250.00, imageUrl: 'toy8.jpeg', category: 'musical' },
    { id: 9, name: 'Auris Glockenspiel 7 Tone Pentatonic', description: 'A toy Tunes making peaceful', price: 70.00, imageUrl: 'toy9.jpeg', category: 'musical' },
    { id: 10, name: 'Munchkin Mozart Magic Cube', description: 'Enhance knowledge of child', price: 80.00, imageUrl: 'toy10.png', category: 'musical' },
    { id: 11, name: 'Double Soft Toys', description: 'Gift to Twin babies ', price: 50.00, imageUrl: 'Double Soft Toys.jpeg', category: 'plush' },
    { id: 12, name: 'Jellycat Fuzzle Squirrel Soft toy', description: 'Surprise Animal lovers', price: 89.00, imageUrl: 'Jellycat Fuzzle Squirrel Soft Toy.jpeg', category: 'plush' },
    { id: 13, name: 'Keel toys Christmas Reindeer with scarf', description: 'Surprise for christmas with gifts', price: 350.00, imageUrl: 'Keel Toys Christmas Reindeer With Scarf.jpg', category: 'plush' },
    { id: 14, name: 'Panda Soft toy', description: 'Favorite for snow lovers', price: 400.00, imageUrl: 'Panda soft toy.jpg', category: 'plush' },
    { id: 15, name: 'Science Kit', description: 'Learn Physics in childhood', price: 570.00, imageUrl: 'Science kit.jpg', category: 'blocks' },
    { id: 16, name: 'Super soft Plush Corduroy Cuddle Farm Sitting Dog', description: 'A toy with respect', price: 1000.00, imageUrl: 'Super Soft Plush Corduroy Cuddle Farm Sitting Dog.webp', category: 'plush' },
    { id: 17, name: 'Wooden Maths frame', description: 'To become Ramanujan', price: 150.00, imageUrl: 'wooden maths frame.jpeg', category: 'blocks' }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = filters.categories.length > 0 ? filters.categories.includes(product.category) : true;
    const priceMatch = filters.priceRange ? (
      (filters.priceRange === '0-25' && product.price <= 25) ||
      (filters.priceRange === '25-50' && product.price > 25 && product.price <= 50) ||
      (filters.priceRange === '50-100' && product.price > 50 && product.price <= 100) ||
      (filters.priceRange === '100+' && product.price > 100)
    ) : true;
    return categoryMatch && priceMatch;
  });

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Header />
          <div className="main-container">
            <Sidebar filters={filters} setFilters={setFilters} />
            <main className='content'>
              <Routes>
                <Route path="/" element={<Home products={filteredProducts} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                {/* <Route
          path="/user-dashboard"
          element={
            <PrivateRoute role="user">
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        /> */}
        <Route path="/user-dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

const Home = ({ products }) => (
  <>
    <h2>Welcome to our Toy Store!</h2>
    <p>Explore our collection of toys and find something special for every child.</p>
    <div className="product-grid">
      {products.map(product => (
        <Product key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl}>
          <AddToCart product={product} />
        </Product>
      ))}
    </div>
  </>
);

// PrivateRoute component to handle authentication
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };
// src/components/PrivateRoute.jsx


// const PrivateRoute = ({ children, role }) => {
//   const { isAuthenticated, currentUser } = useAuth();

//   if (!isAuthenticated || (role && currentUser?.role !== role)) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };



export default App;
