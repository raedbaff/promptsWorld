import { Schema, model, models } from "mongoose";
const upvoteSchema = new Schema({
  upVoter: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: Schema.Types.ObjectId,
    ref:"Prompt"
  }
});
const Upvote = models.Upvote || model("Upvote", upvoteSchema);
export default Upvote;
