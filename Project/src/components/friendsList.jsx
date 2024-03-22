import React from 'react'

const FriendsList = () => {
    const friends = [
        {
          id: 1,
          name: 'John Doe',
        },
        {
          id: 2,
          name: 'Jane Smith',
        },
      ];
    
      return (
        <div className="flex-shrink-0 text-white p-4">
          <h2 className="text-2xl font-semibold mb-4">Friends</h2>
          <ul>
            {friends.map((friend) => (
              <li key={friend.id} className="mb-2">
                {friend.name}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default FriendsList