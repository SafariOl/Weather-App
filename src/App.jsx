import React, { useEffect, useState } from 'react'
import NavBlock from './NavBlock'
import CurrentWeather from './CurrentWeather'
import clouds from './img/cloud.png'
import rain from './img/rain.png'
import clear from './img/sun.png'
import mist from './img/mist.png'
import snow from './img/snow.png'
import ForecastWeather from './ForecastWeather'
import Highlights from './Highlights'
import HourlyWeather from './HourlyWeather'
import moment from 'moment'

export const API_KEY = 'a43370d07c332057a138f54300a5a38a'
export const images = {
    'Clouds': clouds,
    'Haze': mist,
    'Mist': mist,
    'Clear': clear,
    'Rain': rain,
    'Snow': snow,
}

export default function App() {
  const [location, setLocation] = useState('')

  const [temp, setTemp] = useState(0)
  const [windDeg, setWinDeg] = useState(0)
  const [windSpeed, setSpeed] = useState(0)
  const [weatherName, setWeatherName] = useState('')
  const [weather, setWeather] = useState('')
  const [pressure, setPressure] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [visibility, setVisibility] = useState(0)
  const [feelsLike, setFeelsLike] = useState(0)
  const [sunrise, setSunrise] = useState('')
  const [sunset, setSunset] = useState('')

  const current = {
    location: location,
    temp: temp,
    weather: images[weather],
    weatherName: weatherName
  }

  const highlights = {
    sunrise: sunrise,
    sunset: sunset,
    windSpeed: windSpeed,
    windDeg: windDeg,
    humidity: humidity,
    pressure: pressure,
    visibility: visibility,
    feelsLike: feelsLike
  }

  async function getData(){
    try{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`)
      const data = await res.json();
        if(data.cod === '404'){
          document.querySelector('.error').classList.add('active')
          document.documentElement.style.overflowY = 'hidden'
        }else {
          document.querySelector('.error').classList.remove('active')
          document.documentElement.style.overflowY = 'visible'
        }
        let timezone = data.timezone
        setTemp(Math.floor(data.main.temp))
        setWeatherName(data.weather[0].description)
        setWeather(data.weather[0].main)
        setSpeed(data.wind.speed)
        setWinDeg(data.wind.deg)
        setHumidity(data.main.humidity)
        setVisibility(data.visibility / 1000)
        setPressure(data.main.pressure)
        setFeelsLike(Math.floor(data.main.feels_like))
        setSunrise(moment.utc(data.sys.sunrise,'X').add(timezone,'seconds').format('HH:mm a'))
        setSunset(moment.utc(data.sys.sunset,'X').add(timezone,'seconds').format('HH:mm a'))
        return data
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getData().catch(() => {
      document.querySelector('.error').classList.add('active')
    })
  }, [location])
  
  return (
    <div className='wrapper'>
      <div className="error">
          <h1>ERROR<br/><span>404</span></h1>
          <h2>System can't found<br/>this location!</h2>
      </div>
      <nav>
        <NavBlock setLocation={setLocation}/>
      </nav>
      <main>
        <div className='cur-future'>
            <CurrentWeather current={current}/>
            <ForecastWeather location={location}/>
        </div>
        <div>
            <Highlights highlights={highlights}/>
            <HourlyWeather location={location} />
        </div>
      </main>
    </div>
  )
}
