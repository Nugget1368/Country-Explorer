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

    static getLeaderBoard = () => JSON.parse(localStorage.getItem("leaderboard")) || {};

    static setLeaderBoard = (leaderboard) => localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    static saveLeaderboard = ({ userName, region, score }) => {
        let leaderboard = this.getLeaderBoard();
        if (!leaderboard[region]) {
            leaderboard[region] = { region: region, players: [{ userName: userName, score: score }] };
        }
        else {
            let existingPlayer = leaderboard[region].players.find(player => player.userName === userName);
            if(existingPlayer){
                existingPlayer.score = existingPlayer.score <= score ? score : existingPlayer.score;
            }
            else{
                leaderboard[region].players.push({ userName: userName, score: score });
            }
        }
        leaderboard[region].players = this.sortPlayers(leaderboard[region].players);
        this.setLeaderBoard(leaderboard);
        return true;
    }

    static sortPlayers = (players) => {
        players.sort((a, b) => b.score - a.score);
        return players.length > 5 ? players.slice(0, 5) : players;
    }

    static getSortedLeaderboard = (region) => {
        let leaderboard = this.getLeaderBoard();
        if (leaderboard[region]) {
            leaderboard[region].players = this.sortPlayers(leaderboard[region].players);
            return leaderboard[region];
        }
        return { region, players: [] };
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