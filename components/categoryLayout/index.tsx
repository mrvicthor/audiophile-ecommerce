import { Header, Products, Footer, Gallery } from "../index";
import { ReactNode } from "react";

interface TitleProps {
  title: string;
  children: ReactNode;
}

const CategoryLayout = ({ title, children }: TitleProps) => {
  return (
    <>
      <Header style="bg-[#000000]" />
      <header className="h-[6.3125rem] bg-[#000000] md:h-[15.375rem]">
        <h1 className="text-[1.5625rem] text-white font-bold uppercase leading-[2.390rem] text-center pt-8 tracking-[2px] md:pt-[6.625rem] md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[1.43px]">
          {title}
        </h1>
      </header>
      {children}
      <div className="pt-[4rem] md:pt-[7.5rem] lg:pt-[10rem]">
        <Products />
      </div>
      <Gallery />
      <Footer />
    </>
  );
};

export default CategoryLayout;
