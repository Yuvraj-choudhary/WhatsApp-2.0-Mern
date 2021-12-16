import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (err) {
    console.error(`Error while calling addUser ${err} 😔`);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${URL}/users`);
    return response.data;
  } catch (err) {
    console.error(`Error while calling getUsers ${err} 😔`);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${URL}/conversation/add`, data);
  } catch (err) {
    console.error(`Error while calling setConversation ${err} 😔`);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${URL}/conversation/get`, data);
    return response.data;
  } catch (err) {
    console.error(`Error while calling getConversation ${err} 😔`);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${URL}/message/add`, data);
  } catch (err) {
    console.error(`Error while sending newMessage ${err} 😔`);
  }
}

export const getMessage = async (id) => {
  try {
    return await axios.get(`${URL}/message/get/${id}`);
  } catch (err) {
    console.error(`Error while sending getMessage ${err} 😔`);
  }
};
