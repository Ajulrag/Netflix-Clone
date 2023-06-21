import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY } from '../../constants/constants';

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[0]); // Updated property name: 'results' instead of 'result'
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>It is a long established fact that a reader will be distracted by the readable content of a page</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
