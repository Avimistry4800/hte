"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CodePulse() {
    const [isMounted, setIsMounted] = useState(false);
    const [randomWidths, setRandomWidths] = useState<{ w1: string, w2: string }[]>([]);

    useEffect(() => {
        setIsMounted(true);
        // Generate consistent random widths on mount
        const widths = [1, 2, 3, 4, 5].map(() => ({
            w1: `${Math.random() * 40 + 20}%`,
            w2: `${Math.random() * 20 + 10}%`
        }));
        setRandomWidths(widths);
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-white/[0.02] rounded-3xl overflow-hidden">
            <div className="w-full space-y-3">
                {isMounted && [1, 2, 3, 4, 5].map((line, i) => (
                    <div key={i} className="flex gap-2">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: randomWidths[i]?.w1 || "30%" }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-2 bg-electric/20 rounded-full"
                        />
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: randomWidths[i]?.w2 || "15%" }}
                            transition={{ duration: 1, delay: i * 0.15 }}
                            className="h-2 bg-electric/40 rounded-full"
                        />
                    </div>
                ))}
            </div>

            {/* Pulsing Core */}
            <div className="mt-8 flex items-center gap-4">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-12 bg-electric/20 rounded-xl flex items-center justify-center border border-electric/50"
                >
                    <div className="w-4 h-4 bg-electric rounded-sm rotate-45" />
                </motion.div>
                <div className="font-mono text-[10px] text-electric tracking-widest uppercase">
                    Compiling_Infrastructure...
                </div>
            </div>

            {/* Binary Rain Background */}
            <div className="absolute inset-0 opacity-5 font-mono text-[8px] flex flex-wrap gap-2 pointer-events-none">
                {isMounted && Array.from({ length: 40 }).map((_, i) => (
                    <span key={i}>{Math.random() > 0.5 ? "1" : "0"}</span>
                ))}
            </div>
        </div>
    );
}
