import Image from "next/image";
import { Product } from "../../model";
import { useWindowSize } from "./../../hooks/use-Window-Size";

interface IProps {
  product: Product;
}
const DetailsGallery = ({ product }: IProps) => {
  const { width } = useWindowSize();
  return (
    <section className="h-[47.25rem] mt-[5.5rem] grid gap-5 md:h-[23rem] md:flex md:gap-[1.125rem] lg:mt-[10rem] lg:h-[37rem]">
      <div className="grid gap-5 md:w-[17.3125rem] lg:w-[27.8125rem] lg:gap-8">
        <div className="relative h-[10.875rem] w-full rounded-md lg:h-[17.5rem]">
          {width !== undefined && (
            <Image
              src={
                width <= 640
                  ? product.gallery.first.mobile
                  : width > 640 && width <= 768
                  ? product.gallery.first.tablet
                  : product.gallery.first.desktop
              }
              fill
              alt={product.slug}
              className="object-cover rounded-md"
            />
          )}
        </div>
        <div className="relative h-[10.875rem] w-full rounded-md lg:h-[17.5rem]">
          {width !== undefined && (
            <Image
              src={
                width <= 640
                  ? product.gallery.second.mobile
                  : width > 640 && width <= 768
                  ? product.gallery.second.tablet
                  : product.gallery.second.desktop
              }
              fill
              alt={product.slug}
              className="object-cover rounded-md"
            />
          )}
        </div>
      </div>
      <div className="relative h-[23rem] w-full rounded-md md:w-[24.6875rem] flex-grow lg:h-[37rem]">
        {width !== undefined && (
          <Image
            src={
              width <= 640
                ? product.gallery.third.mobile
                : width > 640 && width <= 768
                ? product.gallery.third.tablet
                : product.gallery.third.desktop
            }
            fill
            alt={product.slug}
            className="object-cover rounded-md"
          />
        )}
      </div>
    </section>
  );
};

export default DetailsGallery;
