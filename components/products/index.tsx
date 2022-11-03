import { Product } from "../index";

const Products = () => {
  return (
    <div className="mt-20 px-6 flex flex-col gap-4">
      <Product imagePath="/images/image-header-mobile.png" title="headphones" />
      <Product imagePath="/images/image-speaker-mobile.png" title="speakers" />
      <Product imagePath="/images/image-earbud-mobile.png" title="earbud" />
    </div>
  );
};
export default Products;
