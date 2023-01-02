import {
  Layout,
  Button,
  Products,
  Gallery,
  DetailsPageBanner,
  Features,
  DetailsGallery,
  Suggestion,
} from "../../components";
import { data } from "../../data";
import { Product } from "../../model";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import {
  increaseOrderQuantityByOne,
  decreaseOrderQuantityByOne,
} from "../../features/products/productsSlice";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface DetailsPageProps {
  product: Product;
}

// const data = useAppSelector((state) => state.products.products);
console.log(data);
const DetailsPage = ({ product }: DetailsPageProps) => {
  const router = useRouter();

  return (
    <Layout>
      <section className="px-6 overflow-hidden">
        <div className="pt-4 lg:pt-[4.9375rem] lg:max-w-[69.364rem] lg:mx-auto">
          <Button
            title="go back"
            handleClick={() => router.back()}
            style="capitalize text-[0.9375rem] font-medium text-[#000000] leading-[1.5625rem] opacity-50"
          />
          <DetailsPageBanner product={product} />
          <Features
            features={product.features}
            featuresCont={product.featuresCont}
            includes={product.includes}
          />
          <DetailsGallery product={product} />
          <Suggestion product={product} />
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
  const product = data.find((item) => item.slug === params.slug);

  return {
    props: { product },
  };
}

export default DetailsPage;
