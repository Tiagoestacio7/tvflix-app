import { Card } from './Cards'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const CardList = () => {

  const [movies, setMovies] = useState([])

  const getMoviews = async () => {
    try {
      const config = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDM4N2QzOGI4ZWUxODU0ZDY3Y2M4MWIxNDFmZjU4ZCIsIm5iZiI6MTc3MTU0MzExMi4zMTUsInN1YiI6IjY5OTc5YTQ4MzE1MjllNTM0YjY2NjQ5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PchJ2tbWrok8SLI_Ob3Tpi5k43Ka2eH7sIpji3rwVWI'
        }
      }

      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        config
      )

      setMovies(response.data.results)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMoviews()
  }, [])

  return (
    <section className="container mt-5 pt-5">
      <h2 className="section-title">Filmes Populares</h2>

      <div className="row">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            date={movie.release_date}
            image={movie.poster_path}
          />
        ))}
      </div>
    </section>
  )
}