import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-[#101010]">
      <div className="px-6 h-[40.875rem] flex flex-col text-white items-center md:items-start md:h-[25rem] lg:max-w-[69.364rem] lg:mx-auto lg:h-[22.8125rem] lg:relative overflow-hidden">
        <div className="h-[3px] bg-[#d87d4a] w-[6.25rem]" />
        <div className="mt-[3.25rem] md:mt-[3.75rem] w-full">
          <div className="flex flex-col items-center gap-12 md:items-start md:gap-8 lg:flex-row lg:w-full lg:justify-between">
            <div className=" h-[1.5625rem] font-bold text-[1.5625rem]">
              <Image
                src="/images/audiophile2.svg"
                width={150}
                height={150}
                alt="logo"
              />
            </div>
            <div className="flex flex-col items-center h-[9.25rem] gap-4 md:flex-row md:h-[1.5625rem] footer__link">
              <Link
                href="/"
                className={`${
                  router.pathname === "/" ? "active" : "null"
                } uppercase font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[2px] hover:text-[#d87d4a]`}
              >
                home
              </Link>
              <Link
                href="/headphones"
                className={`${
                  router.pathname === "/headphones" ? "active" : "null"
                } uppercase font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[2px] hover:text-[#d87d4a]`}
              >
                headphones
              </Link>
              <Link
                href="/speakers"
                className={`${
                  router.pathname === "/speakers" ? "active" : "null"
                } uppercase font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[2px] hover:text-[#d87d4a]`}
              >
                speakers
              </Link>
              <Link
                href="/earphones"
                className={`${
                  router.pathname === "/earphones" ? "active" : "null"
                } uppercase font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[2px] hover:text-[#d87d4a]`}
              >
                earphones
              </Link>
            </div>
          </div>
          <div className="mt-[3rem] lg:w-[33.75rem]">
            <p className="opacity-50 text-[0.9375rem] leading-[1.5625rem] text-center font-medium md:text-left">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
        </div>
        <div className="mt-[3rem] flex flex-col gap-12 md:flex-row md:justify-between md:w-full">
          <p className=" opacity-50 text-[0.9375rem] leading-[1.5625rem] text-center font-bold">
            Copyright 2022. All rights Reserved
          </p>
          <div className="flex items-center justify-center gap-6 md:items-end lg:absolute lg:top-[226px] lg:right-[1rem]">
            <a
              href="https://www.facebook.com/outtaspace1"
              target="_blank"
              className="h-[1.5rem] hover:text-[#d87d4a]"
              role="link"
              aria-label="connect with me on facebook"
            >
              {" "}
              <span
                className="sr-only"
                aria-label="Facebook page"
                role="region"
              >
                Facebook
              </span>
              <FaFacebookSquare size={25} />
            </a>
            <a
              href="https://twitter.com/eva_skillz"
              target="_blank"
              className="h-[1.5rem] hover:text-[#d87d4a]"
              role="link"
              aria-label="connect with me on twitter"
            >
              {" "}
              <span className="sr-only" aria-label="Twitter page" role="region">
                Twitter
              </span>
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.instagram.com/mrvic_thor/"
              target="_blank"
              className="h-[1.5rem] hover:text-[#d87d4a]"
              role="link"
              aria-label="connect with me on instagram"
            >
              <span
                className="sr-only"
                aria-label="Instagram page"
                role="region"
              >
                Instagram
              </span>
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
