// export interface Animation {
//   animationTitle: string;
//   animationType: string;
//   id?: string;
//   variations: AnimationVariations[];
// }

// export interface AnimationVariations {
//   variationTitle: string;
//   keyframes: string;
// }

export interface AnimationCategory {
  id?: string;
  index: string;
  categoryTitle: string;
  groups: AnimationGroup[];
}

export interface AnimationGroup {
  animationTitle: string;
  variations: Variation[];
  isFavorite?: boolean;
}

export interface Variation {
  variationTitle: string;
  keyframes?: string;
  isFavorite?: boolean;
}

// export type OptionsFormValues = {
//   object: "box" | "circle"
//   duration: string
// }
