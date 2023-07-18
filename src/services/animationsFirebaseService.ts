import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const animationCollectionRef = collection(db, "animations");

import { Animation } from "../types";

const getAllAnimations = async (): Promise<Animation[]> => {
  try {
    const data = await getDocs(animationCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as Animation[];
    return filteredData;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default { getAllAnimations };
