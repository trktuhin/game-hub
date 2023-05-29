import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4efff6c7850b4d0ca41bcf9cc36b28be",
  },
});
