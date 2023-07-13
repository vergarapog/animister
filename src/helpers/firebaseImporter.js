import { db } from "./config/firebase.ts";
import { collection, addDoc } from "firebase/firestore";

import { allAnimations } from "./dataOrganizer.js";

const animationCollectionRef = collection(db, "animations");

const addAnimation = async (animation) => {
  try {
    await addDoc(animationCollectionRef, animation);
  } catch (error) {
    console.log(error);
  }
};

allAnimations.forEach((animation) => {
  console.log(animation);
});
