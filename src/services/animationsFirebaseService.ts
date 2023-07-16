import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const animationCollectionRef = collection(db, "animations");

const getAllAnimations = async () => {
  try {
    const data = await getDocs(animationCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
  } catch (err) {
    console.error(err);
  }
};

export default { getAllAnimations };
