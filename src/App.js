import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              element={<SideBar />}
              path='/'
            />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
