import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' 
import { useDispatch } from 'react-redux'
import { getCurWeatherFunc } from './CurrentWeather/weatherReducer'
import { fetchForecast } from './ForecastWeather/ForecastWReducer'
import { getHourlyWeatherFunc } from './HourlyWeather/HourlyWReducer'

export default function NavBlock() {
  const dispatch = useDispatch()
  const [location, setLocation] = useState('Ukraine')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getCurWeatherFunc(location))
    dispatch(fetchForecast(location))
    dispatch(getHourlyWeatherFunc(location))
    setLocation('')
  }

  useEffect(() => {
    dispatch(getCurWeatherFunc(location))
    dispatch(fetchForecast(location))
    dispatch(getHourlyWeatherFunc(location))
  }, [])

  return (
    <div className='current-day'>
        <div className="logo">weatherio</div>
        <form onSubmit={handleSubmit}>
          <input value={location} onChange={e => setLocation(e.target.value)} type="text" placeholder='Type Any Location...'/>
        </form>
        <FontAwesomeIcon className='search' icon={faMagnifyingGlass} />
        <button type='button' onClick={handleSubmit}>
        <FontAwesomeIcon icon={faLocationCrosshairs} /><p>SEARCH</p></button>
    </div>
  )
}
