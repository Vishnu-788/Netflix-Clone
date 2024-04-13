import './Banner.css'
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, BASE_URL, IMAGE_URL } from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState()
  const randomIndex = Math.floor(Math.random() * 21);
  useEffect(() => {
    axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[randomIndex])
    })
  }, [])
  
  return (
    <div style={{backgroundImage: `url(${movie ? IMAGE_URL + movie.backdrop_path : ""})`}} className="banner">
        <div className="content">
            <h1 className="title">{movie? movie.title:""}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className="description">{movie ? movie.overview : " "}</h1>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
}

export default Banner