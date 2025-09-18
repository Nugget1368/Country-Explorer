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

    static getLeaderBoard = () => JSON.parse(localStorage.getItem("leaderboard")) || [{ region: "", players: [] }];

    static setLeaderBoard = (leaderboard) => localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    static saveLeaderboard = ({ userName = "", region = "", score = 0 }) => {
        let leaderboard = this.getLeaderBoard();
        let regionExists = leaderboard.find(board => board.region === region);
        let localRegion = regionExists ? regionExists : { region, players: [] };

        let playerExists = localRegion.players.find(player => player.userName === userName);
        if (playerExists) {
            playerExists.score = playerExists.score < score ? score : playerExists.score;
            console.log("Player score: " + playerExists.score);
            console.log("Score: " + score);
        }
        else {
            localRegion.players.push({ userName, score });
        }
        localRegion.players = this.sortPlayers(localRegion.players);
        leaderboard = leaderboard.filter(board => board.region !== region);
        leaderboard.push(localRegion);
        this.setLeaderBoard(leaderboard);
        return true;
    }

    static sortPlayers = (players) => {
        players.sort((a, b) => b.score - a.score);
        return players.length > 5 ? players.slice(0, 5) : players;
    }

    static getSortedLeaderboard = (region) => {
        let leaderboard = this.getLeaderBoard();
        let board = leaderboard.find(board => board.region === region);
        if (board) {
            board.players = this.sortPlayers(board.players);
            return board;
        }
        return [];
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