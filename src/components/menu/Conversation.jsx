import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";
import { getConversation, setConversation } from "../../service/api";

const Conversation = ({ user }) => {
  const classes = useStyles();

  const { account, newMessageFlags } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);

  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationMessage = async () => {
      let data = await getConversation({
        sender: account.googleId,
        receiver: user.googleId,
      });
      setMessage({
        text: data.message,
        timestamp: data.updatedAt,
      });
    };
    getConversationMessage();
  }, [newMessageFlags]);

  const setUser = async () => {
    setPerson(user);
    await setConversation({
      senderId: account.googleId,
      receiverId: user.googleId,
    });
  };

  return (
    <Box className={classes.component} onClick={() => setUser()}>
      <Box className={classes.displayPicture}>
        <Avatar className={classes.avatar} src={user.imageUrl}>
          {user.name[0]}
        </Avatar>
      </Box>

      <Box style={{
        width: '100%',
      }}>
        <Box
          style={{
            display: "flex",
          }}
        >
          <Typography>{user.name}</Typography>
          {message.text && (
            <Typography className={classes.timestamp}>
              {new Date(message.timestamp).getHours()}:
              {new Date(message.timestamp).getMinutes()}
            </Typography>
          )}
        </Box>

        <Box>
          <Typography className={classes.text}>{message.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  displayPicture: {
    padding: "0 14px",
  },
  timestamp: {
    fontSize: 12,
    marginLeft: 'auto',
    marginRight: 20,
    color: "#00000099",
  },
  text: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 14
  },
  avatar: {
    width: 42,
    height: 42,
  },
  component: {
    display: "flex",
    height: 40,
    padding: "14px 0",
    alignItems: "center",
    cursor: "pointer",
  },
});

export default Conversation;
