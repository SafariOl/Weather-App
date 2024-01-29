import NavBlock from './NavBlock'
import CurrentWeather from './CurrentWeather/CurrentWeather'
import clouds from './img/cloud.png'
import rain from './img/rain.png'
import clear from './img/sun.png'
import mist from './img/mist.png'
import snow from './img/snow.png'
import ForecastWeather from './ForecastWeather/ForecastWeather'
import Highlights from './CurrentWeather/Highlights'
import HourlyWeather from './HourlyWeather/HourlyWeather'
import { useSelector } from 'react-redux'

export const images = {
    'Clouds': clouds,
    'Haze': mist,
    'Mist': mist,
    'Clear': clear,
    'Rain': rain,
    'Snow': snow,
}


export default function App() {
  const weather = useSelector(state => state.weather.weather)

  return (
    <div className='wrapper'>
        <nav>
          <NavBlock />
        </nav>
        {weather.length === 0 ? 
          <div className={`error active`}>
              <h1>ERROR<br/><span>404</span></h1>
              <h2>System can't found<br/>this location!</h2>
          </div>
          :
          <main>
            <div className='cur-future'>
                <CurrentWeather />
                <ForecastWeather />
            </div>
            <div>
                <Highlights />
                <HourlyWeather />
            </div>
          </main>
        }
    </div>
  )
}
