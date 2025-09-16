import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { fetchCountry } from "../features/country/countrySlice.js";
import { useDispatch, useSelector } from "react-redux";
import { MyLocalStorage } from "../features/localStorage/storage.js";
const Country = () => {
    let params = useParams()
    const dispatch = useDispatch()
    let { country, status, error } = useSelector(state => state.country)
    useEffect(() => {
        dispatch(fetchCountry(params.name))
    }, [params.name, dispatch])

    const saveCountry = () => {
        let request = MyLocalStorage.saveCountry(country[0]);
        request ? alert("Country saved!") : alert("Country already exists in collection.");
    }

    return (
        <section>
            {status === "succeeded" && country ?
                <>
                    <header>
                        <img src={country[0].flags?.png} alt={country[0].flags?.alt} />
                        <h2>{country[0].name?.common}</h2>
                    </header>
                    <article>
                        <p>Currencies: {
                            Object.keys(country[0].currencies).map((currency) => (
                                <span key={currency}>{country[0].currencies[currency].name} ({country[0].currencies[currency].symbol})</span>
                            ))
                        }</p>
                        <p>Capital: {country[0].capital}</p>
                        <p>Population: {country[0].population} people</p>
                        <label htmlFor={`${country[0].name.common}-map`}><a href={country[0].maps?.googleMaps} id={`${country[0].name.common}-map`} target="_blank">Find it on the map!</a></label>
                        <button className="btn" onClick={saveCountry}>Save</button>
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