import React, { useState } from "react";
import { Button } from "./ui/button";
import { MdSearch, MdAdd } from "react-icons/md";
import ProfilePic from "../assets/profilepic.jpg";
import { FaStar } from "react-icons/fa";
import CreatePostPopup from "./createPostPopUp";
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";
import {ethers} from 'ethers';
import logo from '../assets/logo.png'

const Navbar = () => {
  // Mock data data (replace with actual data data)
  const {user} = useAuthContext()
  const {logout} = useLogout()
  const [address,setAddress] = useState('');
  const [connected,setConnected] = useState(false);
    const data = {
      name: "John Doe",
      profilePicture: ProfilePic,
      streak: 10,
      points: 100,
      tokens: 50,
    };
    const handleLogout = () => {
      logout()
    }
    const connectWallet = async()=> {
      if (window.ethereum) {
        try {
          // Request access to user's Ethereum accounts
          await window.ethereum.request({ method: 'wallet_requestPermissions',
          params: [{
            eth_accounts: {}
          }]
        });

          // Create ethers.js provider
          const accounts = await ethereum.request({method:"eth_requestAccounts"});
          // console.log(accounts)
          setAddress(accounts[0]);
          setConnected(true);
        } catch (error) {
          console.error('Error connecting to wallet:', error);
        }
      } else {
        console.error('No Ethereum provider found.');
      }
    }

  return (
    <nav className="bg-black py-4 px-8 flex items-center justify-between border-solid border-gray-600 border-b-2 shadow-zinc-600 shadow-lg">
      <div className="flex items-center">
        <span className="text-white text-lg font-semibold">
          <Link to="/">
            <img src={logo} className="h-10"></img>
          </Link>
        </span>
      </div>
      <div className="flex items-center justify-center flex-grow">

        {/* Search Bar */}
        <div className="flex items-center bg-black outline outline-gray-400 px-4 py-2 w-[50%] rounded-full hover:bg-gray-900 transition-colors duration-250">
          <MdSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white w-full appearance-none bg-transparent focus:outline-0"
          />
        </div>
      </div>
      {
        user && 
        <div className="flex items-center my-auto">
            <div className="flex flex-col pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 bg-yellow-500 rounded-full shadow-lg transform hover:scale-200 transition duration-500"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-yellow-300 text-xs ml-1">{user.streak}</span>
            </div>
              <div className="flex justify-self-auto flex-col pr-2">
                <FaStar className="bg-orange-600 rounded-full w-full h-full p-1 shadow-lg transform hover:scale-200 transition duration-500" />
                <span className="text-orange-600 text-xs ml-1">{user.points}</span>
              </div>

              {/* Create Post */}
              <Button
                variant="outline"
                className="text-white flex items-center hover:text-zinc-900 rounded-xl mx-2"
              >
                <CreatePostPopup />
              </Button>
              {
                connected && 
                <Button
                  variant="outline"
                  className="text-white flex items-center hover:text-zinc-900 rounded-xl mx-2"
                  onClick = {connectWallet}>
                      {address && `${address.slice(0, 6)}...${address.slice(-4)}`}
                </Button>
              }
              {
               !connected && 
                <Button
                  variant="outline"
                  className="text-white flex items-center hover:text-zinc-900 rounded-xl mx-2"
                  onClick = {connectWallet}>
                    Connect Wallet
                </Button>
              }
              <Button
                variant="outline"
                className="text-white flex items-center hover:text-zinc-900 rounded-xl mx-2"
                onClick = {handleLogout}>
                Logout
              </Button>
              {/* User Profile */}
              <Link to='/profile'>
                <div className="flex items-center ml-4">
                  <img
                    src={data.profilePicture}
                    alt="Profile"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-white ml-2 font-medium">{user.name}</span>
                </div>
              </Link>

        </div>
      }
      {
        !user && <>
          <Link to='/login'><Button variant="outline" className="ml-4">Sign Up</Button></Link>
          <Link to='/login'><Button variant="outline" className="ml-2">Log In</Button></Link>
        </>
      }
    </nav>
  );
};

export default Navbar;
