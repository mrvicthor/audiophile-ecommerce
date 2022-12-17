import { Header, Products, Footer, Gallery, Cart } from "../index";
import { ReactNode, useEffect } from "react";
import { useToggle } from "usehooks-ts";

interface TitleProps {
  title: string;
  children: ReactNode;
}

const CategoryLayout = ({ title, children }: TitleProps) => {
  const [value, toggle] = useToggle();

  useEffect(() => {
    if (value) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [value]);

  return (
    <section className="">
      <Header style="bg-[#000000]" toggle={toggle} />
      {value && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#979797] z-40 opacity-40" />
      )}
      {value && <Cart />}
      <header className="h-[6.3125rem] bg-[#000000] md:h-[15.375rem]">
        <h1 className="text-[1.5625rem] text-white font-bold uppercase leading-[2.390rem] text-center pt-8 tracking-[2px] md:pt-[6.625rem] md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[1.43px]">
          {title}
        </h1>
      </header>
      {children}
      <div className="pt-[2.5rem] lg:pt-[5rem] overflow-hidden">
        <Products />
      </div>
      <div className="mt-[7.5rem] lg:mt-[10rem]">
        <Gallery />
      </div>
      <Footer />
    </section>
  );
};

export default CategoryLayout;
