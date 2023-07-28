import { data } from "./data.js";

const basicAnimations = data[0];
const entrancesAnimations = data[1];
const exitsAnimations = data[2];
const textAnimations = data[3];
const attentionAnimations = data[4];
const backgroundAnimations = data[5];

const correctedBasicAnimations = basicAnimations.groups.map((animation) => {
  return {
    animationType: "basic",
    animationTitle: animation.upperTitle,
    variations: animation.variations,
  };
});

const correctedEntrancesAnimations = entrancesAnimations.groups.map(
  (animation) => {
    return {
      animationType: "entrances",
      animationTitle: animation.upperTitle,
      variations: animation.variations,
    };
  }
);

const correctedExitsAnimations = exitsAnimations.groups.map((animation) => {
  return {
    animationType: "exits",
    animationTitle: animation.upperTitle,
    variations: animation.variations,
  };
});

const correctedTextAnimations = textAnimations.groups.map((animation) => {
  return {
    animationType: "text",
    animationTitle: animation.upperTitle,
    variations: animation.variations,
  };
});

const correctedAttentionAnimations = attentionAnimations.groups.map(
  (animation) => {
    return {
      animationType: "attention",
      animationTitle: animation.upperTitle,
      variations: animation.variations,
    };
  }
);

const correctedBackgroundAnimations = backgroundAnimations.groups.map(
  (animation) => {
    return {
      animationType: "background",
      animationTitle: animation.upperTitle,
      variations: animation.variations,
    };
  }
);

export const allAnimations = [
  ...correctedBasicAnimations,
  ...correctedEntrancesAnimations,
  ...correctedExitsAnimations,
  ...correctedTextAnimations,
  ...correctedAttentionAnimations,
  ...correctedBackgroundAnimations,
];

console.log(data.length);
