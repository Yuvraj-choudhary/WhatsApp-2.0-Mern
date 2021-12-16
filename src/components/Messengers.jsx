import { AppBar, Box, makeStyles, Toolbar } from "@material-ui/core";
import Login from "./account/Login";
import React, { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatBox from "./ChatBox";

const Messengers = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <Box className={account ? classes.chatComponent : classes.loginComponent}>
      <AppBar className={account ? classes.chatHeader : classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      {account ? <ChatBox /> : <Login />}
    </Box>
  );
};
const useStyles = makeStyles({
  loginHeader: {
    height: 222,
    backgroundColor: "#01c0a7",
    "@media (max-width: 700px)": {
      backgroundColor: "#fff",
      boxShadow: "none",
    },
  },
  loginComponent: {
    backgroundColor: "#DCDCDC",
    height: "100vh",
    "@media (max-width: 700px)": {
      backgroundColor: "#fff",
    },
  },
  chatComponent: {
    backgroundColor: "#DCDCDC",
    height: "100vh",
  },
  chatHeader: {
    height: 150,
    backgroundColor: "#01c0a7",
  },
});

export default Messengers;
