
// // src/components/AdminDashboard.jsx
// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { Navigate } from 'react-router-dom';
// import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField } from '@mui/material';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SaveIcon from '@mui/icons-material/Save';

// const productData = [
//   { id: 1, name: 'Toy Car', purchases: 40 },
//   { id: 2, name: 'Doll', purchases: 30 },
//   { id: 3, name: 'Lego Set', purchases: 20 },
//   { id: 4, name: 'Puzzle', purchases: 50 },
//   { id: 5, name: 'Action Figure', purchases: 60 },
// ];

// const AdminDashboard = () => {
//   const { isAuthenticated, currentUser } = useAuth();
//   const [products, setProducts] = useState(productData);
//   const [editingProductId, setEditingProductId] = useState(null);
//   const [editedProductName, setEditedProductName] = useState('');

//   if (!isAuthenticated || currentUser.role !== 'admin') {
//     return <Navigate to="/login" />;
//   }


//   const handleRemoveProduct = (id) => {
//     setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
//   };

//   const handleEditProduct = (product) => {
//     setEditingProductId(product.id);
//     setEditedProductName(product.name);
//   };

//   const handleSaveProduct = (id) => {
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.id === id ? { ...product, name: editedProductName } : product
//       )
//     );
//     setEditingProductId(null);
//     setEditedProductName('');
//   };

//   return (
//     <Box sx={{ padding: 4 }}>
//       <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
//       <Typography variant="h6">Welcome, {currentUser.name}. You are logged in as an admin.</Typography>
      
//       <Paper sx={{ padding: 2, marginTop: 4 }}>
//         <Typography variant="h6" gutterBottom>Most Purchased Products</Typography>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={products}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="purchases" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </Paper>

//       <Paper sx={{ padding: 2, marginTop: 4 }}>
//         <Typography variant="h6" gutterBottom>Product List</Typography>
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Product Name</TableCell>
//                 <TableCell align="right">Purchases</TableCell>
//                 <TableCell align="right">Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {products.map((product) => (
//                 <TableRow key={product.id}>
//                   <TableCell>
//                     {editingProductId === product.id ? (
//                       <TextField
//                         value={editedProductName}
//                         onChange={(e) => setEditedProductName(e.target.value)}
//                         variant="standard"
//                       />
//                     ) : (
//                       product.name
//                     )}
//                   </TableCell>
//                   <TableCell align="right">{product.purchases}</TableCell>
//                   <TableCell align="right">
//                     {editingProductId === product.id ? (
//                       <IconButton color="primary" onClick={() => handleSaveProduct(product.id)}>
//                         <SaveIcon />
//                       </IconButton>
//                     ) : (
//                       <IconButton color="primary" onClick={() => handleEditProduct(product)}>
//                         <EditIcon />
//                       </IconButton>
//                     )}
//                     <IconButton color="secondary" onClick={() => handleRemoveProduct(product.id)}>
//                       <DeleteIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//     </Box>
//   );
// };

// export default AdminDashboard;
// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { Navigate } from 'react-router-dom';
// import { DataGrid } from '@mui/x-data-grid';
// import { IconButton, Button, TextField } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// const initialProducts = [
//   { id: 1, name: 'Product 1', purchases: 50 },
//   { id: 2, name: 'Product 2', purchases: 30 },
//   { id: 3, name: 'Product 3', purchases: 20 },
// ];

// const AdminDashboard = () => {
//   const { isAuthenticated, currentUser } = useAuth();
//   const [products, setProducts] = useState(initialProducts);
//   const [editProduct, setEditProduct] = useState(null);
//   const [editedName, setEditedName] = useState('');

//   if (!isAuthenticated || currentUser.email !== 'dharsini@gmail.com') {
//     return <Navigate to="/login" />;
//   }

//   const handleDelete = (id) => {
//     setProducts(products.filter(product => product.id !== id));
//   };

//   const handleEdit = (product) => {
//     setEditProduct(product);
//     setEditedName(product.name);
//   };

//   const handleSave = () => {
//     setProducts(products.map(product =>
//       product.id === editProduct.id ? { ...product, name: editedName } : product
//     ));
//     setEditProduct(null);
//     setEditedName('');
//   };

//   const columns = [
//     { field: 'name', headerName: 'Product Name', flex: 1 },
//     { field: 'purchases', headerName: 'Purchases', flex: 1 },
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       flex: 1,
//       renderCell: (params) => (
//         <>
//           <IconButton onClick={() => handleDelete(params.id)}>
//             <DeleteIcon />
//           </IconButton>
//           <IconButton onClick={() => handleEdit(params.row)}>
//             <EditIcon />
//           </IconButton>
//         </>
//       ),
//     },
//   ];

//   return (
//     <div>

//       <h1>Admin Dashboard</h1>
      
//       <div style={{ height: 400, width: '100%' }}>
//         <DataGrid rows={products} columns={columns} />
//       </div>
//       {editProduct && (
//         <div style={{ marginTop: 20 }}>
//           <h2>Edit Product</h2>
//           <TextField
//             label="Product Name"
//             value={editedName}
//             onChange={(e) => setEditedName(e.target.value)}
//           />
//           <Button onClick={handleSave} variant="contained" style={{ marginLeft: 10 }}>
//             Save
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;
// // src/components/AdminDashboard.jsx
// src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Box, Typography, Paper, IconButton, TextField, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const productData = [
  { id: 1, name: 'Toy Car', purchases: 40, cartItems: 10 },
  { id: 2, name: 'Doll', purchases: 30, cartItems: 20 },
  { id: 3, name: 'Lego Set', purchases: 20, cartItems: 15 },
  { id: 4, name: 'Puzzle', purchases: 50, cartItems: 25 },
  { id: 5, name: 'Action Figure', purchases: 60, cartItems: 30 },
];

const pieData = [
  { name: 'Toy Car', value: 10 },
  { name: 'Doll', value: 20 },
  { name: 'Lego Set', value: 15 },
  { name: 'Puzzle', value: 25 },
  { name: 'Action Figure', value: 30 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347'];

const AdminDashboard = () => {
  const { isAuthenticated, currentUser } = useAuth();
  const [products, setProducts] = useState(productData);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editedProductName, setEditedProductName] = useState('');
  const [newProductName, setNewProductName] = useState('');
  const [newProductPurchases, setNewProductPurchases] = useState('');
  const [newProductCartItems, setNewProductCartItems] = useState('');

  if (!isAuthenticated || currentUser.email !== 'dharsini@gmail.com') {
    return <Navigate to="/login" />;
  }

  const handleRemoveProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setEditedProductName(product.name);
  };

  const handleSaveProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, name: editedProductName } : product
      )
    );
    setEditingProductId(null);
    setEditedProductName('');
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: newProductName,
      purchases: parseInt(newProductPurchases, 10),
      cartItems: parseInt(newProductCartItems, 10),
    };
    setProducts([...products, newProduct]);
    setNewProductName('');
    setNewProductPurchases('');
    setNewProductCartItems('');
  };

  const columns = [
    { field: 'name', headerName: 'Product Name', flex: 1 },
    { field: 'purchases', headerName: 'Purchases', type: 'number', flex: 1 },
    { field: 'cartItems', headerName: 'Cart Items', type: 'number', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleRemoveProduct(params.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => handleEditProduct(params.row)}>
            <EditIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Typography variant="h6">Welcome, {currentUser.name}. You are logged in as an admin.</Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <Paper sx={{ padding: 2, width: '48%' }}>
          <Typography variant="h6" gutterBottom>Items Added to Cart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={products}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="cartItems" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>

        <Paper sx={{ padding: 2, width: '48%' }}>
          <Typography variant="h6" gutterBottom>Cart Items Distribution</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Box>

      <Paper sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>Product List</Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={products}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            disableSelectionOnClick
            initialState={{
              sorting: {
                sortModel: [{ field: 'name', sort: 'asc' }],
              },
            }}
          />
        </div>
      </Paper>
      
      {editingProductId && (
        <Paper sx={{ padding: 2, marginTop: 4 }}>
          <Typography variant="h6" gutterBottom>Edit Product</Typography>
          <TextField
            label="Product Name"
            value={editedProductName}
            onChange={(e) => setEditedProductName(e.target.value)}
            variant="standard"
          />
          <Button onClick={handleSaveProduct} variant="contained" sx={{ marginLeft: 2 }}>
            Save
          </Button>
        </Paper>
      )}

      <Paper sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>Add New Product</Typography>
        <TextField
          label="Product Name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          variant="standard"
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Purchases"
          type="number"
          value={newProductPurchases}
          onChange={(e) => setNewProductPurchases(e.target.value)}
          variant="standard"
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Cart Items"
          type="number"
          value={newProductCartItems}
          onChange={(e) => setNewProductCartItems(e.target.value)}
          variant="standard"
          sx={{ marginRight: 2 }}
        />
        <Button onClick={handleAddProduct} variant="contained">Add Product</Button>
      </Paper>
    </Box>
  );
};

export default AdminDashboard;
