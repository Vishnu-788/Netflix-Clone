import './Banner.css'
import React, { useEffect } from 'react'
import axios from '../../axios'
import { API_KEY, BASE_URL } from '../../constants/constants'

function Banner() {
  useEffect(() => {
    axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
    })
  }, [])
  
  return (
    <div className="banner">
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?</h1>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
}

export default Banner