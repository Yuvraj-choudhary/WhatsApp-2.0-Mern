import { Box, IconButton, InputBase, makeStyles } from "@material-ui/core";
import React from "react";
import { EmojiEmotionsOutlined, AttachFile, Mic,SendRounded } from "@material-ui/icons";

const Footer = ({ sendText, setValue, value }) => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <IconButton>
        <EmojiEmotionsOutlined />
      </IconButton>
      <IconButton>
        <AttachFile className={classes.clipIcon} />
      </IconButton>
      <Box className={classes.searchBox}>
        <InputBase
          placeholder="Type a message"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onKeyPress={(e) => sendText(e)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Box>
      {!value ? (
        <IconButton
          style={{
            marginRight: 5,
          }}
        >
          <Mic />
        </IconButton>
      ) : (
        <IconButton
          style={{
            marginRight: 5,
          }}
        
        >
          <SendRounded />
        </IconButton>
      )}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "60px",
    background: "#ededed",
    minWidth: "100%",
    display: "flex",
    alignItems: "center",
    position: "sticky",
    bottom: 0,
    zIndex: 100,
    "& > *": {
      color: "#51585c",
      marginLeft: 5,
    },
  },
  clipIcon: {
    transform: "rotate(40deg)",
  },
  inputRoot: { width: "100%" },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 14,
    transition: theme.transitions.create("width"),
    width: "100%",
    alignItems: "center",
    color: "#51585",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    flex: 1,
  },
  searchBox: {
    backgroundColor: "#FFFF",
    borderRadius: 50,
    width: "100%",
    height: 40,
    display: "flex",
  },
}));

export default Footer;
