import React, { useState, useRef, useEffect } from 'react';
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from './ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { MdOutlineClose } from 'react-icons/md';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Posts = () => {
  const posts = [
    {
      postId: 1,
      username: "user1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: ["user2", "user3"],
      comments: [
        {
          userId: "user4",
          content: "This is a comment from user4",
        },
        {
          userId: "user5",
          content: "This is a comment from user5",
        },
        {
          userId: "user5",
          content: "This is a comment from user5",
        },
      ],
      isSellable: false,
    },
    {
      postId: 2,
      username: "user2",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: ["user1", "user3"],
      comments: [
        {
          userId: "user2",
          content: "This is a comment from user2",
        },
        {
          userId: "user5",
          content: "This is a comment from user5",
        },
      ],
      isSellable: true,
    },
  ];
  const [likedPosts, setLikedPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const modalRef = useRef(null);

  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };
  
  const handlePostClick = (postId) => {
    const post = posts.find((post) => post.postId === postId);
    setSelectedPost(post);
    document.body.classList.add('overflow-hidden');
  };

  const handleModalClose = () => {
    setSelectedPost(null);
    document.body.classList.remove('overflow-hidden');
  };

  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleModalClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  return (
    <>
      <div style={{ height: "100vh", overflow: "hidden"}}>
        <div className={`h-full w-full`}>
          {posts.map((post) => (
            <div
              key={post.postId}
              className="w-full bg-black p-6 shadow-md border-b-2 border-gray-800 hover:bg-gray-900"
              onClick={() => handlePostClick(post.postId)}
            >
              <h2 className="text-xl font-bold text-white">Post Title</h2>
              <h3 className="text-gray-600 flex">
                <span className="my-2 flex gap-4 items-center font-bold text-white cursor-pointer hover:underline">
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
                    {likedPosts.includes(post.postId) ? (
                      <FcLike size={"20px"} />
                    ) : (
                      <GoHeart size={"20px"} />
                    )}
                    <span>{post.likes.length}</span>
                  </div>
                </div>
                <div className="flex gap-2 items-center text-gray-400">
                  <FaRegComment />
                  <span>{post.comments.length}</span>
                </div>
                <div className="flex gap-2 items-center text-gray-400">
                  <CiShare2 />
                </div>
                {post.isSellable && (
                  <div className="flex gap-2 items-center text-gray-400">
                    <CiShoppingCart />
                  </div>
                )}
              </div>
            </div>
          ))}
          {selectedPost && (
            <div className="fixed inset-0 flex justify-center items-center z-10">
              <div
                className={`bg-black bg-opacity-50 absolute inset-0 ${selectedPost ? " filter backdrop-blur-sm backdrop" : ""}`}
              ></div>
              <ScrollArea className="h-[50%] w-[30%] rounded-md border flex justify-center items-center">
                <div
                  className="bg-black p-6 w-full relative overflow-y-auto flex flex-col justify-center items-center"
                  ref={modalRef}
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white">{selectedPost.content}</h2>
                    <h3 className="text-gray-600 mt-2">@{selectedPost.username}</h3>
                  </div>
                  <div className="mb-6 w-full">
                    <h3 className="font-bold text-white">Comments</h3>
                    <ul className="mt-2">
                      {selectedPost.comments.map((comment, index) => (
                        <li key={index} className="mb-4 w-full">
                          <p className="text-gray-600 w-full">{comment.content}</p>
                          <p className="text-gray-400 w-full">Comment by: {comment.userId}</p>
                          <Separator className="my-2" />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="bg-transparent h-12 w-12 text-white rounded-full  absolute top-1 right-1"
                    onClick={handleModalClose}
                  >
                    <MdOutlineClose className='p-0 m-0' size={'40px'}/>
                  </Button>
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Posts;