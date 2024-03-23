import React, { useEffect, useRef, useState } from 'react';
import ProfilePic from '../assets/profile-image.png';
import Posts from "../components/posts";
import { LuCopy } from "react-icons/lu";
import { FaWallet } from "react-icons/fa6";
import { useAuthContext } from '@/hooks/useAuthContext';
import { ethers } from 'ethers';
import token from '../../abis/token';
// import Web3 from "web3";

const ProfilePage = () => {
  const {user} = useAuthContext()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setLoading(false);
  },[])
  console.log(user)
  const contractAbi = token.abi;
  const contractAddress = "0xb1f58D767E81630eE7A27B0B7F776Bd4B6061490"
  async function redeemTokens() {
    try {
          const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
          await ethereumProvider.send('eth_requestAccounts', []);
          const accounts = await ethereum.request({method:"eth_requestAccounts"});
          const ethereumSigner = ethereumProvider.getSigner();
          const socialToken = new ethers.Contract(contractAddress, contractAbi, ethereumSigner);
          const maxVal = user.points
          if(user.points==0){
            return;
          }
          const tx = await socialToken.transferTokens(accounts[0], ethers.utils.parseEther(`${maxVal}`));
          await tx.wait();
          user.points=0;
          localStorage.setItem('user', user );
          console.log('Transaction successful!');
      } catch (error) {
        console.error('Transaction failed:', error);
      }
  };
  
  
    return (
      !loading && 
      <div className="flex justify-center bg-zinc-900 min-h-screen py-10">
        <div className="bg-zinc-800 w-[60%] text-white border-1 border-white rounded-lg shadow-lg p-8 max-w-xl">
          <div className="flex items-center">
            {/* <img
              className="w-20 h-20 rounded-full mr-4"
              src={ProfilePic}
              alt="Profile Picture"
            /> */}
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-zinc-400">@{user.username}</p>
                <div className="flex mt-2 w-full items-center">
                  <p className="mr-4">
                      <span className="text-xl font-bold">{user.following.length}</span> Following
                  </p>
                  <p>
                      <span className="text-xl font-bold">{user.followers.length}</span> Followers
                  </p>
                </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            
            {/* <p className="text-md text-zinc-300">{user.bio}</p> */}
            <p className="font-bold mt-2"><span className="mr-1" role="img" aria-label="lightning">⚡</span>{user.streak} days streak</p>
          </div>
          <div className="mt-8">
            <div>
              <h3 className="text-lg font-bold">No. of Posts:</h3>
              {/* <p>{user.posts.length}</p> */}
            </div>
            <div className="mt-4 flex gap-2">
              <div>
                <h3 className="text-lg font-bold">Points:</h3>
                <p>{user.points}</p>
              </div>
              <button
                  className="bg-zinc-700 hover:bg-zinc-600 text-white font-medium px-3 py-1 rounded"
                  onClick={redeemTokens}
                  aria-label="Copy Referral Code">
                    Redeem
                </button>
            </div>
            {/* {user.walletConnected ? (
              <div className="mt-4">
                <h3 className="text-lg font-bold">Wallet Address:</h3>
                <p>{user.walletAddress}</p>
              </div>
            ) : (
              <div className="mt-4">
                <h3 className="text-lg font-bold">Connect Wallet:</h3>
                <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-1 px-3 rounded">
                  <FaWallet />
                </button>
              </div>
            )} */}
            <div className="mt-4">
              <h3 className="text-lg font-bold">Referral Code:</h3>
              <div className="flex items-center">
                <div className="bg-zinc-700 rounded flex justify-center">
                  <input
                    className="w-36 bg-zinc-700 text-white rounded mr-2 px-2 py-1 outline-none"
                    type="text"
                    defaultValue={user.referralCode}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 ">
              <h3 className="text-lg font-bold ">Posts:</h3>
              <div className="flex bg-black min-h-screen rounded-xl mt-16">
                <div className=" overflow-hidden border-2 rounded-2xl border-zinc-700 shadow-lg shadow-zinc-600">
                  <Posts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProfilePage;