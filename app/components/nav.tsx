"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import "../globals.css"
import { FiArrowUpRight } from "react-icons/fi";

export default function Nav() {
    const [state, setState] = useState<number>(1);

    useEffect(() => {
        const menu = document.getElementById("menu");

        Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index;
            }
        });

        // if (state == 0) {
        //     menu.style.top="-200%";
        // }

        // if (state == 1) {
        //     menu.style.top="0";
        // }

    }, []);

    return (
        <div className="nav">
            {/* <div className={` ${state == 0 ? "z-10" : "z-100000"} flex justify-between p-16 absolute border top-0 left-0 w-full navbar h-32 bg-black/0 text-white`} >
                <p className="">
                    Elbert Ainstein
                </p>
                {
                    state == 0 ? <p onClick={(ev) => setState(1)}>
                        menu
                    </p> : <p onClick={(ev) => setState(1)}>
                        close
                    </p>
                }
            </div> */}
            { state == 1 ? 
            <div id="menu"  >
                <div id="menu-items">
                    <Link href="/" data-type="link" className=" interactable menu-item">Home</Link>
                    <Link href="/" data-type="link" className=" interactable menu-item">Works</Link>
                    <Link href="/" data-type="link" className=" interactable menu-item">About</Link>
                    <Link href="/" data-type="link" className=" interactable menu-item">Contact me</Link>
                </div>
                <div id="menu-bg-pattern"></div>
                <div id="menu-background-image"></div>
            </div> : null
            }
            
        </div>
    )
}