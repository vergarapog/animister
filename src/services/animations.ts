import axios from "axios";

import { apiBaseUrl } from "../constants";

import { AnimationCategory } from "../types";

const getAll = async () => {
  const { data } = await axios.get<AnimationCategory[]>(`${apiBaseUrl}/all`);

  return data;
};

export default {
  getAll,
};
