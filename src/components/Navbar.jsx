import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
    className={`
    ${styles.paddingX} w-full flex 
    items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
        >
          <img src={logo} alt="logo" className="bg-white/10 w-9 h-9 object-contain" />
          <p className="text-white font-bold cursor-pointer flex text-[18px]">
            Elbert Ainstein &nbsp;
            <span className="sm:block hidden">|&nbsp; My online Name</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
            key={link.id} 
            className={`${active === link.title ? "text-white" : "text-secondary"}
            hover:text-white text-[18px] font-medium cursor-pointer 
            transition duration-200
            `}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden navbar bg-primary justify-end">
          <div className="flex-none justify-end dropdown">
            <label tabIndex={0} className="btn btn-square btn-ghost">
              <img 
              src={toggle ? close : menu} 
              alt="menu" 
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}  
              /> 
              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute bg-black rounded-lg top-20`}>
                <ul tabIndex={0} className="menu menu-compact list-none flex justify-end items-start flex-1 flex-col gap-4">
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
                </ul>
              </div>       
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar