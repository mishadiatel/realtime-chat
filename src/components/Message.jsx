import React from 'react';

const Message = () => {
    return (
        <div className={'message owner'}>
            <div className="messageInfo">
                <img src="https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_640.jpg" alt="userImage"/>
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img src="https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_640.jpg" alt=""/>
            </div>
        </div>
    );
};

export default Message;
