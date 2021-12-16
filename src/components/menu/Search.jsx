import React from "react";
import { Box, makeStyles, InputBase } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

const Search = ({ setText }) => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.search}>
        <Box className={classes.searchIcon}>
          <SearchOutlined fontSize="small" />
        </Box>
        <Box>
          <InputBase
            placeholder="Search or start a new chat"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{
              "aria-label": "search",
            }}
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  component: {
    backgroundColor: "#f6f6f6",
    height: 43,
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: 55,
    zIndex: 100,
  },
  search: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: "0 13px",
    width: "100%",
  },
  searchIcon: {
    color: "#919191",
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 0, 1, 0),
    paddingLeft: 50,
    paddingRight: 15,
    fontSize: 14,
    height: 15,
    width: "100%",
    color: "#4a4b4b",
  },
}));

export default Search;
