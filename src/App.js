import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BaseLayout from './components/BaseLayout/BaseLayout'
import Discover from './pages/Discover/Discover'
import Home from './pages/Home/Home'
import './App.css'
import Movie from './pages/Movie/Movie'
import { useSelector } from 'react-redux'
import SearchResults from './components/SearchResults/SearchResults'

function App() {
  const { searchResults } = useSelector((state) => state.movies)

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              element={searchResults ? <BaseLayout><SearchResults /></BaseLayout> : <BaseLayout><Home /></BaseLayout>}
              path='/'
            />
            <Route
              element={searchResults ? <BaseLayout><SearchResults /></BaseLayout> : <BaseLayout><Discover /></BaseLayout>}
              path='/discover'
            />
            <Route
              element={searchResults ? <BaseLayout><SearchResults /></BaseLayout> : <BaseLayout><Movie /></BaseLayout>}
              path='/movie/:id'
            />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
