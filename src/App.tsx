import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import { Navber } from './components/Navber';
import { useState } from 'react';
import Logout from './components/Logout';

function App() {
const [isAuth, setIsAuth] = useState<any>(false);

  return (
    <Router>
      <Navber />
     <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/createpost" element={<CreatePost/>} ></Route>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} ></Route>
      <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>} ></Route>
     </Routes>
    </Router>
  );
}

export default App;
