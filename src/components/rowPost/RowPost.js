import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { API_KEY,imageUrl } from '../../constants/const';
import axios from '../../constants/axios';
import ('./RowPost.css');
function RowPost(props) {
    const [poster, setPoster] = useState([]);
    const [urlId, setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((res)=>{
            setPoster(res.data.results);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    const videoPlay=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
            if(res.data.results.length!==0){
                setUrlId(res.data.results[0]);
            }else{
                console.log(res.data.results.length);
            }
        }).catch(()=>{
            console.log('something went wrong');
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {poster.map((obj)=>
               <img onClick={()=>videoPlay(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={imageUrl+obj.backdrop_path} alt="poster"/> 
            )}
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost