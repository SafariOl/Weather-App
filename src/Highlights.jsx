import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons'

export default function Highlights(props) {
    const higlights = props.highlights
  return (
    <div className='current hightlights'>
        <h2>Todays Highlights</h2>
        <div className="hightlights__content">
            <div className="hilight__block">
                <p className='highlight-title'>Air Quality Index</p>
                <div className="items">
                    <FontAwesomeIcon className='icons' icon={faWind}/>
                    <div className="item">
                        <p className="item__name">Deg</p>
                        <div className="item__value">{higlights.deg}</div>
                    </div>
                    <div className="item">
                        <p className="item__name">Speed</p>
                        <div className="item__value">{higlights.speed}</div>
                    </div>
                </div>
            </div>
            <div className="hilight__block">
                <p className='highlight-title'>Sunrise & Sunset</p>
                <div style={{gap: '1.5em'}} className="items">
                    <div style={{display: 'flex', alignItems: 'center', gap: 15}}>
                        <FontAwesomeIcon className='icons' icon={faSun}/>
                        <div className="item">
                            <p className="item__name">Sunrise</p>
                            <div className="item__value__sun">{higlights.sunrise}</div>
                        </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: 15}}>
                        <FontAwesomeIcon className='icons' icon={faMoon}/>
                        <div className="item">
                            <p className="item__name">Sunset</p>
                            <div className="item__value__sun">{higlights.sunset}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hilight__block">
                <p className='highlight-title'>Humidity</p>
                <div className="items">
                    <div className="item__under">
                        <FontAwesomeIcon className='icons' icon={faDroplet}/>
                        <div className="item__value__under">{higlights.humidity}%</div>
                    </div>
                </div>
            </div>
            <div className="hilight__block">
                <p className='highlight-title'>Pressure</p>
                <div className="items">
                    <div className="item__under">
                        <FontAwesomeIcon className='icons' icon={faWater}/>
                        <div className="item__value__under">{higlights.pressure}hPa</div>
                    </div>
                </div>

            </div>
            <div className="hilight__block">
                <p className='highlight-title'>Visibility</p>
                <div className="items">
                    <div className="item__under">
                        <FontAwesomeIcon className='icons' icon={faEye}/>
                        <div className="item__value__under">{higlights.visibility}km</div>
                    </div>
                </div>

            </div>
            <div className="hilight__block">
                <p className='highlight-title'>Feels Like</p>
                <div className="items">
                    <div className="item__under">
                        <FontAwesomeIcon className='icons' icon={faTemperatureLow}/>
                        <div className="item__value__under">{higlights.feelsLike}<sup>o<sub>c</sub></sup></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
