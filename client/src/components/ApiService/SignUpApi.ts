import axios from "axios";
import { REACT_APP_API_URL } from "../../constant";
const baseUrl = REACT_APP_API_URL; // Update variable name
console.log(`baseUrl: ${baseUrl}`);
const API_URL = `${baseUrl}/signup`;
// console.log({ API_URL });

export const signup = async (data: any) => {
  try {
    const response = await axios.post(API_URL as string, data);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};
