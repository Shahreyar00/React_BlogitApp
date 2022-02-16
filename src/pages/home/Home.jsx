import React from 'react';
import { FaFacebookSquare, FaGithub, FaInstagramSquare } from 'react-icons/fa';
import "./home.css";

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="homeWrapper">
                <div className="home-top">
                    <h1 className="title">BLOGiT</h1>
                </div>
                <div className="home-center">
                        <p>
                            Your many problems require one solution at one place. Share 
                            your thoughts and also learn from like-minded people.
                            Keep an eye on Crypto Prices and also keep notes. 
                            For you, By you.
                        </p>
                    
                </div>
                <div className="home-bottom">
                    <ul className="bottomList">
                        <li className="bottom-list-item">
                            <FaFacebookSquare className="logo-item" />
                        </li>
                        <li className="bottom-list-item">
                            <FaGithub className="logo-item" />
                        </li>
                        <li className="bottom-list-item">
                            <FaInstagramSquare className="logo-item" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home