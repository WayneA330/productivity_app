import React from "react";
import { useParams } from "react-router-dom";

const SpaceDetails = () => {
  let params = useParams();

  return <div>{params.id}</div>;
};

export default SpaceDetails;
