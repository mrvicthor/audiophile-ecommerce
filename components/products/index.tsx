import { Product } from "../index";

const Products = () => {
  return (
    <div className="mt-20 px-6 grid gap-16 md:mt-[6.3125rem] lg:mt-[10rem] md:grid-cols-3 lg:max-w-[69.364rem] lg:mx-auto lg:px-0">
      <Product imagePath="/images/image-header-mobile.png" title="headphones" />
      <Product imagePath="/images/image-speaker-mobile.png" title="speakers" />
      <Product imagePath="/images/image-earbud-mobile.png" title="earphones" />
    </div>
  );
};
export default Products;
