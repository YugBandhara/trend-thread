import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/pages/Home'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div className="App"> 
       <Router>
      <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
