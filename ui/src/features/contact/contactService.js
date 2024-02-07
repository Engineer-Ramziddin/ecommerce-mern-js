import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const postContact = async (data) => {
  const response = await axios.post(`${base_url}enquiry`, {data});
  return response.data;
};

const contactService = {
  postContact
};

export default contactService;
