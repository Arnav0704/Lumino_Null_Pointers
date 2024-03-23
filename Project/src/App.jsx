import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import Navbar from "./components/Navbar"
import ProfilePage from "./Pages/Profile"
import Home from './Pages/Home'
import LoginSignup from './Pages/LoginSignup'
import { useAuthContext } from './hooks/useAuthContext'
function App() {
  const {user} = useAuthContext()
    return (
      <>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route
                path='/'
                element={<Home/>}
              />
              <Route
                path='/profile'
                element={<ProfilePage/>}
              />
              <Route
                  path="/login"
                  element={!user?<LoginSignup />:<Navigate to="/" />}
              />
            </Routes>
          </BrowserRouter>
      </>
    )
  }

  export default App
