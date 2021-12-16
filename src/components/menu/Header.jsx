import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { makeStyles } from "@material-ui/styles";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../drawer/InfoDrawer";

const Header = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Box className={classes.header}>
        <Avatar className={classes.avatar} src={account.imageUrl} onClick={() => toggleDrawer()} />
        <Box className={classes.icons}>
          <HeaderMenu />
        </Box>
      </Box>
      <InfoDrawer open={open} setOpen={setOpen} />
    </>
  );
};
const useStyles = makeStyles({
  header: {
    height: 35,
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ededed",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  avatar: {
    height: 33,
    width: 33,
    borderRadius: "100%",
    cursor: "pointer",
  },
  icons: {
    marginLeft: "auto",
    "& > *": {
      padding: 10,
      color: "#919191",
    },
    "& :first-child": {
      fontSize: 23,
    },
  },
});

export default Header;
