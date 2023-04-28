
import './App.css';
import Header from './Components/Header';
import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/editProduct' element={<EditProduct/>}></Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
