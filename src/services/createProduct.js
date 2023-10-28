import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

export default async function createProduct(product) {
  try {
    const response = await axios.post(url, product);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
