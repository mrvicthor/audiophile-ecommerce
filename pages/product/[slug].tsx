import { Layout, Button } from "../../components";
import { data } from "../../data";
import Link from "next/link";
import Image from "next/image";
const DetailsPage = ({ product }: { product: any }) => {
  const strArr = product.name.split(" ");
  return (
    <Layout>
      <section className="px-6 overflow-hidden">
        <div className="pt-4">
          <Link
            href="/"
            className="capitalize text-[0.9375rem] font-medium text-[#000000] leading-[1.5625rem]"
          >
            go back
          </Link>
          <div className="mt-[1.5rem] grid gap-8">
            <div className="relative h-[20.4375rem] w-full">
              <Image
                src={product.image?.mobile}
                fill
                alt={product.name}
                className="object-cover"
              />
            </div>
            <article className="flex flex-col gap-[1.5rem]">
              {product.new && (
                <p className="font-normal text-[#d87d4a] text-[0.875rem] leading-[1.195rem] tracking-[0.625rem] uppercase">
                  new product
                </p>
              )}
              <h1 className="uppercase text-[1.75rem] leading-[2.390rem] font-bold tracking-[1px] text-[#000000]">
                {strArr.length > 2
                  ? `${strArr[0]} ${strArr[1]} ${strArr[2]}`
                  : `${strArr[0]}`}{" "}
                <span className="block">{strArr.slice(-1)}</span>
              </h1>
              <p className="text-left text-[#000000] opacity-50">
                {product.description}
              </p>
              <p className="text-[1.125rem] leading-[1.5369rem] tracking-[1.29px] font-bold text-[#000000] uppercase">
                $ {product.price}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-[0.4375rem]">
                <button className="bg-[#f1f1f1] h-[3rem]  text-[#000000] uppercase">
                  1
                </button>
                <Button
                  title="add to cart"
                  style="bg-[#d87d4a] h-[3rem]  text-white hover:bg-[#fbaf85] uppercase"
                  handleClick={() => console.log("Add to cart")}
                />
              </div>
            </article>
          </div>
          <section className="mt-[5.5rem]">
            <h2 className="font-bold text-[#000000] leading-[2.25rem] tracking-[0.86px] text-[1.5rem] uppercase">
              features
            </h2>
            <p className="font-medium leading-[1.5rem] text-[0.9375rem] text-[#000000] opacity-50 mt-6">
              {product.features}
            </p>
            <p className="font-medium leading-[1.5rem] text-[0.9375rem] text-[#000000] opacity-50 mt-6">
              {product.featuresCont}
            </p>
          </section>
          <section className="mt-[5.5rem] h-[13.5625rem]">
            <h3 className="text-[#000000] leading-[2.25rem] font-bold tracking-[0.86px] text-[1.5rem] uppercase">
              in the box
            </h3>
          </section>
        </div>
      </section>
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
