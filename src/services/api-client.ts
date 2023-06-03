import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a07ab1641b724789968abf1a1395a15d",
  },
});
