import { Schema, model, models } from "mongoose";
const promptSchema = new Schema({
  content: {
    type: String,
    unique: [true, "Email must be unique"],
    required: [true, "Please provide the prompt content"],
  },
  tag: {
    type: String,
    required: [true, "Please provide a prompt tag"],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  upvotes: [
    {type: Schema.Types.ObjectId,
    ref: "Upvote"}
  ]
});
const Prompt = models.Prompt || model("Prompt", promptSchema);
export default Prompt;
