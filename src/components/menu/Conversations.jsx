import { Box } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { getUsers } from "../../service/api";
import Conversation from "./Conversation";

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Box className="component">
      {users.map((user) =>
        user.googleId !== account.googleId ? <Conversation user={user} /> : ""
      )}
    </Box>
  );
};


export default Conversations;
