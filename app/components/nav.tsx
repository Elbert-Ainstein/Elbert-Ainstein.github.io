"use client"

import Link from "next/link";
import { useEffect } from "react";
import "../globals.css"

export default function Nav() {

    useEffect(() => {
        const menu = document.getElementById("menu");

        Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index;
            }
        });

    }, []);

    return (
        <div id="menu" >
            <div id="menu-items">
                <Link href="/" className="menu-item">Home</Link>
                <Link href="/" className="menu-item">Works</Link>
                <Link href="/" className="menu-item">About</Link>
                <Link href="/" className="menu-item">Contact me</Link>
            </div>
            <div id="menu-bg-pattern"></div>
            <div id="menu-background-image"></div>
        </div>
    )
}