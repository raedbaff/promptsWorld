import { connectDB } from "@/utils/db";
import Prompt from "@/models/prompt";

export const GET = async (req, res) => {
  try {
    await connectDB();
    console.log("are we here or no")
    const prompts = await Prompt.find({}).populate("creator")
    console.log("your prompts")
    console.log(prompts)
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
