import React from "react";
import { useParams } from "react-router-dom";

const Stories = () => {
  const { username } = useParams();
  return <div>Stories of {username}</div>;
};

export default Stories;
