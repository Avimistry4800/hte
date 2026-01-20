"use client";

import { motion } from "framer-motion";

export function LogicFlow() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 200 200" className="opacity-40">
                {/* Horizontal Flow Lines */}
                <motion.path
                    d="M 20 50 L 180 50 M 20 100 L 180 100 M 20 150 L 180 150"
                    stroke="rgba(59,130,246,0.2)"
                    strokeWidth="1"
                    fill="none"
                />

                {/* Animated Data Packets */}
                {[50, 100, 150].map((y, i) => (
                    <motion.circle
                        key={i}
                        r="2"
                        fill="#3B82F6"
                        initial={{ cx: 20 }}
                        animate={{ cx: 180 }}
                        transition={{
                            repeat: Infinity,
                            duration: 2 + i * 0.5,
                            ease: "linear",
                            delay: i * 0.3
                        }}
                    />
                ))}

                {/* Vertical Intersections */}
                <motion.path
                    d="M 60 20 L 60 180 M 140 20 L 140 180"
                    stroke="rgba(59,130,246,0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    fill="none"
                />
            </svg>

            {/* Central Node */}
            <div className="absolute p-4 bg-void border border-electric/30 rounded-xl backdrop-blur-sm shadow-2xl">
                <div className="w-8 h-8 grid grid-cols-2 gap-1 animate-pulse">
                    {[1, 2, 3, 4].map(b => (
                        <div key={b} className="bg-electric/40 rounded-sm" />
                    ))}
                </div>
            </div>
        </div>
    );
}
