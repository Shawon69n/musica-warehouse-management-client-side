
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import Home from './Components/Home/Home';
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
        <Route path='/products/:productId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
    </Routes>
    
    <Footer></Footer>
    </div>
  );
}

export default App;
