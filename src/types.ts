export interface Animation {
  isFavorite: boolean;
  upperTItle: string;
  variations: AnimationVariation[];
}

export interface AnimationVariation {
  isFavorite: boolean;
  lowerTitle: string;
  keyframes: string;
}

export interface AnimationCategories {
  id: string;
  title: string;
  groups: Animation[];
}
