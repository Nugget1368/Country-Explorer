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

    static getCountry = (name) => {
        let savedCountries = this.getSavedCountries();
        let country = savedCountries.find((c) => c.name.common === name);
        return country || false;
    };

    static removeCountry = (name) => {
        let savedCountries = this.getSavedCountries();
        let newList = savedCountries.filter((c) => c.name.common !== name);
        localStorage.setItem(SAVED_COUNTRIES_KEY, JSON.stringify(newList));
        return true;
    };

    static saveLeaderboard = ({ userName = "", region = "", score = 0 }) => {
        let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
        if (!leaderboard) {
            leaderboard = [];
        }
        if (leaderboard.find(b => b.region === region)) {
            let board = leaderboard.find(b => b.region === region);
            let player = board.players.find(b => b.userName === userName);
            if (player) {
                //If player higher-score is lower than new score => update
                if (player.score < score) {
                    board.players = board.players.filter(b => b.userName !== userName);
                    board.players.push({ userName, score });
                }
            }
            else {
                board.players.push({ userName, score });
            }
        }
        else {
            leaderboard.push({ region, players: [{ userName, score }] });
        }
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        return true;
    }

    static getLeaderboard = (region) => {
        let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
        return leaderboard.find(board => board.region === region) || [];
    }
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