import { useState } from "react"
import { MyLocalStorage } from '../features/localStorage/storage.js';
import CountryList from '../components/CountryList'

const Collection = () => {

    const [savedCountries, setSavedCountries] = useState(MyLocalStorage.getSavedCountries());

    return (
        <section>
            <header>
                <h2>My Collection</h2>
            </header>
                {savedCountries && savedCountries.length > 0 ? <CountryList countries={savedCountries} />
                    : <>
                        <h3>No saved countries found in collection</h3>
                        <h4>Go to Countries and select a country you want to save</h4>
                    </>
                }
        </section>
    )
}

export default Collection