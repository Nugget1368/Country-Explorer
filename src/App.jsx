import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Countries from './pages/Countries'
import Country from './pages/Country'
import Collection from './pages/Collection'
import Quiz from './pages/Quiz'
import Leaderboard from './pages/Leaderboard'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/country-explorer" element={<Home />} />
        <Route path="/country-explorer/countries" element={<Countries />} />
        <Route path="/country-explorer/countries/:name" element={<Country />} />
        <Route path="/country-explorer/collection" element={<Collection />} />
        <Route path="/country-explorer/quiz" element={<Quiz />} />
        <Route path="/country-explorer/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<h1>404 not found friend....</h1>} />
      </Routes>
    </Router>
  )
}

export default App
