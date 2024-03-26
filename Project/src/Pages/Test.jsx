import React, { useEffect } from "react";
import Profilepic from '../assets/profilepic.jpg'
const YourComponent = () => {
  const pinFileToIPFS = async (file) => {
    try {
      const API_KEY = "f4b09995c1d0fb42093f";
      const API_URL =
        "https://app.starton.com/projects/prj_d85062ff258745ca95c2592d42254d67/ipfs";

      const formData = new FormData();
      formData.append("file", file, file.name);

      const config = {
        method: "POST",
        headers: {
          "X-API-KEY": API_KEY,
        },
        body: formData,
      };

      const response = await fetch(API_URL, config);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const file = new Blob([profilepic], { type: "image/jpeg" }); // Create a Blob object from the image data
    pinFileToIPFS(file);
  }, []);

  return <div>{/* Your component JSX */}</div>;
};

export default YourComponent;