'use client';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const colors = [
    "#FF5F00",
];

export default function BlurryCursor({isHovered}) {
    const size = isHovered ? 250 : 130;
    const delay = isHovered ? 0.015 : 0.005;
    const circles = useRef([]);
    const mouse = useRef({x: 0, y: 0});
    const delayedMouse = useRef({x: 0, y: 0});
    
    const lerp = (x, y, a) => x * (1 - a) + y * a

    const moveCircle = (x, y) => {
        circles.current.forEach((circle, i) => {
            if (circle) { 
                gsap.set(circle, {x, y, xPercent: -50, yPercent: -50})
            }
        })  
    }

    const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075)
        }
        moveCircle(delayedMouse.current.x, delayedMouse.current.y);
        window.requestAnimationFrame(animate);
    }

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.current = {
            x: clientX,
            y: clientY
        }
    }

    useEffect(() => {
        animate();
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        }
    }, [])

    return (
        <>  
        { 
        colors.map((color, i, array) => {
            return <div
            ref={ref => {
                if (ref) circles.current[i] = ref;
            }}
            key={color}
            className='fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference'
            style={{
                backgroundColor: color,
                width: size,
                height: size,
                filter: `blur(${isHovered ? 25 : 12}px)`,
                transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, transform ${(array.length - i) * delay}s ease-out opacity-6`,
                 zIndex: 10 - i
            }}
            />
        })
        }
        </>
    )
}