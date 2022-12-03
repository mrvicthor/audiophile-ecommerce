import { Layout, Button, Products, Gallery } from "../../components";
import { data } from "../../data";
import Image from "next/image";
import { useRouter } from "next/router";
const DetailsPage = ({ product }: { product: any }) => {
  const router = useRouter();
  const toUSDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 4,
  });
  console.log(product);
  const strArr = product.name.split(" ");
  return (
    <Layout>
      <section className="px-6 overflow-hidden">
        <div className="pt-4 lg:pt-[4.9375rem] lg:max-w-[69.364rem] lg:mx-auto">
          <Button
            title="go back"
            handleClick={() => router.back()}
            style="capitalize text-[0.9375rem] font-medium text-[#000000] leading-[1.5625rem] opacity-50"
          />

          <div className="mt-[1.5rem] grid gap-8 md:h-[30rem] md:grid-cols-2 rounded-md lg:mt-[3.5rem] lg:h-[35rem] lg:gap-[7.8125rem]">
            <div className="relative h-[20.4375rem] w-full md:h-[30rem] rounded-md md:w-[17.5625rem] lg:h-[35rem] lg:w-[33.75rem]">
              <Image
                src={product.image?.mobile}
                fill
                alt={product.name}
                className="object-cover md:hidden rounded-md"
              />
              <Image
                src={product.image.tablet}
                fill
                alt={product.name}
                className="object-cover hidden md:block md:rounded-md lg:hidden"
              />
              <Image
                src={product.image.desktop}
                fill
                alt={product.name}
                className="object-cover hidden rounded-md lg:block"
              />
            </div>
            <article className="flex flex-col gap-[1.5rem] md:justify-center">
              {product.new && (
                <p className="font-normal text-[#d87d4a] text-[0.875rem] leading-[1.195rem] tracking-[0.625rem] uppercase">
                  new product
                </p>
              )}
              <h1 className="uppercase text-[1.75rem] leading-[2.390rem] font-bold tracking-[1px] text-[#000000] lg:text-[2.5rem]">
                {strArr.length > 3
                  ? `${strArr[0]} ${strArr[1]} ${strArr[2]}`
                  : `${strArr[0]}`}{" "}
                <span className="block">{strArr.slice(-1)}</span>
              </h1>
              <p className="text-left text-[#000000] opacity-50">
                {product.description}
              </p>
              <p className="text-[1.125rem] leading-[1.5369rem] tracking-[1.29px] font-bold text-[#000000] uppercase">
                {toUSDollar.format(product.price)}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-[0.4375rem] lg:w-[18.5rem]">
                <button className="bg-[#f1f1f1] h-[3rem]  text-[#000000] uppercase lg:w-[7.5rem]">
                  {product.quantity}
                </button>
                <Button
                  title="add to cart"
                  style="bg-[#d87d4a] h-[3rem] text-white hover:bg-[#fbaf85] uppercase lg:w-[10rem]"
                  handleClick={() => console.log("Add to cart")}
                />
              </div>
            </article>
          </div>
          <section className="mt-[5.5rem] md:mt-[7.5rem] lg:mt-[10rem] lg:flex lg:gap-[7.8125rem]">
            <div className="lg:w-[39.6875rem]">
              <h2 className="font-bold text-[#000000] leading-[2.25rem] tracking-[0.86px] text-[1.5rem] uppercase md:text-[2rem] md:tracking-[1.14px]">
                features
              </h2>
              <p className="font-medium leading-[1.5rem] text-[0.9375rem] text-[#000000] opacity-50 mt-6 md:mt-8">
                {product.features}
              </p>
              <p className="font-medium leading-[1.5rem] text-[0.9375rem] text-[#000000] opacity-50 mt-6">
                {product.featuresCont}
              </p>
            </div>
            <div className="mt-[5.5rem] h-[13.5625rem] md:grid md:grid-cols-2 lg:grid-cols-1 lg:mt-0">
              <h3 className="text-[#000000] leading-[2.25rem] font-bold tracking-[0.86px] text-[1.5rem] md:text-[2rem] uppercase">
                in the box
              </h3>
              <ul className="grid gap-2 mt-[1.4375rem] md:mt-0 lg:mt-8">
                {product.includes.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="leading-[1.5625rem] text-[#000000] font-medium capitalize"
                  >
                    <span className="text-[#d87d4a] text-[0.9375rem]  font-bold mr-6">
                      {item.quantity}x
                    </span>{" "}
                    <span className="opacity-50">{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
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
          <section className="mt-[7.5rem] h-[61.4375rem] md:h-[35rem] lg:mt-[10rem]">
            <h4 className="font-bold text-2xl leading-9 text-center text-[#000000] uppercase">
              you may also like
            </h4>
            <div className="mt-[2.5rem] grid gap-[3.5rem] md:grid-cols-3 md:gap-[0.6875rem] md:mt-[3.5rem]">
              <div className="h-[16.5625rem] md:h-[29.4375rem] lg:h-[35.6875rem]">
                <div className="relative h-[7.5rem] rounded-md md:h-[19.875rem]">
                  <Image
                    src={product.others[0].image.mobile}
                    fill
                    alt={product.others[0].slug}
                    className="object-cover rounded-md md:hidden"
                  />
                  <Image
                    src={product.others[0].image.tablet}
                    fill
                    alt={product.others[0].slug}
                    className="object-cover rounded-md hidden md:block lg:hidden"
                  />{" "}
                  <Image
                    src={product.others[0].image.desktop}
                    fill
                    alt={product.others[0].slug}
                    className="object-cover rounded-md hidden lg:block"
                  />
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
                  <Image
                    src={product.others[1].image.mobile}
                    fill
                    alt={product.others[1].slug}
                    className="object-cover rounded-md md:hidden"
                  />
                  <Image
                    src={product.others[1].image.tablet}
                    fill
                    alt={product.others[1].slug}
                    className="object-cover rounded-md hidden md:block lg:hidden"
                  />
                  <Image
                    src={product.others[1].image.desktop}
                    fill
                    alt={product.others[1].slug}
                    className="object-cover rounded-md hidden lg:block"
                  />
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
                  <Image
                    src={product.others[2].image.mobile}
                    fill
                    alt={product.others[2].slug}
                    className="object-cover rounded-md"
                  />{" "}
                  <Image
                    src={product.others[2].image.tablet}
                    fill
                    alt={product.others[2].slug}
                    className="object-cover rounded-md hidden md:block lg:hidden"
                  />{" "}
                  <Image
                    src={product.others[2].image.desktop}
                    fill
                    alt={product.others[2].slug}
                    className="object-cover rounded-md hidden lg:block"
                  />
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
        </div>
      </section>
      <div className="pt-[6rem]">
        <Products />
      </div>
      <div className="mt-[7.5rem] lg:mt-[10rem]">
        <Gallery />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const products = data;

  return {
    paths: products.map((product) => {
      return { params: { slug: product.slug } };
    }),
    fallback: false,
  };
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const result = data.filter((item) => item.slug === params.slug);
  const product = result[0];
  return {
    props: { product },
  };
}

export default DetailsPage;
