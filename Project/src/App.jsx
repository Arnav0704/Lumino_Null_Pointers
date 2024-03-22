import ProfilePage from "./pages/Profile"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ProfilePage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
