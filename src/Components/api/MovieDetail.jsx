import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {

    const { imdbID } = useParams()
    const [movie, setMovie] = useState({})

    const getMovieDetail = async () => {
        const res = await axios.get(
            `https://www.omdbapi.com/?apikey=d13a4d18&i=${imdbID}`
        )
        setMovie(res.data)
    }

    useEffect(() => {
        getMovieDetail()
    }, [])

    return (
        <div style={{ padding: "40px" }}>
            <h1>{movie.Title}</h1>

            <div style={{ display: "flex", gap: "40px" }}>
                <img src={movie.Poster} alt={movie.Title} />

                <div>
                    <p><b>Year:</b> {movie.Year}</p>
                    <p><b>Genre:</b> {movie.Genre}</p>
                    <p><b>Director:</b> {movie.Director}</p>
                    <p><b>Actors:</b> {movie.Actors}</p>
                    <p><b>Plot:</b> {movie.Plot}</p>
                    <p><b>IMDB Rating:</b> {movie.imdbRating}</p>
                </div>
            </div>
        </div>
    )
}
