const WeatherData = ({weather}) => {
    console.log(weather)
    
    if(Object.keys(weather).length > 0) {
        const Celsius = Math.floor(weather.main.temp - 273.15)
        return(
            <div>
                <p>Temperature: {Celsius} &#8451;</p>
                <img src = {`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt = 'weather-icon' />
                <p>Wind: {weather.wind.speed} m/s</p>
            </div>
        )
    }
    return null
}

export default WeatherData