import React from "react";
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
import { useState } from "react";
import { Box } from "@material-ui/core";

const Menu = () => {
  const [text, setText] = useState("");
  return (
    <Box
    >
      <Header />
      <Search setText={setText} />
      <Conversations text={text} />
    </Box>
  );
};

export default Menu;
