import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

export default async function getProducts() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
