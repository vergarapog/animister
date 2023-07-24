import { db } from "./firebase.js";
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

// console.log(allAnimations[0]);
// addAnimation(allAnimations[0]);

allAnimations.forEach((animation) => {
  addAnimation(animation);
});
