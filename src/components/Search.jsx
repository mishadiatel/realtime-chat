import React from 'react';

const Search = () => {
    return (
        <div className={'search'}>
            <div className="searchForm">
                <input type="text" placeholder={'Find a user'}/>
            </div>
            <div className="userChat">
                <img src="https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_640.jpg" alt=""/>
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
};

export default Search;
