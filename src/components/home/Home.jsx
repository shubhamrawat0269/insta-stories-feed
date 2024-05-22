import React from "react";
import { Feeds, Header } from "../composure";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen sm:hidden">
        <Header />
        <Feeds />
      </div>
      <div className="hidden sm:block">
        <p>kindly switch to mobile version</p>
      </div>
    </div>
  );
};

export default Home;
