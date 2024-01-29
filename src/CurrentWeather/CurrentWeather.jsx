import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { images } from '../App'

export default function CurrentWeather() {  
  const weathers = useSelector(state => state.weather)
  const weather = weathers.weather

  const [day, setDay] = useState('')
  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')

  useEffect(() => {
    let options = { weekday: "long" };
    let options2 = { month: "long" };
    let data = new Date();
    setDate(data.getDate());
    setDay(new Intl.DateTimeFormat("en-US", options).format(date));
    setMonth(new Intl.DateTimeFormat("en-US", options2).format(date).slice(0, 3));
  })

  return (
    <div className='current'>
        <div className='temerature-block'>
          <h2>Now</h2>
            <div>
              <div className="temperature">
                <div>{Math.floor(weather[0].main.temp)}<sup>o<sub>c</sub></sup></div>
                <img src={images[weather[0].weather[0].main]} className='weather-name' alt='weather'/>
              </div>
              <p style={{textTransform: 'capitalize'}}>{weather[0].weather[0].description}</p>
            </div>
            <div style={{marginTop: 20}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}><FontAwesomeIcon icon={faLocationDot} /><p className='day-week'>{day} {date}, {month}</p></div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}><FontAwesomeIcon icon={faCalendar} /><p style={{textTransform: 'capitalize'}}>{weather[0].name}, {weather[0].sys.country}</p></div>
            </div>
        </div>
    </div>
  )
}
