import axios from "axios";

export default axios.create({
  baseURL: "https://63cf8aa51098240437817014.mockapi.io/api/",
  headers: {
    "Content-type": "application/json",
  },
});
