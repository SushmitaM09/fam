import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sign from './Component/Sign';
import Home from './Component/Home'; // Home should include Sidebar
import Profile from './Pages/Profile';
import Password from './Pages/Password';
import Family from './Pages/Family';
import Dashboard from './Pages/Dashboard';

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
        </Route> {/* Close the Route element here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
