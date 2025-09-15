import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './CountryList.module.css'

const CountryList = () => {
    let { countries } = useSelector((state) => state.region)
    return (
        <ul>
            {
                countries && countries.map((country) => (
                    <li className={styles.card} key={country.name.common}>
                        <Link to={`/countries/${country.name.common}`}>
                        {
                            country.flags?.png ? <img src={country.flags.png} alt={country.flags.alt} /> : <img src="https://placehold.co/600x400" alt="Flag not found." />
                        }
                        <h4>{country.name?.common}</h4></Link>
                    </li>))
            }

        </ul>
    )
}

export default CountryList