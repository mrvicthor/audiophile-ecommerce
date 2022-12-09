import { Button } from "../";
import { useRouter } from "next/router";
import Image from "next/image";
import { Product } from "../../model";
import { useWindowSize } from "./../../hooks/use-Window-Size";

interface SuggestProps {
  product: Product;
}

const Suggestion = ({ product }: SuggestProps) => {
  const { width } = useWindowSize();
  const router = useRouter();
  return (
    <section className="mt-[7.5rem] h-[61.4375rem] md:h-[35rem] lg:mt-[10rem]">
      <h4 className="font-bold text-2xl leading-9 text-center text-[#000000] uppercase">
        you may also like
      </h4>
      <div className="mt-[2.5rem] grid gap-[3.5rem] md:grid-cols-3 md:gap-[0.6875rem] md:mt-[3.5rem]">
        <div className="h-[16.5625rem] md:h-[29.4375rem] lg:h-[35.6875rem]">
          <div className="relative h-[7.5rem] rounded-md md:h-[19.875rem]">
            {width !== undefined && (
              <Image
                src={
                  width <= 640
                    ? product.others[0].image.mobile
                    : width > 640 && width <= 768
                    ? product.others[0].image.tablet
                    : product.others[0].image.desktop
                }
                fill
                alt={product.others[0].slug}
                className="object-cover rounded-md"
              />
            )}
          </div>
          <div className="mt-8 flex flex-col items-center gap-8">
            <h5 className="uppercase font-bold text-2xl leading-8 tracking-[1.71px] text-[#000000]">
              {product.others[0].name}
            </h5>
            <Button
              title="see product"
              style="h-[48px] text-white bg-[#d87d4a] w-[160px] uppercase hover:bg-[#fbaf85]"
              handleClick={() =>
                router.push({
                  pathname: "/product/[slug]",
                  query: { slug: product.others[0].slug },
                })
              }
            />
          </div>
        </div>
        <div className="h-[16.5625rem]">
          <div className="relative h-[7.5rem] rounded-md md:h-[19.875rem]">
            {width !== undefined && (
              <Image
                src={
                  width <= 640
                    ? product.others[1].image.mobile
                    : width > 640 && width <= 768
                    ? product.others[1].image.tablet
                    : product.others[1].image.desktop
                }
                fill
                alt={product.others[1].slug}
                className="object-cover rounded-md"
              />
            )}
          </div>
          <div className="mt-8 flex flex-col items-center gap-8">
            <h5 className="uppercase font-bold text-2xl leading-8 tracking-[1.71px] text-[#000000]">
              {product.others[1].name}
            </h5>
            <Button
              title="see product"
              style="h-[48px] text-white bg-[#d87d4a] w-[160px] uppercase hover:bg-[#fbaf85]"
              handleClick={() =>
                router.push({
                  pathname: "/product/[slug]",
                  query: { slug: product.others[1].slug },
                })
              }
            />
          </div>
        </div>
        <div className="h-[16.5625rem]">
          <div className="relative h-[7.5rem] rounded-md md:h-[19.875rem]">
            {width !== undefined && (
              <Image
                src={
                  width <= 640
                    ? product.others[2].image.mobile
                    : width > 640 && width <= 768
                    ? product.others[2].image.tablet
                    : product.others[2].image.desktop
                }
                fill
                alt={product.others[2].slug}
                className="object-cover rounded-md"
              />
            )}
          </div>
          <div className="mt-8 flex flex-col items-center gap-8">
            <h5 className="uppercase font-bold text-2xl leading-8 tracking-[1.71px] text-[#000000]">
              {product.others[2].name}
            </h5>
            <Button
              title="see product"
              style="h-[48px] text-white bg-[#d87d4a] w-[160px] uppercase hover:bg-[#fbaf85]"
              handleClick={() =>
                router.push({
                  pathname: "/product/[slug]",
                  query: { slug: product.others[2].slug },
                })
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suggestion;
