import React from 'react';
import "./sidebar.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaBloggerB, FaBtc, FaBuffer, FaEyeSlash, FaHamburger, FaHome, FaPaperclip, FaPen, FaPenFancy, FaSketch, FaStackExchange } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
                        <NavLink 
                            to="/"
                            // className="link" 
                            className={({isActive})=>
                                isActive?"active":" "
                            }
                        >
                            <li className="list-item">
                                <FaHome className="list-item-icon" />
                                <span className="list-item-text">Home</span>
                            </li>
                        </NavLink>
                        <NavLink 
                            to="/blogs"
                            className={({isActive})=>
                                isActive?"active":" "
                            }
                        >
                            <li className="list-item">
                                <FaBuffer className="list-item-icon" />
                                <span className="list-item-text">Blogs</span>
                            </li>
                        </NavLink>
                        <NavLink 
                            to="/createblog"
                            className={({isActive})=>
                                isActive?"active":" "
                            }
                        >
                            <li className="list-item">
                                <FaPen className="list-item-icon" />
                                <span className="list-item-text">Create Blog</span>
                            </li>
                        </NavLink>
                        <NavLink 
                            to="/coin"
                            className={({isActive})=>
                                isActive?"active":" "
                            }
                        >
                            <li className="list-item">
                                <FaBtc className="list-item-icon" />
                                <span className="list-item-text">Crypto Prices</span>
                            </li>
                        </NavLink>
                        <NavLink 
                            to="/notes"
                            className={({isActive})=>
                                isActive?"active":" "
                            }
                        >
                            <li className="list-item">
                                <FaPaperclip className="list-item-icon" />
                                <span className="list-item-text">Notes</span>
                            </li>
                        </NavLink>
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