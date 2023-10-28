import axios from 'axios';

const url = import.meta.env.VITE_API_URL;
export default async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
