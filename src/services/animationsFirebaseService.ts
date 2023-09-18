import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const animationCollectionRef = collection(db, "animations");

import { AnimationCategory } from "../types";

const getAllAnimations = async (): Promise<AnimationCategory[]> => {
  try {
    const data = await getDocs(animationCollectionRef);
    const mappedData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as AnimationCategory[];
    // const modifiedData = addFavoritesToAnimations(mappedData);
    return mappedData;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default { getAllAnimations };

// const addFavoritesToAnimations = (modifiedData: AnimationCategory[]) => {
//   for (const category of modifiedData) {
//     for (const animation of category.groups) {
//       animation.isFavorite = false;
//       for (const variation of animation.variations) {
//         variation.isFavorite = false;
//       }
//     }
//   }

//   return modifiedData;
// };

// const addFavoritesToAnimations = (originalData: AnimationCategory[]) => {
//   // Create a new array with the modified properties
//   const modifiedData = originalData.map((category) => ({
//     ...category,
//     groups: category.groups.map((animation) => ({
//       ...animation,
//       isFavorite: false,
//       variations: animation.variations.map((variation) => ({
//         ...variation,
//         isFavorite: false,
//       })),
//     })),
//   }));

//   return modifiedData;
// };
