import { useState, useContext } from "react";
import { IconButton, Menu, MenuItem, makeStyles } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLargeRounded";
import { GoogleLogout } from "react-google-login";
import { clientId } from "../../constants/data";

import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
  menuItem: {
    padding: "15px 60px 5px 24px",
    fontSize: 10,
    color: "#535353",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
});

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const { setAccount } = useContext(AccountContext);
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const onLogoutSuccess = () => {
    alert(`Bye Bye ${account.name}`);
    console.clear();
    setAccount("");
  };
  return (
    <>
      <IconButton>
        <DonutLargeIcon />
      </IconButton>
      <IconButton>
        <ChatIcon />
      </IconButton>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          New group
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          Starred messages
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          Settings
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <GoogleLogout
            clientId={clientId}
            onLogoutSuccess={onLogoutSuccess}
            render={(renderProps) => (
              <div
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{
                    width: '100%',
                }}
              >
                Logout
              </div>
            )}
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;
