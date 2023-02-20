import React from "react";
import { useState } from "react";
import "./loginform.css";

const LoginForm = () =>{
    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3001)
    }
    return(
        <div className="cover">
            <div className="logo">
            <img src="data:image/png;base64,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" alt="" />
            </div>
            <h1>Login</h1>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <div className="login-btn" onClick={popup}>Login</div>

            <div className={popupStyle}>
                <h3>WELCOME</h3>
                <p>Are you a student or lecturer?</p>
            </div>
        </div>
    )
}

export default LoginForm