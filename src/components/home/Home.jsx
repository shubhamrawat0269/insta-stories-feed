import React from "react";
import { Feeds, Header } from "../composure";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen sm:hidden">
        <Header />
        <Feeds />
      </div>
      <div className="hidden sm:block w-full">
        <p className="bg-red-500 p-2 text-white font-bold text-center w-1/6 m-auto rounded-md">
          kindly switch to mobile version
        </p>
      </div>
    </div>
  );
};

export default Home;
