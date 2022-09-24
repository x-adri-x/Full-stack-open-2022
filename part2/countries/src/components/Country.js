import Weather from './Weather'

const Country = ({country}) => {
    
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>Languages</h2>
            <ul>
            {Object.values(country.languages).map(lang => <li key = {lang}>{lang}</li>)}
            </ul>
            <img alt = 'flag' src = {country.flags.png} />
            <Weather capital = {country.capital} latlng = {country.capitalInfo.latlng} /> 
        </div>
    )
}

export default Country