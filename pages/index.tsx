import Head from "next/head";
import {
  Banner,
  Products,
  Category,
  Gallery,
  Layout,
  SEO,
} from "../components";

export default function Home() {
  return (
    <div>
      <SEO />
      <Layout>
        <Banner />
        <Products />
        <Category />
        <Gallery />
      </Layout>
    </div>
  );
}
