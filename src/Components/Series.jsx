import React from "react";
import { Link } from "react-router-dom";

export const Series = () => {
  
  const series = [
    "Asur",
    "Paatallok",
    "Mirzapur",
    "Family Man"
  ];

  return (
    <div style={{ textAlign: "center",padding:80 }}>
      <h1>SERIES</h1>

      
      <ul style={{ listStyle: "none", padding: 0 }}>
        {series.map((item, index) => (
          <li key={index}>
           
            <Link to={`/watch/${encodeURIComponent(item)}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
