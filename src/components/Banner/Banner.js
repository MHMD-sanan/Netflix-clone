import './Banner.css'
import { useEffect} from 'react';
import { useState } from 'react';
import axios from '../../constants/axios';
import {API_KEY,imageUrl} from '../../constants/const'
function Banner() {
    const [movie,setMovie] = useState();
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            setMovie(res.data.results[7]);
            console.log(res.data.results[7]);
        })
      },[]);
  return (
    <div
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}} 
        className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.name:''}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie? movie.overview:''}</h1>
        </div>
        <div className="fade-bottom">

        </div>
    </div>
  )
}

export default Banner