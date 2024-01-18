import React, { useEffect } from 'react'
import { images } from './App'
import { API_KEY } from './App'

export default function HourlyWeather({location}) {
  const block = document.querySelector('.hours__block')

    async function getHighlights (){
      try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=9&appid=${API_KEY}`)
        const data = await res.json()
        block.innerHTML = ''
        for(let i = 0; i < data.list.length; i++){
          const date = new Date(data.list[i].dt_txt)
          let time = date.toLocaleTimeString('en-US')
          time = time.replaceAll('0', '').replaceAll(':', '')
          block.innerHTML += `
            <div class='hour'>
              <div class='time'>${time}</div>
              <img class="weather" src=${images[data.list[i].weather[0].main]}></img>
              <div class="temp">${Math.floor(data.list[i].main.temp)}<sup>o<sub>c</sub></sup></div>
            </div>
            `
        }
      }catch (err) {
        console.log(err)
      }
    }
        
    useEffect(() => {
      getHighlights().catch(() => {
        block.innerHTML = `
          <div class='error'>
            <h1>Sorry! System can't found this location!</h1>
          </div>
        `
      })
    }, [location])

  return (
    <div className='hourly'>
        <h2>Today At</h2>
        <div className="hours__block">
        </div>
    </div>
  )
}
