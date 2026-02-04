import React from "react";
import { useParams } from "react-router-dom";

export const TeamDetail = () => {
  const { teamname } = useParams();

  return (
    <div style={{ textAlign: "center" ,padding: 80}}>
      <h1>Playing {teamname}...</h1>
    </div>
  );
};
