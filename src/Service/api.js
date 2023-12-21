import axios from "axios";

const url = "https://backend-roan-ten.vercel.app"; // Update this with your server URL

const api = axios.create({
  baseURL: url,
});

export const addItem = async (formData) => {
  try {
    const response = await api.post("/add-item", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getItems = async () => {
  try {
    const response = await api.get("/get-items");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async (itemId) => {
  try {
    const response = await api.delete(`/delete-item/${itemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createUser = async (user) => {
  return await api.post(`${url}`, user);
};

// Updated function for updating an item
export const updateItem = async (itemId, updatedData) => {
  try {
    const response = await api.put(`/update-item/${itemId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const uploadImage = async (formData) => {
  try {
    const response = await api.post("/upload", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const login = async (userData) => {
  try {
    const response = await api.post("/login", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const signup = async (foormData) => {
  try {
    const response = await api.post("/signup", foormData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
