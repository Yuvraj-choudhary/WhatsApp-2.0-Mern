import express from "express";
import conversation from "../model/conversation.js";
import message from "../model/message.js";
import user from "../model/User.js";

const routes = express.Router();

routes.post("/add", async (req, res) => {
  try {
    let exist = await user.findOne({ googleId: req.body.googleId });

    if (exist) {
      res.status(200).json(`User Exist Bro`);
      return;
    }

    const newUser = new user(req.body);
    await newUser.save();
    res.status(200).json("user saved bro");
  } catch (err) {
    res.status(500).json(err);
  }
});
routes.get("/users", async (req, res) => {
  try {
    const users = await user.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

routes.post("/conversation/add", async (req, res) => {
  let senderId = req.body.senderId;
  let receiverId = req.body.receiverId;
  try {
    const exist = await conversation.findOne({
      members: {
        $all: [receiverId, senderId],
      },
    });

    if (exist) {
      res.status(200).json(`ok it already exist`);
      return;
    }

    const newConversation = new conversation({
      members: [receiverId, senderId],
    });

    await newConversation.save();
    res.status(200).json("it's added bro 😄");
  } catch (err) {
    res.status(500).json(err);
  }
});

routes.post("/conversation/get", async (req, res) => {
  try {
    const Conversation = await conversation.findOne({
      members: {
        $all: [req.body.sender, req.body.receiver],
      },
    });
    res.status(200).json(Conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

routes.post("/message/add", async (req, res) => {
  const newMessage = new message(req.body);
  try {
    await newMessage.save();
    await conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    res.status(200).json("yeah is been saved 🤪");
  } catch (err) {
    res.status(500).json(err);
  }
});

routes.get("/message/get/:id", async (req, res) => {
  try {
    const messages = await message.find({
      conversationId: req.params.id,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default routes;
