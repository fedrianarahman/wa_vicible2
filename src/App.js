import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './hooks/ProtectedRoute';
import AuthProvider from './hooks/AuthProvider';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route index element={<Login />}/>
        <Route  path='/login' element={<Login />}/>
        <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
