import SimpleNavbar from "../components/SimpleNavbar";
import styles from "../style";
import { useAppSelector } from "../hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Variation } from "../types";
import { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const DownloadFavorites = () => {
  const favorites = useAppSelector(
    (state) => state.favoritesReducer.favoriteAnimations
  );

  const [downloadList, setDownloadList] = useState<Variation[]>([]);

  useEffect(() => {
    const allVariationsOfFavorites = favorites.reduce(
      (accu: Variation[], curr) => {
        return [...accu, ...curr.variations];
      },
      []
    );

    setDownloadList(allVariationsOfFavorites);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteFavorite = (variationTitle: string) => {
    const filteredDownloadList = downloadList.filter((item) => {
      return item.variationTitle !== variationTitle;
    });

    setDownloadList(filteredDownloadList);
  };

  const [isKeyframesCopied, setIsKeyframesCopied] = useState<boolean>(false);

  const copyToClipboardKeyframes = () => {
    const allKeyframes = downloadList.map((variation) => {
      return variation.keyframes;
    });

    navigator.clipboard.writeText(allKeyframes.join(""));
    setIsKeyframesCopied(true);

    setTimeout(() => {
      setIsKeyframesCopied(false);
    }, 1500);
  };

  if (downloadList.length === 0) {
    return (
      <div className="flex flex-col">
        <div className={`${styles.flexCenter} bg-primary`}>
          <div className={`${styles.boxWidth}`}>
            <SimpleNavbar />
          </div>
        </div>
        <Breadcrumbs routeName="Download" />
        <main className={`flex flex-grow justify-center text-primarydark`}>
          <section className={`w-full p-8 text-primarydark md:max-w-[850px]`}>
            <h1 className="my-4 text-4xl uppercase md:my-8 md:text-5xl">
              OHHH NO
            </h1>
            <div className="">
              <h1 className="mb-4 text-xl uppercase md:my-8 md:text-2xl">
                How about picking some animations first :)
              </h1>
              <Link
                to="/"
                className="rounded-md p-1 font-bold uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-white"
              >
                Go back
              </Link>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className={`${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <SimpleNavbar />
        </div>
      </div>
      <Breadcrumbs routeName="Download" />
      <main className={`flex flex-grow justify-center`}>
        <section className={`w-full p-8 text-primarydark md:max-w-[850px]`}>
          <article className="space-y-5 text-justify md:text-lg">
            <h1 className="my-4 text-4xl uppercase md:my-8 md:text-5xl">
              Download
            </h1>
            <div className="space-y-4">
              <p className="text-xl font-bold tracking-wide">
                These are your favorites so far
              </p>
              <ul className="flex flex-wrap">
                {downloadList.map((variation) => {
                  return (
                    <li>
                      <FavoriteBlock
                        variationTitle={variation.variationTitle}
                        handleDeleteFavorite={handleDeleteFavorite}
                      />
                    </li>
                  );
                })}
              </ul>
              <p className="text-md">
                You can remove animations from the download queue by clicking on
                the 'x' button. Worry not though – this will not remove them
                from your favourites list!
              </p>
              <div className="py-5">
                <Link
                  to="/"
                  className="px-2 py-1 font-bold uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-white"
                >
                  Pick More Animations
                </Link>
              </div>
            </div>
          </article>

          <article className="flex h-[400px] flex-col justify-center space-y-4 bg-gray-200">
            <pre className="mx-2 h-[350px] overflow-y-scroll p-5">
              {downloadList.map((variation) => {
                return <div>{variation.keyframes} </div>;
              })}
            </pre>
          </article>

          <article className="mt-4">
            <button
              className={` px-2 py-1 text-sm uppercase tracking-wide text-white transition-all ${
                isKeyframesCopied ? "scale-105 bg-green-400 " : "bg-primary"
              }`}
              onClick={copyToClipboardKeyframes}
            >
              {isKeyframesCopied ? (
                "All Favorites Copied!"
              ) : (
                <>
                  Copy All Favorites <FontAwesomeIcon icon="download" />
                </>
              )}
            </button>
          </article>
        </section>
      </main>
    </div>
  );
};

type FavoriteBlockProps = {
  variationTitle: string;
  handleDeleteFavorite: (variationTitle: string) => void;
};

const FavoriteBlock = ({
  variationTitle,
  handleDeleteFavorite,
}: FavoriteBlockProps) => {
  return (
    <button className="mr-3 mt-3 flex items-center rounded bg-gray-200 px-2 pt-1 text-sm">
      <p>{variationTitle}</p>
      <span className="ml-2">
        <FontAwesomeIcon
          icon="x"
          className="rounded p-1 text-sm hover:bg-accent hover:text-white"
          onClick={() => handleDeleteFavorite(variationTitle)}
        />
      </span>
    </button>
  );
};

export default DownloadFavorites;
