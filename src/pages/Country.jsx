import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { fetchCountry } from "../features/country/countrySlice.js";
import { useDispatch, useSelector } from "react-redux";
const Country = () => {
    let params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCountry(params.name))
    }, [])

    let { country, status, error } = useSelector(state => state.country)
    console.log(country[0]);

    return (
        <section>
            <header>
                <img src={country[0].flags.png} alt={country[0].flags.alt} />
                <h2>{country[0].name.common}</h2>
            </header>
            <article>

            </article>
        </section>
    )
}

export default Country