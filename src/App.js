
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import RequiredAuth from './Components/Authentication/RequiredAuth/RequiredAuth';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import ProductDetail from './Components/Products/ProductDetail/ProductDetail';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Header/Header';
import Notfound from './Components/Shared/NotFound/Notfound';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products/:productId' element={<RequiredAuth><ProductDetail></ProductDetail></RequiredAuth>}></Route>
        <Route path='/addproduct' element={<RequiredAuth><AddProduct></AddProduct></RequiredAuth>}></Route>
        <Route path='/manageinventory' element={<RequiredAuth><ManageInventory></ManageInventory></RequiredAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
    </Routes>
    
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
