import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/body/login/login';
import Dashboard from './components/body/dashboard/dashboard';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route element={<Dashboard/>} path='/dashboard'/>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
