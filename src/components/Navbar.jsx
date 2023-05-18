import React, {useContext} from 'react';
import {signOut} from 'firebase/auth'
import {auth} from "../firebase";
import {AuthContext} from "../context/AuthContext";

const Navbar = () => {
    const currentUser = useContext(AuthContext);
    const signUserOut = async () => {
        await signOut(auth);
    }
    return (
        <div className={'navbar'}>
            <span className="logo">Chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="userPhoto"/>
                <span>{currentUser.displayName}</span>
                <button onClick={signUserOut}>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
