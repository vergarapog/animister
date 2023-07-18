export interface Animation {
  animationTitle: string;
  animationType: string;
  id?: string;
  variations: AnimationVariations[];
}

export interface AnimationVariations {
  variationTitle: string;
  keyframes: string;
}
