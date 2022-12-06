import Image from "next/image";
import { Product } from "../../model";

interface IProps {
  product: Product;
}
const DetailsGallery = ({ product }: IProps) => {
  return (
    <section className="h-[47.25rem] mt-[5.5rem] grid gap-5 md:h-[23rem] md:flex md:gap-[1.125rem] lg:mt-[10rem] lg:h-[37rem]">
      <div className="grid gap-5 md:w-[17.3125rem] lg:w-[27.8125rem] lg:gap-8">
        <div className="relative h-[10.875rem] w-full rounded-md lg:h-[17.5rem]">
          <Image
            src={product.gallery.first.mobile}
            fill
            alt={product.slug}
            className="object-cover rounded-md md:hidden"
          />
          <Image
            src={product.gallery.first.tablet}
            fill
            alt={product.slug}
            className="object-cover hidden rounded-md md:block lg:hidden"
          />
          <Image
            src={product.gallery.first.desktop}
            fill
            alt={product.slug}
            className="object-cover hidden rounded-md lg:block"
          />
        </div>
        <div className="relative h-[10.875rem] w-full rounded-md lg:h-[17.5rem]">
          {" "}
          <Image
            src={product.gallery.second.mobile}
            fill
            alt={product.slug}
            className="object-cover rounded-md md:hidden"
          />
          <Image
            src={product.gallery.second.tablet}
            fill
            alt={product.slug}
            className="object-cover hidden rounded-md md:block lg:hidden"
          />
          <Image
            src={product.gallery.second.desktop}
            fill
            alt={product.slug}
            className="object-cover hidden rounded-md lg:block"
          />
        </div>
      </div>
      <div className="relative h-[23rem] w-full rounded-md md:w-[24.6875rem] flex-grow lg:h-[37rem]">
        {" "}
        <Image
          src={product.gallery.third.mobile}
          fill
          alt={product.slug}
          className="object-cover rounded-md md:hidden"
        />
        <Image
          src={product.gallery.third.tablet}
          fill
          alt={product.slug}
          className="object-cover rounded-md hidden md:block lg:hidden"
        />
        <Image
          src={product.gallery.third.desktop}
          fill
          alt={product.slug}
          className="object-cover rounded-md hidden lg:block"
        />
      </div>
    </section>
  );
};

export default DetailsGallery;
