import { ReactNode, useEffect } from "react";
import { Header, Footer, Cart } from "../index";
import { useShowCart } from "./../../hooks/use-Boolean";
import { useToggle } from "usehooks-ts";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [value, toggle] = useToggle();

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      <Header toggle={toggle} />
      {value && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#979797] z-40 opacity-40" />
      )}
      {value && <Cart />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
