import React, {useContext, useEffect, useState} from 'react';
import Message from "./Message";
import {ChatContext} from "../context/ChatContext";
import {onSnapshot, doc} from "firebase/firestore";
import {db} from "../firebase";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const {data} = useContext(ChatContext);
    useEffect(() => {
        const onSub = onSnapshot(doc(db, 'chats', data.chatID), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        })
        return () => {
            onSub()
        }
    }, [data.chatID])
    return (
        <div className={'messages'}>
            {messages.map(m => {
                return <Message message={m} key={m.id}/>
            })}

        </div>
    );
};

export default Messages;
