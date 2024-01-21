import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const baseUrl = "http://localhost:3001/api";
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
