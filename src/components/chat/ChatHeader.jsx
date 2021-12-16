import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AccountContext } from "../../context/AccountProvider";

const ChatHeader = () => {
  const classes = useStyles();
  const { person } = useContext(UserContext);
  const { activeUsers } = useContext(AccountContext);
  return (
    <Box className={classes.header}>
      <Box className={classes.dp}>
        <Avatar src={person.imageUrl} />
      </Box>
      <Box>
        <Typography className={classes.name}>{person.name}</Typography>
        <Typography className={classes.status}>{activeUsers?.find(
          user => user.userId === person.googleId
        )? 'Online':'Offline'}</Typography>
      </Box>
      <Box className={classes.rightContainer}>
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  header: {
    display: "flex",
    height: 35,
    background: "#ededed",
    padding: "10px 16px",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  dp: {
    padding: "0 2px",
  },
  name: {
    marginLeft: 10,
  },
  status: {
    fontSize: 12,
    marginLeft: 10,
    color: "rgb(0,0,0,0.6)",
  },
  rightContainer: {
    marginLeft: "auto",
    "& > *": {
      padding: 10,
      color: "#51585c",
    },
  },
});

export default ChatHeader;
