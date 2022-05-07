
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Home from './Components/Home/Home';
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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
    </Routes>
    
    <Footer></Footer>
    </div>
  );
}

export default App;
