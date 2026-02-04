import React from 'react'
import { Link } from "react-router-dom";

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center",paddingTop: "80px"}}>
        <h1>SHOWS</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/watch/Breaking Bad">Breaking Bad</Link>
        </li>
        <li>
          <Link to="/watch/Money Heist">Money Heist</Link>
        </li>
        <li>
          <Link to="/watch/Game of Thrones">Game of Thrones</Link>
        </li>
        <li>
          <Link to="/watch/Vikings">Vikings</Link>
        </li>
      </ul>
 


    </div>
  )
}