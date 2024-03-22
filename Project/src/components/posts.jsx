import React from 'react'

const Posts = () => {
    const posts = [
        {
          id: 1,
          title: 'My First Post',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 2,
          title: 'Another Post',
          content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ];
    
      return (
        <div className="flex-1 text-white p-4">
          <h2 className="text-2xl font-semibold mb-4">Posts</h2>
          {posts.map((post) => (
            <div key={post.id} className="mb-4">
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )
}

export default Posts