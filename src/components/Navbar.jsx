import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, s1, s2, s3 } from "../assets"; // Add your images here

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Malmi Withanage &nbsp;
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="flex gap-4">
            {/* Add your image links here */}
            <a href="https://web.facebook.com/people/Malmi-Withanage/100075277897834/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
              <img src={s1} alt="s1" className="w-8 h-8 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/malmi-withanage-ab3179265/?originalSubdomain=lk" target="_blank" rel="noopener noreferrer">
              <img src={s2} alt="s2" className="w-8 h-8 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/mei_nyx_/" target="_blank" rel="noopener noreferrer">
              <img src={s3} alt="s3" className="w-8 h-8 cursor-pointer" />
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Add mobile version of images here */}
              <li className="flex gap-4 mt-4">
                <a href="https://example1.com" target="_blank" rel="noopener noreferrer">
                  <img src={s1} alt="s1" className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://example2.com" target="_blank" rel="noopener noreferrer">
                  <img src={s2} alt="s2" className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://example3.com" target="_blank" rel="noopener noreferrer">
                  <img src={s3} alt="s3" className="w-8 h-8 cursor-pointer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
