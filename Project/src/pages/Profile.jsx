import React, { useRef } from 'react';
import ProfilePic from '../assets/profile-image.png'
import { LuCopy } from "react-icons/lu";
import { FaWallet } from "react-icons/fa6";

const ProfilePage = () => {
    const userProfile = {
      username: 'johndoe',
      name: 'John Doe',
      bio: 'Frontend Developer',
      email: 'johndoe@example.com',
      referralCode: 'ABCD1234',
      lastLogin: '2022-01-01',
      posts: ['Post 1', 'Post 2', 'Post 3'],
      followers: ['User1', 'User2', 'User3'],
      following: ['User4', 'User5', 'User6'],
      points: 1000,
      walletAddress: '0x1234...5678',
      streak: 5,
      walletConnected: true,
    };
  
    const referralCodeRef = useRef(null);
  
    const copyReferralCode = () => {
      if (referralCodeRef.current) {
        referralCodeRef.current.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges(); // Deselect the text
      }
    };
  
  
    return (
      <div className="flex justify-center bg-gray-900 min-h-screen py-10">
        <div className="bg-gray-800 w-[60%] text-white rounded-lg shadow-lg p-8 max-w-xl">
          <div className="flex items-center">
            <img
              className="w-20 h-20 rounded-full mr-4"
              src={ProfilePic}
              alt="Profile Picture"
            />
            <div>
              <h2 className="text-xl font-bold">{userProfile.name}</h2>
              <p className="text-sm text-gray-400">@{userProfile.username}</p>
              <div className="flex mt-2 w-full items-center">
                <p className="mr-4">
                    <span className="text-xl font-bold">{userProfile.following.length}</span> Following
                </p>
                <p>
                    <span className="text-xl font-bold">{userProfile.followers.length}</span> Followers
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            
            <p className="text-md text-gray-300">{userProfile.bio}</p>
            <p className="font-bold"><span className="mr-1" role="img" aria-label="lightning">⚡</span>{userProfile.streak} days streak</p>
          </div>
          <div className="mt-8">
            <div>
              <h3 className="text-lg font-bold">No. of Posts:</h3>
              <p>{userProfile.posts.length}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold">Points:</h3>
              <p>{userProfile.points}</p>
            </div>
            {userProfile.walletConnected ? (
              <div className="mt-4">
                <h3 className="text-lg font-bold">Wallet Address:</h3>
                <p>{userProfile.walletAddress}</p>
              </div>
            ) : (
              <div className="mt-4">
                <h3 className="text-lg font-bold">Connect Wallet:</h3>
                <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded">
                  <FaWallet />
                </button>
              </div>
            )}
            <div className="mt-4">
              <h3 className="text-lg font-bold">Referral Code:</h3>
              <div className="flex items-center">
                <div className="bg-gray-700 rounded flex justify-center">
                  <input
                    ref={referralCodeRef}
                    className="w-36 bg-gray-700 text-white rounded mr-2 px-2 py-1 outline-none"
                    type="text"
                    defaultValue={userProfile.referralCode}
                    readOnly
                  />
                  <button
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold p-1 rounded"
                    onClick={copyReferralCode}
                    aria-label="Copy Referral Code">
                    <LuCopy />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProfilePage;