import React from 'react'

export default function Fordaystatiks() {



  return (
 
            <>
    <div className="card__item">
        <div className="card__img">
            <img src={imgCardUrl} alt="weather img" />
        </div>
    <div className='card__title'>Завтра: {date.slice(0,10)}</div>
    <div className='tempbody'>{temperatura}°</div>
    <div className='windbody'><img src={Wind} alt="wind" /> {wind}</div>
    </div>
    
    
    </>
  )
}
