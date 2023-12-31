import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/body/login/login';
import Dashboard from './components/body/dashboard/dashboard';
import PrivateRoutes from './utils/PrivateRoutes';
import AddInventory from './components/inventory/addinventory';
import EditProduct from './components/inventory/editProduct';
import Inventory from './components/inventory/inventory';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route element={<Dashboard/>} path='/dashboard'/>
          <Route element={<AddInventory/>} path='/inventory/addinventory'/>
          <Route element={<EditProduct/>} path='/inventory/editinventory'/>
          <Route element={<Inventory/>} path='/inventory'/>
        </Route>
        <Route path='/' element={<Login/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
