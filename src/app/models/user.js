import { Schema, model, models } from "mongoose";
const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email must be unique"],
    required: [true, "Email must be provided"],
  },
  username: {
    type: String,
    unique: [true, "Username must be unique"],
    required: [true, "Username must be provided"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username is invalid, it should contain 8-20 alphanumeric characters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});
const User = models.User || model("User", userSchema);
export default User;
