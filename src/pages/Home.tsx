import Navbar from "../components/Navbar";
import styles from "../style";
import PrimaryArea from "../components/PrimaryArea";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className={`${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`flex flex-grow justify-center`}>
        <div className={`${styles.boxWidth} `}>
          <PrimaryArea />
        </div>
      </div>
    </div>
  );
};

export default Home;
