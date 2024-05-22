import React from "react";

const CircularFeed = () => {
  return (
    <div className="px-1">
      <div className="w-20 h-16 max-w-xs rounded-full transition-all cursor-pointer mb-1">
        <div className="flex justify-center mb-12">
          <img
            src="profile-1.jpg"
            className="w-[4rem] aspect-square rounded-[50%]"
            alt={`img-1`}
          />
        </div>
      </div>

      <h3 className="text-sm lg:text-lg text-center font-bold title-font first-letter:uppercase ">
        Your Story
      </h3>
    </div>
  );
};

export default CircularFeed;
