import SimpleNavbar from "../components/SimpleNavbar";
import styles from "../style";
import { useAppSelector } from "../hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Variation } from "../types";
import { useState } from "react";

const DownloadFavorites = () => {
  const favorites = useAppSelector(
    (state) => state.favoritesReducer.favoriteAnimations
  );

  const allVariationsOfFavorites = favorites.reduce(
    (accu: Variation[], curr) => {
      return [...accu, ...curr.variations];
    },
    []
  );

  const [isKeyframesCopied, setIsKeyframesCopied] = useState<boolean>(false);

  const copyToClipboardKeyframes = () => {
    const allKeyframes = allVariationsOfFavorites.map((variation) => {
      return variation.keyframes;
    });

    navigator.clipboard.writeText(allKeyframes.join(""));
    setIsKeyframesCopied(true);

    setTimeout(() => {
      setIsKeyframesCopied(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      <div className={`${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <SimpleNavbar />
        </div>
      </div>
      <main className={`flex flex-grow justify-center `}>
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
                {allVariationsOfFavorites.map((variation) => {
                  return (
                    <li>
                      <FavoriteBlock
                        variationTitle={variation.variationTitle}
                      />
                    </li>
                  );
                })}
              </ul>
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
              {allVariationsOfFavorites.map((variation) => {
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
};

const FavoriteBlock = ({ variationTitle }: FavoriteBlockProps) => {
  return (
    <button className="mr-3 mt-3 bg-gray-200 px-2 py-1 text-sm">
      {variationTitle}{" "}
      <span className="ml-2">
        <FontAwesomeIcon icon="x" className="text-sm" />
      </span>
    </button>
  );
};

export default DownloadFavorites;
