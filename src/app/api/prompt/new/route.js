import { connectDB } from "@/utils/db";
import Prompt from "@/models/prompt";

export const POST = async (req, res) => {
  const { creator, prompt, tag } = await req.json();

  try {
    await connectDB();
    const newPrompt = new Prompt({
      creator,
      content: prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt, { status: 201 }));
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
