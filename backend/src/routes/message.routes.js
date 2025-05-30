import express from "express";
import { protectRoute } from "../middleware/auth.protectRoute.js";
import {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users/", protectRoute, getUsersForSidebar);
router.get(
  "/:id",
  protectRoute,
  (req, res, next) => {
    if (!req.params.id) {
      return res
        .status(400)
        .json({ error: "Missing message user ID parameter." });
    }
    next();
  },
  getMessages
);
router.post(
  "/send/:id",
  protectRoute,
  (req, res, next) => {
    if (!req.params.id) {
      return res
        .status(400)
        .json({ error: "Missing message user ID parameter." });
    }
    next();
  },
  sendMessage
);

export default router;
