import { ReactNode, useEffect } from "react";
import { Header, Footer, Cart } from "../index";
import { useToggle } from "usehooks-ts";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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
    <>
      <Header toggle={toggle} />
      {value && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#979797] z-40 opacity-40" />
      )}
      {value && <Cart />}
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
