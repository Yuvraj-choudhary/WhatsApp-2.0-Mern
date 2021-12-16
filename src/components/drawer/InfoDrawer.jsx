import { Box, Drawer, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBackIosRounded";
import Profile from "./Profile";

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const classes = styles();
  return (
    <Drawer open={open}>
      <Box className={classes.header}>
        <ArrowBack
          onClick={() => handleClose()}
          style={{
            cursor: "pointer",
          }}
        />
        <Typography style={{ fontSize: 20 }}>Profile </Typography>
      </Box>
      <Box className={classes.component}>
        <Profile />
      </Box>
    </Drawer>
  );
};

const styles = makeStyles({
  header: {
    background: "#00bfa5",
    color: "#fff",
    display: "flex",
    height: "86px",
    alignItems: "center",
    bottom: 34,
    padding: 20,
    "& > *": {
      marginTop: 40,
      padding: 16,
      fontWeight: 300,
    },
  },
  component: {
    background: "#ededed",
    height: "100%",
  },
});

export default InfoDrawer;
