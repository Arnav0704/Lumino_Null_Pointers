import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from './ui/button';

const CreatePost = () => {
  const [title, setTitle] = useState('title');
  const [content, setContent] = useState('content');
  const [showPriceInput, setShowPriceInput] = useState(false);
  const [price, setPrice] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleToggleChange = () => {
    setShowPriceInput(!showPriceInput);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle submitting the post data to the backend or perform desired action
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Price:', price);

    // Clear the input fields
    setTitle('title');
    setContent('content');
    setPrice('');
  };

  return (
    <div className="bg-zinc-900 p-4 rounded-xl m-3">
      <h2 className="text-white text-2xl mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
              <Label htmlFor="title" className="text-white">TITLE</Label>
              <Input id="title" type="text" className="bg-black"/>

        </div>
        <div className="mb-4">
              <Label htmlFor="content" className="text-white">CONTENT</Label>
              <Input id="content" type="text" className="bg-black"/>
        </div>
        <div className="flex items-center mb-6 justify-start">
          <label className="text-white my-1 mr-2" htmlFor="toggle">
            List For Sell
          </label>
          <input
            className=""
            type="checkbox"
            id="toggle"
            checked={showPriceInput}
            onChange={handleToggleChange}
          />
          {showPriceInput && (
            <input
              className="px-2 py-1 w-[63%] outline-none bg-black outline-1 outline-white  text-white rounded ml-auto"
              type="number"
              id="price"
              placeholder="Enter Price"
              value={price}
              onChange={handlePriceChange}
              step="1"
              min="1"
              required
            />
          )}
        </div>
        <Button variant="outline" className="bg-zinc-900 text-white px-4 py-2 rounded-xl" type="submit">
          Create Post
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;