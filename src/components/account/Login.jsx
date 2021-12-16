import {
  Dialog,
  withStyles,
  Box,
  Typography,
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import placeHolder from "./images/placeHolder.png";
import { GoogleLogin } from "react-google-login";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { clientId } from "../../constants/data";
import { addUser } from "../../service/api";

const Login = ({ classes }) => {
  const classname = useStyles();
  const { setAccount } = useContext(AccountContext);

  const OnLoginSuccess = async (res) => {
    console.log("Successfully logged in", res.profileObj);
    setAccount(res.profileObj);
    await addUser(res.profileObj);
  };

  const OnLoginFailure = () => {
    console.log("failed to login");
  };

  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Typography className={classname.title}>
            To Use WhatApp On Your Device:
          </Typography>
          <List className={classname.list}>
            <ListItem> 1. To Use WhatApp you need Login </ListItem>
            <ListItem>
              2. Click on the button Google Button to register with Google
            </ListItem>
            <ListItem>
              3. Click on the button Facebook Button to register with Facebook
            </ListItem>
          </List>
        </Box>
        <Box className={classname.rightComponent} alignContent={"center"}>
          <List>
            <ListItem>
              <GoogleLogin
                clientId={clientId}
                render={(renderProps) => (
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "white" }}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle size={20} style={{ marginRight: 10 }} />
                    Sign In With Google
                  </Button>
                )}
                isSignedIn={true}
                onSuccess={OnLoginSuccess}
                onFailure={OnLoginFailure}
                cookiePolicy={"single_host_origin"}
              />
            </ListItem>
            <ListItem>
              <Button variant="contained" style={{ backgroundColor: "white" }}>
                <BsFacebook
                  size={20}
                  color="#4867aa"
                  style={{ marginRight: 10 }}
                />
                Sign In With Facebook
              </Button>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          alignSelf: "center",
        }}
      >
        <img src={placeHolder} alt="placeholder" className={classname.image} />
      </Box>
    </Dialog>
  );
};
const useStyles = makeStyles({
  component: {
    display: "flex",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      columnWidth: "auto",
    },
  },
  image: {
    marginTop: -120,
    "@media (max-width: 800px)": {
      height: 0,
      width: 0,
    },
  },
  leftComponent: { padding: "56px 0 56px 56px" },
  rightComponent: {
    height: 264,
    width: "100%",
    display: "flex",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 27,
    marginBottom: 25,
    color: "#525252",
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
    fontWeight: 300,
  },
  list: {
    "&  > *": {
      padding: 0,
      marginTop: 15,
      fontSize: 18,
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "50%",
    marginTop: "12%",
    borderRadius: 25,
    maxWidth: "200vh",
    maxHeight: "200vh",
    overflow: "hidden",
    "@media (max-width: 1824px)": {
      height: "95%",
      width: "65%",
    },
    "@media (max-width: 700px)": {
      boxShadow: "none",
    },
    "@media (max-width: 1400px)": {
      height: "100%",
      width: "100%",
    },
  },
};

export default withStyles(style)(Login);
