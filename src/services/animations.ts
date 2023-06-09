import axios from "axios";

import { apiBaseUrl } from "../constants";

import { AnimationCategories } from "../types";

const getAll = async () => {
  const { data } = await axios.get<AnimationCategories[]>(`${apiBaseUrl}/all`);

  return data;
};

export default {
  getAll,
};
