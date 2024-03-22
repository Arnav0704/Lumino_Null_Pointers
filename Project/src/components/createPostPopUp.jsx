import React, { useState } from 'react';
import Modal from 'react-modal';
import CreatePost from './createPosts';
import './CreatePostPopup.css';
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";


const CreatePostPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="bg-transparent flex justify-center items-center gap-2 text-white py-2 hover:text-zinc-900 rounded-2xl" onClick={openModal}>
      + Create Post
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="create-post-modal"
        overlayClassName="create-post-overlay"
      >
        <div className="bg-zinc-700 text-white p-4 pt-8 rounded-xl ">
          <button className="bg-transparent rounded absolute top-4 right-3" onClick={closeModal}>
          <MdOutlineClose />
          </button>
          <CreatePost/>
        </div>
      </Modal>
    </div>
  );
};

export default CreatePostPopup;