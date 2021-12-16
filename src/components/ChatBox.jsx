import React, { useContext } from "react";
import { Dialog, withStyles, Box, makeStyles } from "@material-ui/core";
import Menu from "./menu/Menu";
import Chat from "./chat/Chat";
import { UserContext } from "../context/UserProvider";
import EmptyChat from "./chat/EmptyChat";

const ChatBox = ({ classes }) => {
  const classname = styles();
  const { person } = useContext(UserContext);
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" }}}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Menu />
        </Box>
        <Box className={classname.rightComponent}>
          {Object.keys(person).length > 0 ? <Chat /> : <EmptyChat />}
        </Box>
      </Box>
    </Dialog>
  );
};
const styles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    width: "20%",
    minWidth: 300,
  },
  rightComponent: {
    borderLeft: "1px solid rgba(0, 0, 0, 0.14)",
    minWidth: 300,
    height: "100%",
    width: "80%",
  },
});

const style = {
  dialogPaper: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "unset",
    overflow: "inherit",
    backgroundColor: "#f8fafb",
  },
};

export default withStyles(style)(ChatBox);
