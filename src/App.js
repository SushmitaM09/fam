import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sign from './Component/Sign';
import Home from './Component/Home';
import Sidebar from './Component/Sidebar';
import Profile from './Pages/Profile';
import Password from './Pages/Password';
import Family from './Pages/Family';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign />} />
        <Route path='/Home' element={<Home />}>
          <Route path='Sidebar' element={<Sidebar />} />
          <Route path='Profile' element={<Profile />} />
          <Route path='Password' element={<Password />} />
          <Route path='Family' element={<Family />} />
          <Route path='Dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
