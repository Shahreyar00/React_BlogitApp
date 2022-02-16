import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase-config';
import "./login.css";

const Login = ({ setIsAuth }) => {
    let navigate = useNavigate();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/blogs");
        });
    };

    return (
        <div className="loginCont">
            <div className="loginWrapper">
                <div className="loginText-box">
                    <div className="loginTitle">Convenience at your<br/> Fingertips</div>
                    <div className="loginDesc">
                        <p>See the current updated blogs on various topics and check out the current prices of crypto currencies while keeping notes. All at the same place</p>
                    </div>
                </div>
                <div className="loginLine">
                    <div className="blackLine"></div>
                </div>
                <div className="loginButton">
                    <button className="login-btn-google" onClick={signInWithGoogle}>
                        <span className="loginButton-text">Sign in</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login