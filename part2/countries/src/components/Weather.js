import axios from 'axios'
import { useEffect, useState } from 'react'
import WeatherData from './WeatherData'

const Weather = ({capital, latlng}) => {
    const [weather, setWeather] = useState({})
    
    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => { setWeather(response.data) })
    }, [])

    return(
        <div>
            <h2>Weather in {capital}</h2>
            <WeatherData weather = {weather} />
        </div>
    )
}

export default Weather