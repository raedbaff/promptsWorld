"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "../PromptCard/PromptCard";
import "./Feed.css";

const Feed = () => {
  const [prompts, setPrompts] = useState([]);
  const [filteredPrompts, setFilteredPrompts] = useState([]);
  const [filterText, setFilterText] = useState("");

  const filterResults = (e) => {
    const searchText = e.target.value;
    setFilterText(searchText);
    const filtered = prompts.filter(
      (prompt) =>
        prompt.content.toLowerCase().includes(searchText) ||
        prompt.tag.toLowerCase().includes(searchText) ||
        prompt.creator.username.toLowerCase().includes(searchText),
    );
    setFilteredPrompts(filtered);
  };

  const fetchPrompts = async () => {
    try {
      const response = await fetch("/api/prompt", {
        method: "GET",
      });
      const data = await response.json();
      console.log("data")
      console.log(data)
      setPrompts(data);
      setFilteredPrompts(data);
    } catch (error) {
      console.error("Error fetching prompts:", error);
    }
  };

  const DeletePrompt = async (id) => {
    try {
      await fetch(`/api/prompt/${id}`, {
        method: "DELETE",
      });
      setPrompts((prevPrompts) =>
        prevPrompts.filter((post) => post._id !== id),
      );
      setFilteredPrompts((prevFiltered) =>
        prevFiltered.filter((post) => post._id !== id),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  return (
    <div className="feed">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for prompts, tags, or users"
          className="search-input"
          value={filterText}
          onChange={filterResults}
        />
        <button className="search-button">Search</button>
      </div>
      {filteredPrompts.map((post) => (
        <PromptCard
          key={post._id}
          prompt={post}
          handleDelete={() => {
            DeletePrompt(post._id);
          }}
        />
      ))}
    </div>
  );
};

export default Feed;
