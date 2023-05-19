import React, {useContext, useState} from 'react';
import {collection, doc, getDocs, getDoc, query, serverTimestamp, setDoc, updateDoc, where} from "firebase/firestore";
import {db} from "../firebase";
import {AuthContext} from "../context/AuthContext";

const Search = () => {
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const currentUser = useContext(AuthContext);

    const handleSearch = async () => {
        console.log(userName);
        const q = query(collection(db, 'users'), where('displayName', '==', userName));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        } catch (e) {
            console.error(e)
            setError(true);
        }


    }
    const handleKey = async (e) => {
        e.code === 'Enter' && await handleSearch();

    }

    const handleSelect = async () => {
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, 'chats', combinedId));
            if (!res.exists()) {
                await setDoc(doc(db, 'chats', combinedId), {messages: []});

                await updateDoc(doc(db, 'userChats', currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                })
                await updateDoc(doc(db, 'userChats', user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                })
            }
        } catch (err) {

        }
        setUser(null);
        setUserName('');
    }

    return (
        <div className={'search'}>
            <div className="searchForm">
                <input type="text" placeholder={'Find a user'}
                       onChange={(e) => setUserName(e.target.value)}
                       onKeyDown={handleKey}
                       value={userName}
                />
            </div>
            {error && <span>User not found</span>}
            {user && (
                <div className="userChat" onClick={handleSelect}>
                    <img src={user.photoURL} alt=""/>
                    <div className="userChatInfo">
                        <span>{user.displayName}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
