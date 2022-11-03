import { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiBigcartel } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  let pcNav =
    "md:flex-row md:gap-8 md:text-white md:text-[15px] md:font-medium md:static md:translate-y-0 md:bg-[#181818] md:h-auto";

  let toggleNav =
    `absolute h-screen w-full top-0 left-0 flex flex-col items-center justify-center bg-[#fff] z-40 uppercase text-[#181818] translate-y-[-100%] transition-all ${pcNav}`;
  
  let toggleListItem =
    "border-t-[1px] border-[#eee] border-solid w-full text-center py-4";

  return (
    <nav className="flex items-center justify-between px-[2.5%] h-12 bg-[#181818]">
      <div>
        <NavLink to="/">
          <SiBigcartel className="text-white"/>
        </NavLink>
      </div>
      <div>
        <ul className={toggle ? `${toggleNav} translate-y-0` : toggleNav}>
          <li className={toggle ? toggleListItem : ""}>
            <NavLink to="/" onClick={() => setToggle(false)}>
              home
            </NavLink>
          </li>
          <li className={toggle ? toggleListItem : ""}>
            <NavLink to="about" onClick={() => setToggle(false)}>
              about
            </NavLink>
          </li>
          <li className={toggle ? toggleListItem : ""}>
            <NavLink to="product" onClick={() => setToggle(false)}>
              product
            </NavLink>
          </li>
          <li className={toggle ? toggleListItem : ""}>
            <NavLink to="contact" onClick={() => setToggle(false)}>
              contact
            </NavLink>
          </li>
          <li
            className={
              toggle
                ? "border-t-[1px] border-b-[1px] border-[#eee] border-solid w-full flex justify-center py-4"
                : ""
            }
          >
            <NavLink to="cart" onClick={() => setToggle(false)}>
              <CgShoppingCart className="h-5 w-5 mt-[-3px]" />
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex md:hidden">
        <div
          className={toggle ? "hidden" : "z-50"}
          onClick={() => setToggle(true)}
        >
          <GiHamburgerMenu className="text-white h-6 w-6" />
        </div>

        <div
          className={toggle ? "z-50" : "hidden"}
          onClick={() => setToggle(false)}
        >
          <IoClose className="text-[#000] h-8 w-8" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
