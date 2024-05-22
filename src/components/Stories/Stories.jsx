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
                backgroundImage: `url(${storyItem.backgroundImageUrl})`,
              }}
            >
              <div className="font-bold text-2xl text-white mt-5">
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
      <Stories loop stories={handleStoriesData()} width={600} />
    </div>
  );
};

export default StoriesList;
