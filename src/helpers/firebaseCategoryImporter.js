import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

import { data } from "./data.js";

const animationCollectionRef = collection(db, "animations");

// console.log(data);

const addCategory = async (category) => {
  try {
    await addDoc(animationCollectionRef, category);
  } catch (error) {
    console.log(error);
  }
};

data.forEach((category) => {
  addCategory(category);
});
