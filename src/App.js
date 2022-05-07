
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
    </Routes>

    </div>
  );
}

export default App;
