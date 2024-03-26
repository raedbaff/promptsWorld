import "./Form.css";
import Link from "next/link";

const Form = ({ type, post, setPost, handleSubmit, submitting }) => {
  const tagsArray = [
    "#webdev",
    "#AI",
    "#javascript",
    "#HTML",
    "#CSS",
    "#frontend",
    "#backend",
    "#coding",
    "#programming",
    "#development",
  ];

  return (
    <div className="form-container">
      <h1 className="mt-5 ml-4 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {type} Post
        </span>
      </h1>
      <p className="desc text-left max-w-md ml-4">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism bg-white p-8 rounded-lg shadow-md"
      >
        <label className="flex flex-col">
          <span className="font-semibold text-lg text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post?.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="form_textarea mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
          />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold text-lg text-gray-700">
            Field of Prompt{" "}
            <span className="font-normal text-base">
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <select
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
          >
            <option value="">Select a tag</option>
            {tagsArray.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          {/* <input
            value={post?.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
          /> */}
        </label>

        <div className="flex justify-between items-center">
          <Link href="/" className="text-gray-500 text-base">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2 text-base bg-orange-400 text-white rounded-lg  font-semibold shadow-md transition duration-300 ease-in-out hover:bg-primary-orange-dark focus:outline-none focus:ring-2 focus:ring-primary-orange"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
