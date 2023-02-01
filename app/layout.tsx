"use client"
import './globals.css';
import { useEffect, useRef, useState } from 'react';
import Nav from './components/nav';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const ref = useRef(null);

  useEffect(()=> {
    const el2 = ref.current;
    console.log(el2);

    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    window.addEventListener("mousemove", (e) => {
      document.body.style.cursor = 'none';
      
      const posX = e.clientX;
      const posY = e.clientY;
  
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
  
      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;

      cursorOutline?.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, {duration: 500, fill: "forwards"});
      
    });

  },[]);

  const [state, setState] = useState<number>(0); 

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="opacity-100 relative">
        <div className="cursor-dot" data-cursor-dot></div>
        <div className="cursor-outline" data-cursor-outline></div>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
