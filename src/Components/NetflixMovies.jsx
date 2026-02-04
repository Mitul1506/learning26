import React from 'react'
import { Link } from "react-router-dom";


export const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center",paddingTop: "80px"}}>
        <h1>MOVIES</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/watch/Inception">Inception</Link>
        </li>
        <li>
          <Link to="/watch/Interstellar">Interstellar</Link>
        </li>
        <li>
          <Link to="/watch/The Dark Knight">The Dark Knight</Link>
        </li>
        <li>
          <Link to="/watch/Avengers Endgame">Avengers: Endgame</Link>
        </li>
      </ul>
    </div>
  )
}