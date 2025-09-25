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
        <Route path="/Country-Explorer" element={<Home />} />
        <Route path="/Country-Explorer/countries" element={<Countries />} />
        <Route path="/Country-Explorer/countries/:name" element={<Country />} />
        <Route path="/Country-Explorer/collection" element={<Collection />} />
        <Route path="/Country-Explorer/quiz" element={<Quiz />} />
        <Route path="/Country-Explorer/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<h1>404 not found friend....</h1>} />
      </Routes>
    </Router>
  )
}

export default App
