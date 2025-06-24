'use client';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useCursor } from '@/contexts/CursorContext';

const colors = [
    "#FF5F00",
];

const cursorConfigs = {
  default: {
    size: 130,
    blur: 12,
    delay: 0.005,
    color: "#FF5F00"
  },
  hover: {
    size: 300,
    blur: 20,
    delay: 0.015,
    color: "#FF5F00"
  },
//   button: {
//     size: 300,
//     blur: 15,
//     delay: 0.012,
//     color: "#FF5F00"
//   },
//   text: {
//     size: 300,
//     blur: 20,
//     delay: 0.002,
//     color: "#FF5F00"
//   },
//   link: {
//     size: 300,
//     blur: 25,
//     delay: 0.018,
//     color: "#FF5F00"
//   }
};

export default function BlurryCursor() {
    const { cursorState, cursorText } = useCursor();
    const currentConfig = cursorConfigs[cursorState] || cursorConfigs.default;
    
    const circles = useRef([]);
    const mouse = useRef({x: 0, y: 0});
    const delayedMouse = useRef({x: 0, y: 0});
    const textRef = useRef(null);
    
    const lerp = (x, y, a) => x * (1 - a) + y * a

    const moveCircle = (x, y) => {
        circles.current.forEach((circle, i) => {
            if (circle) { 
                gsap.set(circle, {x, y, xPercent: -50, yPercent: -50})
            }
        })
        
        if (textRef.current && cursorText) {
            gsap.set(textRef.current, {
                x: x + 15,
                y: y - 30,
                xPercent: -50,
                yPercent: -50
            });
        }
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
            className='fixed top-0 left-0 rounded-full pointer-events-none mix-blend-screen'
            style={{
                backgroundColor: currentConfig.color,
                width: currentConfig.size,
                height: currentConfig.size,
                filter: `blur(${currentConfig.blur}px)`,
                transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, background-color 0.3s ease-out, transform ${(array.length - i) * currentConfig.delay}s ease-out`,
                zIndex: 10 - i
            }}
            />
        })
        }
        
        {/* Optional text display */}
        {cursorText && (
            <div
                ref={textRef}
                className="fixed pointer-events-none text-white bg-black bg-opacity-75 px-2 py-1 rounded text-sm font-medium"
                style={{
                    zIndex: 20,
                    transition: 'opacity 0.2s ease-out'
                }}
            >
                {cursorText}
            </div>
        )}
        </>
    )
}