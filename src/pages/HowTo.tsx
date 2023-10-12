import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SimpleNavbar from "../components/SimpleNavbar";
import styles from "../style";

const HowTo = () => {
  return (
    <div className="flex h-screen flex-col">
      <div className={`${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <SimpleNavbar />
        </div>
      </div>
      <main className={`flex flex-grow justify-center`}>
        <div className={`w-full p-8 text-primarydark md:max-w-[850px]`}>
          <section className="space-y-5 text-justify md:text-lg">
            <h1 className="my-4 text-4xl uppercase md:my-10 md:text-5xl">
              How to
            </h1>
            <section className="space-y-20 md:space-y-16">
              <div className="flex items-center">
                <h2 className="mr-5 text-6xl md:mr-11">1</h2>
                <div className="flex h-36 flex-col justify-between border-l-2 px-2 md:px-6">
                  <h3 className="text-xl font-bold uppercase md:text-2xl">
                    Play
                  </h3>
                  <p>
                    So this is how it works… You start by browsing through
                    animations and playing with various options like easing,
                    delay, duration etc. You will be able to see how they affect
                    the animation on the spot.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <h2 className="mr-2 text-6xl md:mr-8">2</h2>
                <div className="flex h-36 flex-col justify-between border-l-2 px-2 md:px-6">
                  <h3 className="text-xl font-bold uppercase md:text-2xl">
                    Like
                  </h3>
                  <p>
                    You see something you like - just{" "}
                    <FontAwesomeIcon icon="heart" /> it. Rinse and repeat until
                    you are happy with your picks. You can see your favourites
                    at any time by hitting the <FontAwesomeIcon icon="filter" />{" "}
                    button or click the <FontAwesomeIcon icon="trash" /> button
                    to start from scratch.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <h2 className="mr-2 text-6xl md:mr-8">3</h2>
                <div className="flex h-36 flex-col justify-between border-l-2 px-2 md:px-6">
                  <h3 className="text-xl font-bold uppercase md:text-2xl">
                    Copy Code
                  </h3>
                  <p>
                    When you are ready, head to copy all code page by clicking
                    the <FontAwesomeIcon icon="download" /> button or download
                    link. Then you can copy the generated CSS code and paste it
                    into your favorite editor.
                    {/* in main navigation. If you use Chrome browser, hit the
                    download button and check your download folder. Boom - if
                    everything went well the{" "}
                    <span className="font-bold">'animista.css'</span> file
                    should be there. Otherwise you can simply copy the generated
                    CSS code and paste it into your favourite code editor. */}
                  </p>
                </div>
              </div>
              {/* <div className="space-y-5 py-10">
                <h2 className="text-2xl font-bold">Few Notes</h2>
                <p>
                  Download feature relies on HTML5 FileSystem API and is
                  supported in Chrome browser only. No worries, in other
                  browsers you will have the option to copy the generated CSS
                  code to clipboard.
                </p>
                <p>
                  Also, some of the animations are experimental and may not work
                  as expected in older browsers no matter how you prefix them.
                  Use your own judgement or better yet – consult the
                  super-useful caniuse.com to check for browser support.
                </p>
              </div> */}
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HowTo;
