# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Github Pages

För att deploya ett Vite-projekt till Github pages så måste projektet byggas om till _statiska filer_, Githup pages kan inte hantera projektet annars.

I detta projekt har jag gjort på följande sätt:

Innan några kommandon körs så är det viktigt att webbsidan har en bas-URL. Se till att detta står i din `vite.config.js`:

```js
export default defineConfig({
  base: '/Country-Explorer/',
})
```

>Det är även viktigt att ev. Routes och länkar uppdateras med bas-url:en, annars kan fel uppstå i Routingen.

1. **Bygg projektet** kör kommandot `npm run build` i terminalen. Detta kommer skapa en ny mapp `dist` och det är här som din _byggda applikation ligger_.

2. **Installera** Github-pages paketet (ifall det inte redan finns), `npm install --save-dev gh-pages`

3. **Uppdatera** `package.json` med ett _deploy-script_.

```json
"scripts": {
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}
```

När scriptet `gh-pages -d dist` körs så kommer mappen `dist` pushas till github-branchen `gh-pages`. Om branchen inte finns så kommer en ny att skapas.

> Det rekommenderas att man har en branch som endast är avsedd för deployning.

4. Kör deploy kommandot i terminalen, `npm run deploy`. När detta kommandot körs så kommer även kommandot `gh-pages -d dist` ifrån det tidigare steget (steg 3.) att köras.

Varje gång du vill göra en uppdatering till din deployade branch så kör du kommandona:

```bash
npm run build
npm run deploy
```
