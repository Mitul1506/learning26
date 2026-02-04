import React from "react";
import { Link } from "react-router-dom";

export const Teams = () => {
  const teams = [
    "csk",
    "mi",
    "rcb",
    "kkr",
    "srh",
    "rr",
    "dc",
    "lsg",
    "gt",
    "pbks"
  ];

  return (
    <div style={{ textAlign: "center",padding:80 }}>
      <h1>IPL TEAMS</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {teams.map((team) => (
          <li key={team}>
            <Link to={`/teamdetail/${team}`}>
              {team}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
