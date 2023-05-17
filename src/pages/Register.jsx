import React from 'react';
import Add from '../img/addAvatar.png'

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder={'Display name'}/>
                    <input type="email" placeholder={"Email"}/>
                    <input type="password" placeholder={"Password"}/>
                    <input type="file" id={"file"} style={{display: 'none'}}/>
                    <label htmlFor="file">
                        <img src={Add} alt="add icon"/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Do you have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;
