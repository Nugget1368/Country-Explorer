import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegion } from '../features/region/regionSlice.js'

const Countries = () => {
    const { countries, status, error } = useSelector(state => state.region)
    const dispatch = useDispatch()
    
    const handleClick = async (region) => {
        if(!countries.some(country => country.region === region.charAt(0).toUpperCase() + region.slice(1)))
        {
            dispatch(fetchRegion(region))
            console.log(countries);
        }
    }

    return (
        <>
            <section>
                <header>
                    <h2>Select Region</h2>
                </header>
                <article>
                    <div>
                        <button onClick={() => handleClick('europe')} className='btn'>Europe</button>
                        <button onClick={() => handleClick('africa')} className='btn'>Africa</button>
                        <button onClick={() => handleClick('asia')} className='btn'>Asia</button>
                        <button onClick={() => handleClick('america')} className='btn'>America</button>
                        <button onClick={() => handleClick('oceania')} className='btn'>Oceania</button>
                    </div>
                    <ul>
                        {countries.length > 0 && countries.map(country => (
                            <li key={country.name.common}>{country.name.common}</li>
                        ))}
                    </ul>
                </article>
            </section>
        </>
    )
}

export default Countries