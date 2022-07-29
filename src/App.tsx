import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import { Navber } from './components/Navber';
import { useState } from 'react';
import Logout from './components/Logout';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") ? true : false);
  console.log(isAuth);
  ;
  

  return (
    <Router>
      <Navber isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} ></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} ></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
