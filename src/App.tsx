import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MenuNavigation from './components/navigationComponents/menuNavigation/MenuNavigation';
import ContentArea from './pages/contentArea/ContentArea';
import { FindUs } from './pages/findUs/FindUs';
import Home from './pages/home/Home';
import Login from './pages/usersPages/login/Login';
import RegisterUser from './pages/usersPages/registerUser/RegisterUser';
import StudentArea from './pages/usersPages/studentArea/StudentArea';

function App() {
  return (
    <Router>
    <MenuNavigation />
   
      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/contentArea" element={<ContentArea />} />

        <Route path="/registerUser" element={<RegisterUser />} />

        <Route path="/studentArea" element={<StudentArea />} />

        <Route path="/findus" element={<FindUs />} />

      </Routes>
    

  </Router>
  );
}

export default App;
