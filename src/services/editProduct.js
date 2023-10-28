import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

export default async function editProduct(id, data) {
  try {
    const response = await axios.put(`${url}/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
