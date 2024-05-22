import React from "react";

const CircularFeed = ({ data, key }) => {
  return (
    <div className="px-1" key={key}>
      <div className="circular-gradient-brder">
        <div className="max-w-sm rounded-full transition-all cursor-pointer mb-1">
          <div className="flex justify-center mb-12">
            <img
              src={data.image}
              className="w-[4rem] aspect-square rounded-[50%]"
              alt={`img-1`}
            />
          </div>
        </div>
      </div>

      <h3 className="text-sm text-center font-medium first-letter:uppercase ">
        {data.username}
      </h3>
    </div>
  );
};

export default CircularFeed;
