import axios from "axios";
import { BASE_URL } from "configs";

export default axios.create({
  baseURL: BASE_URL
});
