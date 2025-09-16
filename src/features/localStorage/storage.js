const SAVED_COUNTRIES_KEY = "savedCountries";

export class MyLocalStorage {
    static getSavedCountries = () => {
        let savedCountries = JSON.parse(localStorage.getItem(SAVED_COUNTRIES_KEY));
        return savedCountries || [];
    };

    static saveCountry = (country) => {
        let savedCountries = this.getSavedCountries();
        savedCountries.push(country);
        localStorage.setItem(SAVED_COUNTRIES_KEY, JSON.stringify(savedCountries));
        return true;
    };
}

export class MySessionStorage {
    static getRegion = (regionName) => {
        let region = JSON.parse(sessionStorage.getItem(regionName));
        return region || [];
    };

    static saveRegion = (regionName, countries) => {
        if (!sessionStorage.getItem(regionName)) {
            sessionStorage.setItem(regionName, JSON.stringify(countries));
        }
    };
}