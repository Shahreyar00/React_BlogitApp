import React, { useState } from 'react';
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Blogs from "./pages/blogs/Blogs";
import CreateBlog from "./pages/createblog/CreateBlog";
import Coin from "./pages/coin/Coin";
import Notes from "./pages/notes/Notes";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


const App = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
                <Routes>
                    <Route path="/" element={<Home isAuth={isAuth} />} />
                    <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
                    <Route path="/blogs" element={<Blogs isAuth={isAuth} />} />
                    <Route path="/createblog" element={<CreateBlog isAuth={isAuth} />} />
                    <Route path="/coin" element={<Coin isAuth={isAuth} />} />
                    <Route path="/notes" element={<Notes isAuth={isAuth} />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App