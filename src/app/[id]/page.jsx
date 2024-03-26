"use client";
import Form from "@/components/Form/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const editPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(`/api/prompt/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const response = await fetch(`/api/prompt/${params.id}`, {
          method: "GET",
        });
        const data = await response.json();
        setPost({ prompt: data.content, tag: data.tag });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrompt();
  }, [params.id]);
  return (
    <div>
      <Form
        type="edit"
        post={post}
        submitting={submitting}
        handleSubmit={editPrompt}
        setPost={setPost}
      />
    </div>
  );
};

export default Page;
