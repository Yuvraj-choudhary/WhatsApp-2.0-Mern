import { Box } from "@material-ui/core";
import React from "react";

const EmptyChat = () => {
  const URL =
    "https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png";
  return (
    <Box className="container">
     <img style={{
       alignSelf: 'center',
     }} src={URL} alt="" />
    </Box>
  );
};

export default EmptyChat;
