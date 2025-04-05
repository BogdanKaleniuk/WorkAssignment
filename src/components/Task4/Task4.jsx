import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import { fetchImagesWithTopic } from "./images.api";
import axios from "axios";
import ImageGallery from "./ImageGallery/ImageGallery";

const Task4 = () => {
  const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setImages([]);
      // setError(false);
      // setLoading(true);
      const data = await fetchImagesWithTopic(topic);
      console.log(data);
      setImages(data);
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Loader />
      <ImageGallery images={images} />
    </div>
  );
};

export default Task4;
