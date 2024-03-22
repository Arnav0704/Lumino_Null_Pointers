import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import Navbar from "./components/Navbar"
import ProfilePage from "./pages/Profile"
import Home from './pages/Home'
  
function App() {

    return (
      <>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />}
             />
            <Route
              path="/profile"
              element={<ProfilePage />}
             />
          </Routes>
        </BrowserRouter>
      </>
    )
  }

  export default App
