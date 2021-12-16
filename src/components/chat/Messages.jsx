import { Box, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { getMessage, newMessage } from "../../service/api";
import Footer from "./Footer";
import Message from "./Message";

const Messages = ({ person, conversation }) => {
  const classes = useStyles();

  const [value, setValue] = useState();
  const [messages, setMessages] = useState([]);
  const { account, socket, newMessageFlags, setNewMessageFlags } =
    useContext(AccountContext);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

 useEffect(() => {
   scrollRef.current?.scrollIntoView({
     transition: 'smooth'
   })
 }, [messages]);    

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.sender) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(() => {
    const getMessageDetails = async () => {
      let response = await getMessage(conversation._id);
      setMessages(response.data);
    };
    getMessageDetails();
  }, [conversation?._id, person._id, newMessageFlags]);

  const receiverId = conversation?.members?.find(
    (member) => member !== account.googleId
  );

  const sendText = async (e) => {
    let code = e.keyCode || e.which;
    if (!value) return;

    if (code === 13) {
      let message = {
        sender: account.googleId,
        conversationId: conversation._id,
        text: value,
      };

      socket.current.emit("sendMessage", {
        senderId: account.googleId,
        receiverId,
        text: value,
      });

      await newMessage(message);
      setValue("");
      setNewMessageFlags((prev) => !prev);
    }
  };

  return (
    <>
      <Box className="wrapper">
        <Box className={classes.component}>
          <Box>
            {messages
              ? messages.map((message) => (
                  <Box
                    style={{
                      padding: "1px 80px 10px 80px",
                    }}
                    ref={scrollRef}
                  >
                    <Message message={message}  />
                  </Box>
                ))
              : ""}
          </Box>
        </Box>
      </Box>
      <Footer sendText={sendText} setValue={setValue} value={value} />
    </>
  );
};

const useStyles = makeStyles({
  component: {
    overflow: "auto",
    paddingBottom: 200,
    paddingTop: 15,
  },
});

export default Messages;
