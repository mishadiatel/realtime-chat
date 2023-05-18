import React, {useState} from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../firebase";

const Search = () => {
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    const handleSearch = async () => {
        console.log(userName);
        const q = query(collection(db, 'users'), where('displayName', '==', userName));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        }catch (e) {
            console.error(e)
            setError(true);
        }


    }
    const handleKey = async (e) => {
        e.code === 'Enter' && await handleSearch();

    }

    return (
        <div className={'search'}>
            <div className="searchForm">
                <input type="text" placeholder={'Find a user'}
                       onChange={(e) => setUserName(e.target.value)}
                       onKeyDown={handleKey}
                />
            </div>
            {error && <span>User not found</span>}
            {user && <div className="userChat">
                <img src={user.photoURL} alt=""/>
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    );
};

export default Search;
