import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchCountry, setCountry } from "../features/country/countrySlice.js";
import { useDispatch, useSelector } from "react-redux";
import { MyLocalStorage } from "../features/localStorage/storage.js";
const Country = () => {
    let params = useParams()
    const dispatch = useDispatch()
    let { country, status, error } = useSelector(state => state.country)
    const [inStorage, setInStorage] = useState(MyLocalStorage.getCountry(params.name) ? true : false);
    
    useEffect(() => {
        inStorage ? dispatch(setCountry(MyLocalStorage.getCountry(params.name))) : dispatch(fetchCountry(params.name));
        setInStorage(MyLocalStorage.getCountry(params.name) ? true : false);
    }, [params.name, dispatch])

    const saveCountry = () => {
        let request = MyLocalStorage.saveCountry(country);
        if (request) {
            alert("Country saved!");
            setInStorage(true);
        }
        else {
            alert("Country already exists in collection.");
        }
    }

    const removeCountry = () => {
        let request = MyLocalStorage.removeCountry(country.name.common);
        if (request) {
            alert("Country removed!")
            setInStorage(false)
        }
        else {
            alert("Country not found in collection.");
        }
    }

    return (
        <section>
            {status === "succeeded" && country ?
                <>
                    <header>
                        <img src={country.flags?.png} alt={country.flags?.alt} />
                        <h2>{country.name?.common}</h2>
                    </header>
                    <article>
                        <p>Currencies: {
                            Object.keys(country.currencies).map((currency) => (
                                <span key={currency}>{country.currencies[currency].name} ({country.currencies[currency].symbol})</span>
                            ))
                        }</p>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population} people</p>
                        <label htmlFor={`${country.name.common}-map`}><a href={country.maps?.googleMaps} id={`${country.name.common}-map`} target="_blank">Find it on the map!</a></label>
                        {inStorage ? <button className="btn" onClick={removeCountry}>Remove</button>
                            : <button className="btn" onClick={saveCountry}>Save</button>
                        }
                    </article>
                </> :
                status === "loading" ?
                    <h3>Loading...</h3> :
                    status === "failed" ?
                        <h3>{error}</h3> :
                        <h3>Country not found...</h3>
            }
        </section>
    )
}

export default Country