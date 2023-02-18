"use client"

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "../globals.css"
import { FiArrowUpRight } from "react-icons/fi";

export default function Nav() {
    const [state, setState] = useState(false);

    useEffect(() => {
        const menu = document.getElementById("menu");

        Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index;
            }
        });
        

    }, []);

    const nav = useRef();
    const navPattern = useRef();
    const openNav = () => {
        nav.current.style.transform = "none";
        nav.current.style.transition="opacity 800ms ease-in-out";
        nav.current.style.opacity="1";
        setState(true);
    }
    const closeNav = () => {
        nav.current.style.transform = "translateY(-100%)";
        nav.current.style.transition= "transform 800ms ease-in, opacity 500ms ease-in-out";
        nav.current.style.opacity="0";
        navPattern.current.style.opacity="0";
        navPattern.current.style.transition="transform 1600ms ease-in, opacity 200ms ease-out, background-size 800ms ease, background-position 800ms ease"
        setState(false);
    }

    return (
        <>
            <div className="nav">
                <Link href="/" className="btn cursor-none btn-ghost z-10 absolute left-0 pl-24 pt-20 ">
                    <p className="text-white">
                        Elbert Ainstein
                    </p>
                </Link>
                <div className="z-10 w-20 absolute cursor-none top-0 right-0 mr-24 pt-16 text-white">
                    {
                        state == false ? <p 
                        onClick={
                            openNav
                        }
                        // onClick={(ev) => setState(true)} 
                        className=" btn z-10 btn-ghost cursor-none rounded-none hover:bg-white/10">
                            menu
                        </p> : <p 
                        // onClick={(ev) => setState(false)}
                        onClick={closeNav} 
                        className=" btn btn-ghost z-10 cursor-none rounded-none hover:bg-white/10">
                            close
                        </p>
                    }
                </div>
        
                {/* { state == 1 ?  */}
                    <div id="menu" className={`-top-full delay-200`} ref={nav}>
                        <div id="menu-items" className="font-poppins">
                            <Link href="/" data-type="link" className=" interactable menu-item font-poppins">Home</Link>
                            <Link href="/" data-type="link" className=" interactable menu-item font-nova">Works</Link>
                            <Link href="/" data-type="link" className=" interactable menu-item">About</Link>
                            <Link href="/" data-type="link" className=" interactable menu-item">Contact me</Link>
                        </div>
                        <div id="menu-bg-pattern" ref={navPattern}></div>
                        <div id="menu-background-image"></div>
                    </div> 
                    {/* : null */}
                {/* } */}
                
            </div>
        </>
    )
}