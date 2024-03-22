import React from "react";
import Posts from "../components/posts"
import FriendsList from "../components/friendsList"
const Home = () => {
  return (
    <>

      <div className="border-b-2 border-gray-700 h-72 z-10 shadow-md shadow-zinc-600">
        <h1 className="text-white fill-none blur-0 font-bold text-6xl mx-16 mt-16 mb-2 w-[40%]">Welcome To Project!!!</h1>
        <h1 className="text-white fill-none blur-0 font-bold text-6xl mx-16 w-[40%]">A Decentralized Social Media Platform</h1>
      </div>

      <div className="flex bg-black min-h-screen mt-16">
        <div className="w-2/3 overflow-hidden ml-48 border-2 rounded-2xl border-zinc-700 shadow-lg shadow-zinc-600">
          <Posts />
        </div>

        <div className="w-1/3 pl-4 rounded-2xl border-2 mx-8 mr-48 border-zinc-700 shadow-lg shadow-zinc-600">
          <FriendsList />
        </div>
      </div>
    </>
  );
};

export default Home;
