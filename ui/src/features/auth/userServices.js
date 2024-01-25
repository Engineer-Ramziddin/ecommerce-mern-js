import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const register = async (user) => {
  const response = await axios.post(`${base_url}user/register`, user);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
  
  return response.data;
};

const login = async (user) => {
  const response = await axios.post(`${base_url}user/login`, user);
   if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
  
  return response.data;
};

const getUserProductWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};

const userService = {
  register,
  login,
  getUserProductWishlist
};

export default userService;
