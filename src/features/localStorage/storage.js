const SAVED_COUNTRIES_KEY = "savedCountries";

export class MyLocalStorage {
    static getSavedCountries = () => {
        let savedCountries = JSON.parse(localStorage.getItem(SAVED_COUNTRIES_KEY));
        return savedCountries || [];
    };

    static saveCountry = (country) => {
        let savedCountries = this.getSavedCountries();
        let countryExists = savedCountries.find((c) => c.name.common === country.name.common);
        if (countryExists) {
            return false;
        }
        else {
            savedCountries.push(country);
            localStorage.setItem(SAVED_COUNTRIES_KEY, JSON.stringify(savedCountries));
            return true;
        }
    };
}

export class MySessionStorage {
    static getFromStorage = (storageName) => {
        let region = JSON.parse(sessionStorage.getItem(storageName));
        return region || [];
    };

    static saveToStorage = (storageName, arr) => {
        if (!sessionStorage.getItem(storageName)) {
            sessionStorage.setItem(storageName, JSON.stringify(arr));
        }
    };
}