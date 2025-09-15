import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1>404 Not Found Friend...</h1>}></Route>
      </Routes>
    </Router>
  )
}

export default App
