import React from "react";
import "./SideBar.css";
import TopRatedPromptCard from "../TopRatedPromptCard/TopRatedPromptCard";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarTitle">Top Rated prompts</div>
      <div className="top-prompts-container">
        <TopRatedPromptCard />
        <TopRatedPromptCard />
        <TopRatedPromptCard />
      </div>
    </div>
  );
};

export default SideBar;
