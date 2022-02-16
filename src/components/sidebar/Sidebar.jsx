import React from 'react';
import "./sidebar.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaBloggerB, FaBtc, FaBuffer, FaEyeSlash, FaHamburger, FaHome, FaPaperclip, FaPen, FaPenFancy, FaSketch, FaStackExchange } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { AiOutlineEye } from "react-icons/ai";


const Sidebar = ({ isAuth, setIsAuth }) => {
    let navigate = useNavigate();

    const signUserOut = () =>{
        signOut(auth).then(()=>{
            localStorage.clear();
            setIsAuth(false);
            navigate("/login");
        });
    };

    return (
        <div className="sidebarCont">
            <div className="sidebarWrapper">
                <div className="sidebarTop">
                    <FaHamburger  />
                    <span className="brand">Dashboard</span>
                </div>
                <div className="sidebarCenter">
                    <ul className="list">
                        <Link className="link" to="/">
                            <li className="list-item">
                                <FaHome className="list-item-icon" />
                                <span className="list-item-text">Home</span>
                            </li>
                        </Link>
                        <Link className="link" to="/blogs">
                        <li className="list-item">
                            <FaBuffer className="list-item-icon" />
                            <span className="list-item-text">Blogs</span>
                        </li>
                        </Link>
                        <Link className="link" to="/createblog">
                            <li className="list-item">
                                <FaPen className="list-item-icon" />
                                <span className="list-item-text">Create Blog</span>
                            </li>
                        </Link>
                        <Link className="link" to="/coin">
                            <li className="list-item">
                                <FaBtc className="list-item-icon" />
                                <span className="list-item-text">Crypto Prices</span>
                            </li>
                        </Link>
                        <Link className="link" to="/notes">
                            <li className="list-item">
                                <FaPaperclip className="list-item-icon" />
                                <span className="list-item-text">Notes</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarBottom">
                    {!isAuth ? (
                        <>
                        <Link to="/login">
                            <button className="login">
                                <span className="btn-login">Login</span>
                                <FaArrowAltCircleRight className="btn-login-arrow"/>
                            </button>
                        </Link>
                        <FaEyeSlash />
                        </>
                    ) : (
                        <>
                        <button 
                            className="logout"
                            onClick={signUserOut}
                        >
                            <FaArrowAltCircleLeft />
                            <span className="btn-logout">Logout</span>
                        </button>
                        <AiOutlineEye />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sidebar