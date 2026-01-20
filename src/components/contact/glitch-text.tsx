"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlitchTextProps {
    text: string;
    className?: string;
    interval?: number;
}

export function GlitchText({ text, className = "", interval = 3000 }: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const triggerGlitch = () => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        };

        const timer = setInterval(triggerGlitch, interval);
        return () => clearInterval(timer);
    }, [interval]);

    const glitchVariants: any = {
        idle: { x: 0, y: 0, scale: 1, filter: "none" },
        glitch: {
            x: [0, -2, 2, -1, 1, 0],
            y: [0, 1, -1, 2, -2, 0],
            scale: [1, 1.02, 0.98, 1.01, 0.99, 1],
            filter: [
                "none",
                "drop-shadow(2px 0 #00fff2) drop-shadow(-2px 0 #ff00c1)",
                "drop-shadow(-1px 0 #00fff2) drop-shadow(1px 0 #ff00c1)",
                "none"
            ],
            transition: { duration: 0.2, ease: "easeInOut" }
        }
    };

    return (
        <div className={`relative inline-block ${className}`}>
            <motion.span
                animate={isGlitching ? "glitch" : "idle"}
                variants={glitchVariants}
                className="block"
            >
                {text}
            </motion.span>

            {isGlitching && (
                <>
                    <motion.span
                        initial={{ opacity: 0.5, x: -2 }}
                        animate={{ x: 2, opacity: 0 }}
                        className="absolute inset-0 text-electric pointer-events-none mix-blend-screen overflow-hidden whitespace-nowrap"
                        style={{ clipPath: "inset(10% 0 80% 0)" }}
                    >
                        {text}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0.5, x: 2 }}
                        animate={{ x: -2, opacity: 0 }}
                        className="absolute inset-0 text-magenta pointer-events-none mix-blend-screen overflow-hidden whitespace-nowrap"
                        style={{ clipPath: "inset(70% 0 10% 0)" }}
                    >
                        {text}
                    </motion.span>
                </>
            )}
        </div>
    );
}
