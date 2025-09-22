import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Countries from './pages/Countries'
import Country from './pages/Country'
import Collection from './pages/Collection'
import Quiz from './pages/Quiz'
import LeaderboardList from './components/quiz/LeaderboardList'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/leaderboard" element={<LeaderboardList />} />
        <Route path="*" element={<h1>404 not found friend....</h1>} />
      </Routes>
    </Router>
  )
}

export default App
