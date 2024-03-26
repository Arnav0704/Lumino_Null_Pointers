import React, { useEffect, useState } from "react";

const YourComponent = () => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resourceURL = "https://eu.starton-ipfs.com/ipfs//bafkreih5bbrzkhf5xqgekgz4t3ildt67kfkupp5oyfp5mcdbq5tgd76soe";
        const res = await fetch(resourceURL);
        if (res.ok) {
          const blob = await res.blob();
          const objectURL = URL.createObjectURL(blob);
          setImageURL(objectURL);
        } else {
          console.log("Error retrieving image:", res.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <img src={imageURL} alt="IPFS Image" />
    </div>
  );
};

export default YourComponent;