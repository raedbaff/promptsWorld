import { connectDB } from "@/utils/db";
import Prompt from "@/models/prompt";

export const DELETE = async (req, { params }) => {
  try {
    await connectDB();
    await Prompt.findByIdAndDelete(params.id);
    return new Response("Deleted prompt successfully", { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const prompt = await Prompt.findById(params.id);
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectDB();
    const oldPrompt = await Prompt.findById(params.id);

    if (!oldPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    oldPrompt.content = prompt;
    oldPrompt.tag = tag;

    await oldPrompt.save();

    return new Response("Successfully updated the Prompts", { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
