import { FaBars, FaTimes } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <header className="px-6 h-[91px] md:h-[90px]  bg-[#191919] text-white lg:h-[97px]">
      <div className="py-8 lg:max-w-[69.364rem] lg:mx-auto  lg:border-b-[1px] lg:border-[#979797]">
        <nav className="flex items-center justify-between">
          <div className="lg:hidden">
            <button
              onClick={() => setShowNav(!showNav)}
              className="w-4 h-[15px] cursor-pointer border-[0] outline-0"
              aria-controls="primary__nav"
            >
              <span className="sr-only" aria-expanded="false">
                Menu
              </span>
              {showNav ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="md:mr-auto md:px-10 lg:px-0">
            <a className="h-[25px] font-bold text-lg md:text-xl cursor-pointer hover:text-[#d87d4a]">
              audiophile
            </a>
          </div>
          <ul
            className="primary__nav lg:static lg:inset-0 lg:translate-y-0 lg:bg-transparent lg:px-0 lg:py-0 lg:flex-row lg:max-w-[26.81rem] lg:mr-auto"
            id="primary__nav"
            data-visible={showNav ? "true" : "false"}
          >
            <li className="text-xl font-semibold uppercase tracking-wider text-black lg:text-white lg:text-[0.81rem] hover:text-[#d87d4a] cursor-pointer">
              home
            </li>
            <li className="text-xl font-semibold uppercase tracking-wider text-black lg:text-white lg:text-[0.81rem] hover:text-[#d87d4a] cursor-pointer">
              headphones
            </li>
            <li className="text-xl font-semibold uppercase tracking-wider text-black lg:text-white lg:text-[0.81rem] hover:text-[#d87d4a] cursor-pointer">
              speakers
            </li>
            <li className="text-xl font-semibold uppercase tracking-wider text-black lg:text-white lg:text-[0.81rem] hover:text-[#d87d4a] cursor-pointer">
              earphones
            </li>
          </ul>
          <div>
            <button className="cursor-pointer w-5 h-[23px] border-[0] outline-0">
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
