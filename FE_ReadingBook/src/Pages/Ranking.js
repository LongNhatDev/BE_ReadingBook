import React from "react";
import { useParams } from "react-router-dom";

const Ranking = () => {
  const params = useParams();
  return (
    <div>
      <h1>Ranking</h1>
      <p>{params.rankingType}</p>
    </div>
  );
};

export default Ranking;
