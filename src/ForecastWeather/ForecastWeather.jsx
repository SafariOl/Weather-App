import { images } from '../App'
import { useSelector } from 'react-redux';

export default function ForecastWeather() {
  const weathers = useSelector(state => state.forecast)
  const weather = weathers.forecast
  let weatherArr = []
  if(weather.length > 0){
    let options2 = { month: "long" };
    let prevDay
    for(let i = 0; i < weather.length; i++){
      const date = new Date(weather[i].dt_txt)
      let time = new Intl.DateTimeFormat("en-US", options2).format(date)
      let day = date.getDate()
      if(day !== prevDay && weatherArr.length < 6){
        weatherArr.push({...weather[i], day: day, time: time})
        prevDay = day
      }
    }
    weatherArr.shift()
  }
  
  return (
    <div className={`forecast`}>
        <h2>5 Days Forecast</h2>
        <div className="current days">
            {weatherArr.map((el, idx) => 
              <div className='day' key={idx}>
                <div className="temp">{Math.floor(el.main.temp)}<sup>o<sub>c</sub></sup></div>
                <img className="weather" src={images[el.weather[0].main]} alt='weather'/>
                <div className='time'>{el.day} {el.time}</div>
              </div>
            )}
        </div>
    </div>
  )
}
