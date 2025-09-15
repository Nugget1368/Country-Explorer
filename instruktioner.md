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

    - [ ] "Collection" – navigerar till /collection där användaren kan se sina sparade länder.

    - [ ] "Quiz" – navigerar till /quiz.

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

- [ ] Varje sparat land ska visa minst flagga och namn.

- [ ] Om användaren klickar på ett sparat land ska de komma tillbaka till landets detaljsida (/countries/:countryName).


## :love_letter: quiz – Quiz (VG-krav)
När användaren navigerar hit ska de först få:

- [ ] Mata in ett användarnamn.

- [ ] Välja en region (Europe, Asia, Oceania, Americas, Africa).

- [ ] När detta är gjort startar quizet:

- [ ] 15 frågor per quiz.

- [ ] Frågorna slumpas fram från regionens länder.

- [ ] För varje fråga visas en flagga, och användaren ska skriva in landets namn i ett input-fält.

- [ ] Vid svar ska appen visa om det var rätt eller fel och sedan gå vidare till nästa fråga.

- [ ] Efter alla 15 frågor visas resultatet (antal rätt).

- [ ] Resultatet ska sparas i localStorage tillsammans med användarnamnet och regionen.

## :love_letter: leaderboard – Leaderboard (VG-krav)
Här ska användaren kunna se leaderboards för varje region.

- [ ] För varje region ska det visas en lista över deltagare som gjort quiz.

- [ ] För varje deltagare ska minst följande visas:

- [ ] Användarnamn

- [ ] Poäng (antal rätt)

- [ ] Informationen ska hämtas från localStorage.