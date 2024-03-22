import React from 'react';
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


const FriendsList = () => {
  const friends = [
    {
      id: 1,
      name: 'John Doe',
      userId: 'johndoe123',
      avatarUrl: 'https://example.com/john_avatar.jpg',
      following: 48,
      followers: 115
    },
    {
      id: 2,
      name: 'Jane Smith',
      userId: 'janesmith456',
      avatarUrl: 'https://example.com/jane_avatar.jpg',
      following: 28,
      followers: 235
    },
  ];

  return (
    <div className="flex-shrink-0 text-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} className="mb-4 flex items-center justify-between gap-4">
            <HoverCard>
              <HoverCardTrigger>
                <div className='flex gap-4'>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{friend.name}</AvatarFallback>
                  </Avatar>
                    <HoverCardContent className="w-72 bg-zinc-950 backdrop-blur-xl">
                      <Card className="w-[100%] bg-black shadow-lg shadow-gray-700">
                      {/* <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                      </CardHeader> */}
                      <CardContent className="my-4 text-white">
                         <div className='flex flex-row justify-between'>
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png"/>
                            <AvatarFallback>{friend.name}</AvatarFallback>
                          </Avatar>
                          <Button variant="outline">Follow</Button>
                          </div> 
                          <div className='flex flex-col mt-4 text-white'>
                            <p className="text-lg font-semibold">{friend.name}</p>
                            <p className="text-sm text-gray-500">@{friend.userId}</p>
                          </div>
                      </CardContent>
                      <CardFooter>
                        <div className='flex gap-2 text-white'>
                          <span className='font-bold'>{friend.following}</span> Following
                          <span className='font-bold'>{friend.followers}</span> Followers
                        </div>
                      </CardFooter>
                    </Card>

                    </HoverCardContent>
                  <div>
                    <p className="text-lg font-semibold">{friend.name}</p>
                    <p className="text-sm text-gray-500">@{friend.userId}</p>
                  </div>
                </div>
              </HoverCardTrigger>
            </HoverCard>
            <Button variant="outline">Follow</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
