import { ReactNode, useState } from "react";
import { Header, Footer, Cart } from "../index";
import { useCart } from "../../store";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { showCart } = useCart();

  return (
    <>
      <Header />
      {showCart && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#979797] z-40 opacity-40" />
      )}
      {showCart && <Cart />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
