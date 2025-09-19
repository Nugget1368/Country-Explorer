# :rocket: Country Explorer

Du ska bygga en Country Explorer i React som använder React Context eller Redux för state management samt hämtar data från https://restcountries.com/.

**Deadline: Torsdag, 25:e September**

## :computer: Backend

- [x] Store
- [x] Redux implementation
- [x] React-Router

## :earth_asia: Startsida

- [ ] Visa en välkomstsida med fyra knappar:

  - [x] "Study countries" – navigerar till /countries.

  - [x] "Collection" – navigerar till /collection där användaren kan se sina sparade länder.

  - [x] "Quiz" – navigerar till /quiz.

  - [ ] "Leaderboard" – navigerar till /leaderboard.

## :earth_asia: countries – Välj region och se länder

- [x] Användaren ska kunna välja en av följande regioner: Europe, Asia, Oceania, Americas, Africa.

- [x] När en region väljs ska applikationen anropa API:et och hämta samtliga länder i regionen.

- [x] Sidan ska visa flaggor för alla länder i den valda regionen.

- [x] Varje flagga ska vara klickbar och leda vidare till en detaljsida för landet.

### :earth_asia: countries/:countryName – Landdetaljer

När användaren klickar på en flagga ska de navigeras hit.

Följande information om landet ska visas:

- [x] Flagga

- [x] Namn

- [x] Valuta

- [x] Befolkning

- [x] En länk till landets plats i Google Maps (finns i API-fältet).

- [x] Det ska även finnas en knapp för att spara landet.

- [x] När man sparar ett land ska det läggas i en samling som lagras i localStorage.

## :earth_asia: collection – Sparade länder

Här ska användaren kunna se en lista/grid med alla länder de har sparat.

- [x] Varje sparat land ska visa minst flagga och namn.

- [x] Om användaren klickar på ett sparat land ska de komma tillbaka till landets detaljsida (/countries/:countryName).

## :love_letter: quiz – Quiz (VG-krav)

När användaren navigerar hit ska de först få:

- [x] Mata in ett användarnamn.

- [x] Välja en region (Europe, Asia, Oceania, Americas, Africa).

När detta är gjort startar quizet:

- [ ] 15 frågor per quiz.

- [x] Frågorna slumpas fram från regionens länder.

- [x] För varje fråga visas en flagga, och användaren ska skriva in landets namn i ett input-fält.

- [x] Vid svar ska appen visa om det var rätt eller fel och sedan gå vidare till nästa fråga.

- [x] Efter alla 15 frågor visas resultatet (antal rätt).

- [x] Resultatet ska sparas i localStorage tillsammans med användarnamnet och regionen.

- [x] Sortera Leaderboard efter score.

- [x] Maxantal spelare på leaderboard (5?)

- [x] **Städa upp** `SavetoLeaderboard`

### SaveToLeaderboard

Det hade varit schysst att inte hämta med hjälp av find utan istället med regionnamnet:

```js
let region = leaderboard[region];
```

```js
static saveLeaderboard = ({ userName = "", region = "", score = 0 }) => {
        let leaderboard = this.getLeaderBoard();
        //Ändra
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
        //Ändra
        leaderboard = leaderboard.filter(board => board.region !== region);
        leaderboard.push(localRegion);
        this.setLeaderBoard(leaderboard);
        return true;
    }
```

### Utförande

Skapa 3 komponenter:

- Formulär med användaruppgifter
- Frågelista med Frågor
- Resultat

Växla mellan dessa i Quix.jsx.

## :love_letter: leaderboard – Leaderboard (VG-krav)

Här ska användaren kunna se leaderboards för varje region.

- [x] För varje region ska det visas en lista över deltagare som gjort quiz.

För varje deltagare ska minst följande visas:

- [x] Användarnamn

- [x] Poäng (antal rätt)

- [x] Informationen ska hämtas från localStorage.

## :exclamation: Övriga fel och Nice to have

### Felhantering

- [x] Borde inte kunna spara samma land 2 gånger
- [x] Är ett land redan sparat borde användaren istället kunna "ospara" (ta bort) landet.
- [x] Förhindra att ett quiz kan påbörjas utan att användaren fyllt i *username* och valt *region*.

### Nice to have

- [x] Spara redan hämtade regioner i Sessionstorage för att slippa ladda om dem varje gång.
- [ ] Borde man slå ihop `RegionSlice.js` med `CountrySlice.js` och ha 2 `Thunks` i samma Slice??
- [x] Tydligare visa om användaren hade rätt på frågan eller ej, visa med bock och kryss eller skriv ut 'Correct' eller 'Wrong'.
- [x] Styling
- [ ] Förbättra prestandan för SaveLeaderboard, se ovan.
- [x] **Tillbaka knapp**