// src/articles-api.js
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "ttwFTUBz06WhKlfOVFSAYFcBano8gm7Y0YYyc2FbxrM"; // Заміни на свій

export const fetchImagesWithTopic = async (topic) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: topic,
      client_id: ACCESS_KEY,
      per_page: 20,
    },
  });
  return response.data.results;
};
