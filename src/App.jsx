import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bookshelf from './pages/Bookshelf'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Typing from './pages/Typing'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/typing" element={<Typing />} />
      </Routes>
    </Router>
  )
}

export default App
