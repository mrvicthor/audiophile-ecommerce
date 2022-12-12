import { FaBars, FaTimes } from "react-icons/fa";
import { Sidebar } from "../index";
import { BsCart3 } from "react-icons/bs";
import { useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

type HeaderProps = {
  style?: string;
  toggle?: () => void;
};

const Header = ({ style, toggle }: HeaderProps) => {
  const [showNav, setShowNav] = useCycle(false, true);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [scrollValue, setScrollValue] = useState<number>(0);

  const router = useRouter();

  const showNavbar = () => {
    if (window.scrollY > scrollValue) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setScrollValue(window.scrollY);
  };

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);

  useEffect(() => {
    window.addEventListener("scroll", showNavbar);
    return () => window.removeEventListener("scroll", showNavbar);
  }, [scrollValue]);

  return (
    <header
      className={`${showHeader ? "top-0" : ""} ${
        style ? style : "bg-[#191919]"
      } px-6 h-[91px] md:h-[90px] border-b-[1px] border-[#979797]  text-white md:border-[0] lg:h-[97px] sticky w-full z-50`}
    >
      <div className="py-8 lg:max-w-[69.364rem] lg:mx-auto  md:border-b-[1px] md:border-[#979797]">
        <nav className="flex items-center justify-between">
          <div className="lg:hidden">
            <button
              onClick={() => setShowNav()}
              className="w-4 h-[15px] cursor-pointer border-[0] outline-0 z-[10000]"
              aria-controls="primary__nav"
            >
              <span className="sr-only" aria-expanded="false">
                Menu
              </span>
              {showNav ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {showNav && <div className="my_overlay" />}
          <Sidebar showNav={showNav} />

          <div className="md:mr-auto md:px-10 lg:px-0 lg:mr-0">
            <Link
              href="/"
              className="h-[25px] font-bold text-lg md:text-xl cursor-pointer hover:text-[#d87d4a]"
            >
              <Image
                src="/images/audiophile2.svg"
                width={150}
                height={150}
                alt="logo"
                className="hover:text-[#d87d4a]"
              />
            </Link>
          </div>
          <ul
            className="hidden primary__nav lg:flex lg:gap-[2.125rem] lg:max-w-[26.81rem] lg:mr-[11rem]"
            id="primary__nav"
            data-visible={showNav ? "true" : "false"}
          >
            <li
              className={`${
                router.pathname === "/" ? "active" : ""
              } text-xl font-semibold uppercase tracking-wider text-black lg:text-white lg:text-[0.81rem] hover:text-[#d87d4a] cursor-pointer`}
            >
              <Link href="/">home</Link>
            </li>
            <li
              className={`${
                router.pathname === "/headphones" ? "active" : ""
              } text-xl font-semibold uppercase tracking-wider text-black lg:text-white lg:text-[0.81rem] hover:text-[#d87d4a] cursor-pointer`}
            >
              <Link href="/headphones">headphones</Link>
            </li>
            <li
              className={`${
                router.pathname === "/speakers" ? "active" : ""
              } text-xl font-semibold uppercase tracking-wider text-black lg:text-white lg:text-[0.81rem] hover:text-[#d87d4a] cursor-pointer`}
            >
              <Link href="/speakers">speakers</Link>
            </li>
            <li
              className={`${
                router.pathname === "/earphones" ? "active" : ""
              } text-xl font-semibold uppercase tracking-wider text-black lg:text-white lg:text-[0.81rem] hover:text-[#d87d4a] cursor-pointer`}
            >
              <Link href="/earphones">earphones</Link>
            </li>
          </ul>
          <div>
            <button
              className="cursor-pointer w-5 h-[23px] border-[0] outline-0"
              onClick={toggle}
            >
              <span className="sr-only" aria-expanded="false">
                Cart
              </span>
              <BsCart3 />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
