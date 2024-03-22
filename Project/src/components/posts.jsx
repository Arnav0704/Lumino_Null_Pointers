import React, { useState } from 'react';
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Posts = () => {
  const posts = [
    {
      postId: 1,
      username: "user1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: ["user2", "user3"],
      comments: ["user4", "user5"],
      isSellable: false,
    },
    {
      postId: 2,
      username: "user2",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: ["user1", "user3"],
      comments: ["user2", "user5"],
      isSellable: true,
    },
  ];
  const [likedPosts, setLikedPosts] = useState([]);

  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };
  
  return (
    <>
    {posts.map((post) => (
      <div key={post.postId} className="w-full bg-black p-6 shadow-md border-b-2 border-gray-800 hover:bg-gray-900">
          <h2 className="text-xl font-bold text-white">Post Title</h2>
          <h3 className="text-gray-600 flex"><span className="my-2 flex gap-4 items-center font-bold text-white cursor-pointer hover:underline">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{post.username}</AvatarFallback>
            </Avatar>
            @{post.username}
            </span>
          </h3>
          <p className="text-gray-400 mb-4">{post.content}</p>
          <div className="flex items-center gap-16">
            <div className="flex gap-2 items-center text-gray-400 cursor-pointer">
              <div
                className={`flex gap-2 items-center text-gray-400 cursor-pointer`}
                onClick={() => handleLike(post.postId)}
              >
                {likedPosts.includes(post.postId) ? <FcLike size={'20px'}/> : <GoHeart size={'20px'}/>}
                <span>{post.likes.length}</span>
              </div>
            </div>
            <div className="flex gap-2 items-center text-gray-400">
              <FaRegComment/>
              <span>{post.comments.length}</span>
            </div>
            <div className="flex gap-2 items-center text-gray-400">
              <CiShare2/>
            </div>
            {post.isSellable && (
              <div className="flex gap-2 items-center text-gray-400">
                <CiShoppingCart/>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
    
  );
};

export default Posts;
