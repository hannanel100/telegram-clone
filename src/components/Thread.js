import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
  MicNoneOutlined,
  MoreHoriz,
  TimerOutlined,
  SendRounded,
} from "@material-ui/icons";
import db from "../firebase";
import firebase from "firebase";
import "./Thread.css";
import { useSelector } from "react-redux";
import { selectThreadName, selectThreadId } from "../features/threadSlice";
import { selectUser } from "../features/userSlice";

const Thread = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const threadName = useSelector(selectThreadName);
  const threadId = useSelector(selectThreadId);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (threadId) {
      db.collection("threads")
        .doc(threadId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    }
  });
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("threads").doc(threadId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp,
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    setInput("");
  };
  return (
    <div className="thread">
      <div className="thread__header">
        <div className="thread__header__contents">
          <Avatar />
          <div className="thread__header__contents__info">
            <h4>{threadName}</h4>
            <h5>Last seen</h5>
          </div>
        </div>
        <IconButton>
          <MoreHoriz className="thread__header__details" />
        </IconButton>
      </div>
      <div className="thread__messages"></div>
      <div className="thread__input">
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="write a message..."
            type="text"
          />
          <IconButton>
            <TimerOutlined />
          </IconButton>
          <IconButton onClick={sendMessage}>
            <SendRounded />
          </IconButton>
          <IconButton>
            <MicNoneOutlined />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default Thread;
