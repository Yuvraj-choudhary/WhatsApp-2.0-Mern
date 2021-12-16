import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Profile = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <>
      <Box className={classes.imageContainer}>
        <img src={account.imageUrl} className={classes.imageDp} alt="dp" />
      </Box>
      <Box className={classes.nameContainer}>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
      </Box>
      <Box className={classes.description}>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </Box>
      <Box className={classes.nameContainer}>
        <Typography>About</Typography>
        <Typography>{account.familyName}</Typography>
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  imageDp: {
    width: 200,
    height: 200,
    borderRadius: "100%",
    padding: "18px 0",
  },
  nameContainer: {
    backgroundColor: "white",
    padding: "12px 30px 10px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
    "& :first-child": {
      fontSize: 13,
      color: "#009688",
      paddingBottom: 15,
      fontWeight: "lighter",
    },
    "& :last-child": {
      color: "#4A4A4A",
    },
  },
  description: {
    padding: "10px 20px 28px 30px",
    color: "#828282",
    '& > *':{
        fontSize: 14
    }
  },
});

export default Profile;
