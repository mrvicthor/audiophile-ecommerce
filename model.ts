export interface Product {
  id: number;
  slug: string;
  name: string;
  image: IImage;
  category: string;
  categoryImage: IImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  featuresCont: string;
  includes: IncludesProps[];
  quantity: number;
  gallery: any;
  others: any;
}

interface IImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludesProps {
  quantity: number;
  item: string;
}

interface Gallery {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Others extends IImage {
  slug: string;
  name: string;
}

export interface Cart {
  items: Product[];
}
