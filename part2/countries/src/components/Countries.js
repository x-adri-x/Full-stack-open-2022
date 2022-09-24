import Country from './Country'
import { useEffect, useState } from 'react'

const Countries = ({filter, countries}) => {
    const [selected, setSelected] = useState([])

    useEffect(() => {
        setSelected([])
    }, [filter])
    

    let filtered = countries.filter(country => 
        (country.name.common.toLowerCase()).includes(filter.toLowerCase()))
    

    if(filtered.length > 10) {
        return <p>Too many matches, specify another filter.</p>
    }
    if(filtered === 1) {
        <Country country = {filtered[0]} />
    }
    return(
        <div>
            {filtered.map(country => {
                return (
                    <div key = {country.cca2}>
                        {country.name.common} <button onClick = {() => setSelected([country])}>show</button>
                    </div>
                )})
            }
            {selected.length > 0 ? <Country country = {selected[0]} /> : null}
        </div>
    )
}

export default Countries