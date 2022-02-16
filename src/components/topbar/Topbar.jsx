import React from 'react';
import { FaBloggerB } from 'react-icons/fa';
import "./topbar.css";
// import { auth } from '../../firebase-config';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    {/* <FaBloggerB className="logo" /> */}
                </div>
                <div className="topbarCenter">
                    <div class="color-box st"></div>
                    <div class="color-box mt"></div>
                    <div class="color-box lt"></div>
                    <div className="logo">BLOGiT</div>
                    <div class="color-box lt"></div>
                    <div class="color-box mt"></div>
                    <div class="color-box st"></div>
                </div>
                <div className="topbarRight">
                    {/* <button className="username">
                        <span className="btn-text">Welcome</span>
                    </button> */}
                </div>
            </div>
            <div className="topbarBottom"></div>
        </div>
    )
}

export default Topbar