import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const OmdbSearch = () => {

    const [movies, setMovies] = useState([])
    const [movieName, setMovieName] = useState("")
    const navigate = useNavigate()

    const searchMovie = async () => {

        if (!movieName) {
            alert("Please enter movie name")
            return
        }

        const res = await axios.get(
            `https://www.omdbapi.com/?apikey=d13a4d18&s=${movieName}`
        )

        if (res.data.Response === "True") {
            setMovies(res.data.Search)
        } else {
            setMovies([])
            alert("Movie not found")
        }
    }

    return (
        <div style={{ textAlign: "center", padding: 30 }}>
            <h1>OMDB SEARCH</h1>

            {/* INPUT FIELD */}
            <input
                type="text"
                placeholder="Enter movie name..."
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                style={{
                    padding: "10px",
                    width: "250px",
                    marginRight: "10px"
                }}
            />

            <button onClick={searchMovie} style={{ padding: "10px 20px" }}>
                SEARCH
            </button>

            {/* GRID DISPLAY */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "20px",
                marginTop: "30px"
            }}>
                {
                    movies.map((movie) => (
                        <div key={movie.imdbID} style={{
                            border: "1px solid #ccc",
                            padding: "15px",
                            borderRadius: "10px"
                        }}>
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                            />
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>

                            <button
                                onClick={() => navigate(`/movie/${movie.imdbID}`)}
                                style={{ padding: "8px 15px" }}
                            >
                                View Details
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
