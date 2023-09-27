import SimpleNavbar from "../components/SimpleNavbar";
import styles from "../style";
import PrimaryArea from "../components/PrimaryArea";

const Favorites = () => {
  return (
    <div className="flex flex-col">
      <div className={`${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <SimpleNavbar />
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

export default Favorites;
