import React from "react";
import CircularFeed from "./CircularFeed";

const Feeds = () => {
  return (
    <div>
      {/* icon  */}
      <div className="py-2 px-3">
        <img className="w-[6.5rem]" src="1.png" alt="Instagram text" />
      </div>

      {/* circular labels  */}
      <div className="flex items-center px-[1rem] py-1 gap-3 overflow-x-auto no-scrollbar">
        <CircularFeed />
        <CircularFeed />
        <CircularFeed />
        <CircularFeed />
        <CircularFeed />
        <CircularFeed />
      </div>
    </div>
  );
};

export default Feeds;
