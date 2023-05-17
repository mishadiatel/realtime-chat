import React from 'react';

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <span className="logo">Chat</span>
            <div className="user">
                <img src="https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_640.jpg" alt=""/>
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
