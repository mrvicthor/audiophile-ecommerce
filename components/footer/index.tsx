import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#101010]">
      <div className="px-6 h-[40.875rem] flex flex-col text-white items-center">
        <div className="h-[3px] bg-[#d87d4a] w-[6.25rem]" />
        <div className="mt-[3.25rem]">
          <div className="flex flex-col items-center gap-12">
            <div className=" h-[1.5625rem] font-bold text-[1.5625rem]">
              audiophile
            </div>
            <div className="flex flex-col items-center h-[9.25rem] gap-4">
              <a
                href="#"
                className="uppercase font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[2px]"
              >
                home
              </a>
              <a
                href="#"
                className="uppercase font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[2px]"
              >
                headphones
              </a>
              <a
                href="#"
                className="uppercase font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[2px]"
              >
                speakers
              </a>
              <a
                href="#"
                className="uppercase font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[2px]"
              >
                earphones
              </a>
            </div>
          </div>
          <div className="mt-[3rem]">
            <p className="opacity-50 text-[0.9375rem] leading-[1.5625rem] text-center font-medium">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
        </div>
        <div className="mt-[3rem] flex flex-col gap-12">
          <p className=" opacity-50 text-[0.9375rem] leading-[1.5625rem] text-center font-bold">
            Copyright 2022. All rights Reserved
          </p>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="h-[1.5rem] hover:text-[#d87d4a]">
              <FaFacebookSquare size={25} />
            </a>
            <a href="#" className="h-[1.5rem] hover:text-[#d87d4a]">
              <FaTwitter size={25} />
            </a>
            <a href="#" className="h-[1.5rem] hover:text-[#d87d4a]">
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
