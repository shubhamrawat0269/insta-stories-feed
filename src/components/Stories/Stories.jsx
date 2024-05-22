import React from "react";

import Stories from "react-insta-stories";
import { storiesData } from "../../dummy/storiesData";
import { useParams } from "react-router-dom";

const StoriesList = () => {
  const { username } = useParams();
  const handleStoriesData = () => {
    const stories = storiesData[username]?.map((storyItem) => {
      return {
        content: ({ action, isPaused }) => {
          return (
            <div
              className="w-full h-full"
              style={{
                background: `url(${storyItem.backgroundImageUrl})`,
                objectFit: "cover",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="font-bold text-4xl text-white relative bottom-10 flex items-end justify-center w-full h-full">
                <span>{storyItem.caption}</span>
              </div>
            </div>
          );
        },
      };
    });

    return stories;
  };

  return (
    <div className="w-full h-full">
      <Stories
        loop
        stories={handleStoriesData()}
        width="100vw"
        height="100vh"
      />
    </div>
  );
};

export default StoriesList;
