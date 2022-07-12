import React from 'react'
import './Thisdayinfo.scss'
import Temp from '../../assets/img/temp.svg'
import Pressure from '../../assets/img/pressure.svg'
import Precipitation from '../../assets/img/precipitation.svg'
import Wind from '../../assets/img/wind.svg'
import Cloud from '../../assets/img/cloud.png'
function Thisdayinfo({temp, temp2, pressure, humidity, wind}) {
  return (
    <div className='Thisdayinfo'>
<div className='wrapper_info'>
           <div className='temp'>
              <img className='weather_img' src={Temp} alt="temp" />
            {temp}
           </div>
           <div className='pressure'>
           <img className='weather_img' src={Pressure} alt="press" />
           {pressure}

           </div>
           <div className='precipitation'>
           <img className='weather_img' src={Precipitation} alt="" />
           {humidity}

           </div>
           <div className='wind'>
           <img className='weather_img' src={Wind} alt="" />
            {wind}
           </div>
           <img src={Cloud} alt="Cloud" className='cloud__img' />
</div>

    </div>
  )
}

export default Thisdayinfo