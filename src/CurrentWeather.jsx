import React, { useLayoutEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


export default function CurrentWeather({location, temp, weather, weatherName}) {
  const [day, setDay] = useState('')
  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')
  useLayoutEffect(() => {
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
        <div className="temperature">
          <div>{temp}<sup>o<sub>c</sub></sup></div>
          <img src={weather} className='weather-name'></img>
        </div>
        <p style={{textTransform: 'capitalize'}}>{weatherName}</p>
      </div>
      <div style={{marginTop: 20}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}><FontAwesomeIcon icon={faLocationDot} /><p className='day-week'>{day} {date}, {month}</p></div>
        <div style={{display: 'flex', alignItems: 'center', gap: 10}}><FontAwesomeIcon icon={faCalendar} /><p style={{textTransform: 'capitalize'}}>{location}</p></div>
      </div>
    </div>
  )
}
