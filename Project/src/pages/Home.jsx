import React from 'react'
import CreatePostsPopup from "../components/createPostPopUp"
import FriendsList from "../components/friendsList"

const Home = () => {
  return (
    <div>
        <div className="border-b-2 border-gray-700 h-48">
          <h1 className="text-white fill-none">
            Welcome!!!
          </h1>
        </div>
        <div className="mx-8 flex bg-black min-h-screen mt-16">
          <div className="w-2/3  ml-48 border-2 rounded-2xl border-gray-700">
          </div>
          <div className="w-1/3 pl-4 rounded-2xl border-gray-700">
            <FriendsList />
          </div>
        </div>
    </div>
  )
}

export default Home;