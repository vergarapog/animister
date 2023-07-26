type Props = {
  variationTitle: string;
};

const AnimationVariation = ({ variationTitle }: Props) => {
  return (
    <div
      className={`cursor-pointer select-none rounded p-4 text-center text-primarydark hover:bg-accent hover:text-white`}
    >
      {variationTitle}
    </div>
  );
};

export default AnimationVariation;
