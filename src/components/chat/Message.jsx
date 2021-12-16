import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Message = ({ message }) => {
  const classes = useStyles();

  const { account } = useContext(AccountContext);

  const formatDate = (date) => {
    return date < 10 ? "0" + date : date;
  };

  return (
    <Box
      className={
        account.googleId === message.sender ? classes.sender : classes.receiver
      }
    >
      <Typography className={classes.text}>{message.text}</Typography>
      <Typography className={classes.time}>
        {formatDate(new Date(message.createdAt).getHours())}:
        {formatDate(new Date(message.createdAt).getMinutes())}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles({
  receiver: {
    background: "#fff",
    padding: 5,
    maxWidth: "50%",
    display: "flex",
    borderRadius: "0 10px 10px 10px",
    width: "fit-content",
    wordBreak: "break-word",
    boxShadow: "3px 3px 10px #909090",
  },
  sender: {
    background: "#dcf8c6",
    padding: 5,
    maxWidth: "50%",
    display: "flex",
    borderRadius: "10px 0 10px 10px",
    width: "fit-content",
    wordBreak: "break-word",
    marginLeft: "auto",
    marginBottom: 5,
    boxShadow: "3px 3px 10px #909090",
  },
  text: {
    fontSize: 14,
    padding: "0 25px 0 5px",
  },
  time: {
    fontSize: 10,
    marginTop: 6,
    color: "#919191",
    wordBreak: "keep-all",
    alignSelf: "flex-end",
  },
});

export default Message;
