import { useDispatch, useSelector } from 'react-redux'
import { fetchRegion } from '../features/region/regionSlice.js'
import CountryList from '../components/CountryList'


const Countries = () => {
    const { countries, status, error } = useSelector(state => state.region)
    const dispatch = useDispatch()
    
    const handleClick = async (region) => {
        if(!countries.some(country => country.region === region.charAt(0).toUpperCase() + region.slice(1)))
        {
            dispatch(fetchRegion(region))
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
                </article>
            </section>
            <section>
                {status === "loading" ? <h3>Loading...</h3> : 
                status === "succeeded" ? <CountryList countries={countries} /> :
                status === "failed" ? <h3>{error}</h3> : null
                }
            </section>
        </>
    )
}

export default Countries