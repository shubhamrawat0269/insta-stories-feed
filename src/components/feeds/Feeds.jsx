import React from "react";
import CircularFeed from "./CircularFeed";
import { categoryData } from "../../dummy/categoryData";

const Feeds = () => {
  return (
    <div>
      {/* icon  */}
      <div className="py-2 px-3">
        <img className="w-[6.5rem]" src="1.png" alt="Instagram text" />
      </div>

      {/* circular labels  */}
      <div className="flex items-center px-[1rem] py-1 overflow-x-auto no-scrollbar">
        {/* <CircularFeed /> */}
        {categoryData.map((profile, id) => {
          return (
            <div key={id}>
              <CircularFeed data={profile} id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feeds;
