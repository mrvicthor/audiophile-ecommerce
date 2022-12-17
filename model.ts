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

export interface FormInput {
  Name: string;
  "Email Address": string;
  "Phone Number": string;
  "Your Address": string;
  "Zip Code": string;
  City: string;
  Country: string;
  "e-Money Number"?: string;
  "e-Money Pin"?: string;
}
