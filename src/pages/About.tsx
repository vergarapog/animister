import SimpleNavbar from "../components/SimpleNavbar";
import styles from "../style";

const About = () => {
  return (
    <div className="flex h-screen flex-col">
      <div className={`${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <SimpleNavbar />
        </div>
      </div>
      <div className={`flex flex-grow justify-center`}>
        <div className={`w-full p-8 text-primarydark md:max-w-[900px]`}>
          <div className="space-y-5 text-justify md:text-lg">
            <div className="my-4 text-4xl uppercase md:my-8 md:text-5xl">
              About
            </div>
            <div className="space-y-4">
              <p>
                ANIMISTA IS A PLACE WHERE YOU CAN PLAY WITH A COLLECTION OF
                PRE-MADE CSS ANIMATIONS, TWEAK THEM AND GET ONLY THOSE YOU WILL
                ACTUALLY USE.
              </p>
              <p>
                Animista started out as a small side-project of mine. As I was
                increasingly using CSS animations, I thought it would come in
                handy to have them organised in a meaningful and accessible way
                so that they can be easily reused on different projects.
              </p>
              <p>
                The idea was to create a playground of a sorts where a
                collection of pre-made animations could be tested and tweaked
                before actually using them. Seeing how various options like
                easing, delay, duration and others affect the animation proved
                to be very useful. And basically that is how Animista was born.
              </p>
              <p>
                I have been using Animista for a while now and I hope some of
                you will find it useful as well. It is still very much a work in
                progress and hopefully it will evolve over the time :)
              </p>
              <p>
                Huge thanks to @sergej108 for helping me out with the JS part
                and for supporting and encouraging me to publish this project.
                Animista wouldn't be possible without him.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-xl md:text-3xl">Get in touch</div>
              <div>
                Should you decide to use Animista for your next cool project or
                have any suggestions/feedback it would be awesome if you gave me
                a shout at cssanimista(at)gmail.com!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
