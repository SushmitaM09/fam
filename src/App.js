import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sign from './Component/Sign';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';
import Profile from './Component/Profile';
import Family from'./Component/Family';
import Password from './Component/Password';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign />} />
        <Route path='/home' element={<Home />}>
    <Route path='profile' element={<Profile />} />
    <Route path='password' element={<Password />} />
    <Route path='family' element={<Family />} />
    <Route path='dashboard' element={<Dashboard />} />
</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
