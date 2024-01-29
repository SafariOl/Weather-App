import { images } from '../App'
import { useSelector } from 'react-redux'

export default function HourlyWeather() {
  const weathers = useSelector(state => state.hourly)
  const weather = weathers.hourly
  const hourlyWeather = []

  if(weather.length > 0 && !weathers.loading){
    for(let i = 0; i < weather.length; i++){
      const date = new Date(weather[i].dt_txt)
      let time = date.toLocaleTimeString('en-US')
      time = time.replaceAll('0', '').replaceAll(':', '')
      hourlyWeather.push({...weather[i], time: time})
    }
  }
        

  return (
    <div className='hourly'>
          <h2>Today At</h2>
          <div className="hours__block">
            {hourlyWeather.map((el, idx) => 
              <div className='hour' key={idx}>
                <div className='time'>{el.time}</div>
                <img className="weather" src={images[el.weather[0].main]} alt='weather'/>
                <div className="temp">{Math.floor(el.main.temp)}<sup>o<sub>c</sub></sup></div>
              </div>
            )}
        </div>
    </div>
  )
}
