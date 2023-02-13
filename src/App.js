import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BaseLayout from './components/BaseLayout/BaseLayout'
import Discover from './pages/Discover/Discover'
import Home from './pages/Home/Home'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              element={<BaseLayout><Home /></BaseLayout>}
              path='/'
            />
            <Route
              element={<BaseLayout><Discover /></BaseLayout>}
              path='/discover'
            />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
