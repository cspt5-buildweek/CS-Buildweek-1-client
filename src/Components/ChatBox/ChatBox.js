import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Pusher from "pusher-js";
import axios from "axios";

const useStyles = makeStyles({
  chatbox: {
    width: "300px",
    height: "400px",
    maxHeight: "400px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)"
  },
  chatWindow: {
    flex: "auto",
    maxHeight: "calc(100% - 60px)",
    background: "#2f323b",
    overflow: "auto",
    textAlign: "left",
    paddingLeft: "10px",
    color: "#fff",
    "&::-webkit-scrollbar": {
      width: "4px"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#4c4c6a",
      borderRadius: "2px"
    }
  },
  chatInput: {
    flex: "0 0 auto",
    height: "60px",
    background: "#40434e",
    borderTop: "1px solid #2671ff",
    boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)"
  },
  input: {
    height: "59px",
    lineHeight: "60px",
    outline: "0 none",
    border: "none",
    width: "calc(100% - 60px)",
    color: "white",
    // textIndent: "10px",
    fontSize: "12pt",
    padding: "0",
    background: "#40434e"
  }
});

function ChatBox() {
  const classes = useStyles();
  const [chatState, setChatState] = useState("");
  const [windowState, setWindowState] = useState([]);

  useEffect(() => {
    const pusherClient = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
      forceTLS: true
    });

    let channel = pusherClient.subscribe(process.env.REACT_APP_PUSHER_CHANNEL);

    channel.bind(process.env.REACT_APP_PUSHER_EVENT, function(data) {
      // Currently only works locally data needs to be saved to database
      // Then fetched after getting data
      setWindowState([...windowState, data]);
    });

    return () => {
      channel.unsubscribe(process.env.REACT_APP_PUSHER_CHANNEL);
      channel.unbind();
    };
  }, [windowState]);

  const sendSay = (e, username) => {
    e.preventDefault();
    username = "Brandon";
    if (chatState.length <= 0) {
      return;
    } else {
      axios
        .post("http://0.0.0.0:5000/api/say", {
          message: chatState,
          username: username
        })
        .then(() => setChatState(""))
        .catch(err => console.log(err));
    }
  };

  return (
    <div className={classes.root}>
      <section className={classes.chatbox}>
        <section className={classes.chatWindow}>
          {/* Currently key is index must change to message id */}
          {windowState.map((values, index) => {
            return (
              <p key={index}>
                {values.user}: {values.message}
              </p>
            );
          })}
        </section>
        <form className={classes.chatInput} onSubmit={sendSay}>
          <input
            type="text"
            autoComplete="on"
            value={chatState}
            onChange={e => setChatState(e.target.value)}
            placeholder="Type a message"
            className={classes.input}
          />
        </form>
      </section>
    </div>
  );
}

export default ChatBox;
