import jwt from "jsonwebtoken";
import comments from "./models/groups/comments.js";
import Post from "./models/groups/posts.js";
import Group from "./models/groups/Group.js";
export const setupSockets = (io) => {
  //this middleware ensures that every connection comes to server is authenticated with correct user
  io.use((socket, next) => {
    if (socket.handshake.query && socket.handshake.query.token) {
      jwt.verify(
        socket.handshake.query.token,
        process.env.JWT_SECRET,
        function (err, decoded) {
          if (err) return next(new Error("Authentication error"));
          socket.decoded = decoded;
          next();
        }
      );
    } else {
      next(new Error("Authentication error"));
    }
  });
  io.on("connection", (socket) => {
    console.log("A user connected: " + socket.id);

    socket.on("joinGroup", async (data) => {
      const { groupID, userID } = data;

      const group = await Group.findById(groupID);

      if (group && group.members.includes(userID)) {
        socket.join(groupID);
        socket.emit("joinedGroup", groupID);
      } else {
        socket.emit("error", "Unauthorized to join this group");
      }
    });

    socket.on("leaveGroup", (groupID) => {
      socket.leave(groupID);
    });
    socket.on("newComment", async ({ content, author, post }) => {
      const newComment = new comments({ content, author, post });
      await newComment.save();

      // Now we need to find the group this post belongs to
      // Assuming you have a Post model that contains a groupID
      const post1 = await Post.findById(post);

      if (post1) {
        io.to(post1.group).emit("newComment", { content, author, post });
      } else {
        socket.emit("error", "Invalid post");
      }
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
