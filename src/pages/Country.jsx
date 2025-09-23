import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchCountry, setCountry } from "../features/region/regionSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { MyLocalStorage } from "../features/localStorage/storage.js";
import ReturnBtn from "../components/buttons/ReturnBtn";

const Country = () => {
    let params = useParams()
    const dispatch = useDispatch()
    let { country, status, error } = useSelector(state => state.region);
    const [inStorage, setInStorage] = useState(MyLocalStorage.getCountry(params.name) ? true : false);

    useEffect(() => {
        inStorage ? dispatch(setCountry(MyLocalStorage.getCountry(params.name))) : dispatch(fetchCountry(params.name));
        setInStorage(MyLocalStorage.getCountry(params.name) ? true : false);
    }, [params.name, dispatch])

    const saveCountry = () => {
        let request = MyLocalStorage.saveCountry(country);
        if (request) {
            setInStorage(true);
        }
    }

    const removeCountry = () => {
        let request = MyLocalStorage.removeCountry(country.name.common);
        if (request) {
            setInStorage(false)
        }
    }

    return (
        <section>
            <header>
                <ReturnBtn />
            </header>
            {status === "succeeded" && country ?
                <>
                    <article>
                        <div className="row">
                            <header>
                                <img src={country.flags?.png} alt={country.flags?.alt} />
                            </header>
                            <div className="column">
                                <h2>{country.name?.common}</h2>
                                <p><strong>Currencies:</strong> {
                                    Object.keys(country.currencies).map((currency) => (
                                        <span key={currency}>{country.currencies[currency].name} ({country.currencies[currency].symbol})</span>
                                    ))
                                }</p>
                                <p><strong>Capital:</strong> {country.capital}</p>
                                <p><strong>Population:</strong> {country.population} people</p>
                                <a className="btn btn-secondary material-symbols-outlined" href={country.maps?.googleMaps} target="_blank">map_search</a>
                            </div>
                        </div>
                        {inStorage ? <button className="btn btn-secondary" onClick={removeCountry}>Remove</button>
                            : <button className="btn btn-primary" onClick={saveCountry}>Save</button>
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