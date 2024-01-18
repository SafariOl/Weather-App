import React, { useEffect } from 'react'
import { API_KEY } from './App'
import { images } from './App'

export default function ForecastWeather({location}) {

  const dayWeek = {
    0: 'Mon',
    1: 'Tue',
    2: 'Wed',
    3: 'Thu',
    4: 'Fri',
    5: 'Sat',
    6: 'Sun'
  }

  const days = document.querySelector('.days')
  let options2 = { month: "long" };

  async function getNextDays() {
    try{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`)
      const data = await res.json()
      days.innerHTML = ''
      let prevDay
      for(let i = 0; i < data.list.length; i++){
        if(i % 6 == 0){
          const date = new Date(data.list[i].dt_txt)
          let time = new Intl.DateTimeFormat("en-US", options2).format(date)
          let day = date.getDate()
          if(day - prevDay == 1){
            days.innerHTML += `
              <div class='day'>
                <div class="temp">${Math.floor(data.list[i].main.temp)}<sup>o<sub>c</sub></sup></div>
                <img class="weather" src=${images[data.list[i].weather[0].main]}></img>
                <div class='time'>${day} ${time}</div>
              </div>
            `
          }
          prevDay = day
        }
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getNextDays()
  }, [location])

    
  return (
    <div className='forecast'>
      <h2>5 Days Forecast</h2>
        <div className="current days">

        </div>
    </div>
  )
}
