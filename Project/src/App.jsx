import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import Navbar from "./components/Navbar"
import ProfilePage from "./pages/Profile"
import Home from './pages/Home'
  
function App() {

    return (
      <>
        <Navbar/>
        <div className="border-b-2 border-gray-700 h-48">
          <h1 className="text-white fill-none">
            Welcome!!!
          </h1>
        </div>
        <div className="mx-8 flex bg-black min-h-screen mt-16">
          <div className="w-2/3 pr-4 ml-48 border-2 rounded-2xl border-gray-700">
            <Posts />
          </div>
          <div className="w-1/3 pl-4 rounded-2xl border-gray-700">
            <FriendsList />
          </div>
        </div>
      </>
    )
  }

  export default App
