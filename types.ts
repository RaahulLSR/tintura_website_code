export enum Category {
  CASUALS = 'CASUALS',
  SPORTZ = 'SPORTZ',
  BOYS = 'BOYS',
  LITE = 'LITE'
}

export type IconType = 'shield' | 'drop' | 'wind' | 'sun' | 'feather' | 'stretch' | 'bacteria' | 'water' | 'smell' | 'spark' | 'atom' | 'iron' | 'diamond' | 'fabric' | 'layers';

export interface Feature {
  id: string;
  name: string;
  iconType: IconType;
  description: string;
}

export interface Product {
  id: string;
  styleCode: string;
  name: string;
  category: Category;
  description: string;
  features: string[]; // Feature IDs
  imageUrl: string;
  isNew?: boolean;
  color?: string;
}