import { useDispatch, useSelector } from 'react-redux'
import { fetchRegion } from '../features/region/regionSlice.js'
import CountryList from '../components/CountryList'


const Countries = () => {
    const { countries, status, error } = useSelector(state => state.region);
    const dispatch = useDispatch();
    const regions = ['europe', 'africa', 'asia', 'america', 'oceania'];
    
    const handleClick = async (region) => {
        if(!countries.some(country => country.region === region))
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
                        {regions.map(region => <button key={region} onClick={() => handleClick(region)} className='btn'>{region.charAt(0).toUpperCase() + region.slice(1)}</button>)}
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