import { useDispatch, useSelector } from 'react-redux'
import { fetchRegion, setCountries } from '../features/region/regionSlice.js'
import { MySessionStorage } from '../features/localStorage/storage.js'
import { useEffect, useState } from 'react'
import CountryList from '../components/CountryList'


const Countries = () => {
    const { countries, status, error } = useSelector(state => state.region);
    const dispatch = useDispatch();
    const regions = ["europe", "africa", "asia", "america", "oceania"];
    const [region, setRegion] = useState("");

    const handleClick = async (_region) => {
        setRegion(_region);
        //Get countries from Sessionstorage
        const localCountries = MySessionStorage.getFromStorage(_region);
        //Fetch Countries from API || Set countries from Sessionstorage
        localCountries.length === 0 ? dispatch(fetchRegion(_region)) : dispatch(setCountries(localCountries));
    }
    
    useEffect(() => {
        MySessionStorage.saveToStorage(region, countries);
    }, [countries]);

    return (
        <>
            <section>
                <header>
                    <h2>Select Region</h2>
                </header>
                <article>
                    <div className="row">
                        {regions.map(r => <button key={r} onClick={() => handleClick(r)} className="btn btn-primary">{r.charAt(0).toUpperCase() + r.slice(1)}</button>)}
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