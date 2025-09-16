import { useDispatch, useSelector } from 'react-redux'
import { fetchRegion } from '../features/region/regionSlice.js'
import CountryList from '../components/CountryList'
import { MySessionStorage } from '../features/localStorage/storage.js'
import { setCountries } from '../features/region/regionSlice.js'
import { useEffect, useState } from 'react'


const Countries = () => {
    const { countries, status, error } = useSelector(state => state.region);
    const dispatch = useDispatch();
    const regions = ['europe', 'africa', 'asia', 'america', 'oceania'];
    const [region, setRegion] = useState("");

    const handleClick = async (_region) => {
        setRegion(_region);
        //Get countries from Sessionstorage
        const localCountries = MySessionStorage.getRegion(_region);
        //Fetch Countries from API || Set countries from Sessionstorage
        localCountries.length === 0 ? dispatch(fetchRegion(_region)) : dispatch(setCountries(localCountries));
    }
    
    useEffect(() => {
        MySessionStorage.saveRegion(region, countries);
    }, [countries]);

    return (
        <>
            <section>
                <header>
                    <h2>Select Region</h2>
                </header>
                <article>
                    <div>
                        {regions.map(r => <button key={r} onClick={() => handleClick(r)} className='btn'>{r.charAt(0).toUpperCase() + r.slice(1)}</button>)}
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