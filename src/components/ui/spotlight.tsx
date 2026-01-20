"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function Spotlight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Offset by half screen width/height to center 0,0 roughly but simpler to just track client coordinates
            // We want the spotlight to follow the mouse directly
            mouseX.set(e.clientX - 250); // Center the 500px glow
            mouseY.set(e.clientY - 250);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
            }}
        >
            {/* The actual glow element moving (alternative method if gradient approach lags, but gradient is usually fine for this specific effect) */}
            <motion.div
                className="fixed w-[500px] h-[500px] rounded-full bg-electric/10 blur-[100px] pointer-events-none"
                style={{
                    x: smoothX,
                    y: smoothY
                }}
            />
        </motion.div>
    );
}
