"use client";

import { motion } from "framer-motion";

export function AutomationVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

            {/* Central Processing Node */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 rounded-xl bg-void border-2 border-electric flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10 relative"
            >
                <div className="w-8 h-8 rounded-full bg-electric animate-pulse" />
                {/* Orbital Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-10px] rounded-xl border border-electric/30 border-dashed"
                />
            </motion.div>

            {/* Satellites / Nodes */}
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-12 h-12 rounded-lg bg-void border border-white/20 flex items-center justify-center z-10"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    whileInView={{
                        opacity: 1,
                        x: i === 0 ? -100 : i === 1 ? 100 : i === 2 ? -100 : 100,
                        y: i === 0 ? -80 : i === 1 ? -80 : i === 2 ? 80 : 80,
                    }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                    <div className="w-2 h-2 rounded-full bg-titanium/50" />
                </motion.div>
            ))}

            {/* Connecting Lines & Data Packets */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {[
                    { x1: "50%", y1: "50%", x2: "calc(50% - 100px)", y2: "calc(50% - 80px)" }, // Top Left
                    { x1: "50%", y1: "50%", x2: "calc(50% + 100px)", y2: "calc(50% - 80px)" }, // Top Right
                    { x1: "50%", y1: "50%", x2: "calc(50% - 100px)", y2: "calc(50% + 80px)" }, // Bottom Left
                    { x1: "50%", y1: "50%", x2: "calc(50% + 100px)", y2: "calc(50% + 80px)" }, // Bottom Right
                ].map((line, i) => (
                    <g key={i}>
                        <motion.line
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        {/* Data Packet moving outwards */}
                        <motion.circle
                            r="3"
                            fill="#3B82F6"
                            initial={{ offsetDistance: "0%" }}
                            animate={{ opacity: [0, 1, 0] }}
                        >
                            <animateMotion
                                dur="2s"
                                repeatCount="indefinite"
                                path={`M${i === 0 || i === 2 ? '250,200' : '250,200'} L${i === 0 ? '150,120' : i === 1 ? '350,120' : i === 2 ? '150,280' : '350,280'}`} // Approximate coordinates based on center (400x400 container assumed, using percentages is harder for path)
                            // Standard SVG Lines are better for visual simplicity here, using simplified animation
                            />
                        </motion.circle>
                    </g>
                ))}
            </svg>

            {/* Simplified Packets using CSS/Framer directly for reliability over SVG paths in React */}
            {[0, 1, 2, 3].map(i => (
                <motion.div
                    key={`packet-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-electric top-1/2 left-1/2"
                    animate={{
                        x: i === 0 ? [-10, -100] : i === 1 ? [10, 100] : i === 2 ? [-10, -100] : [10, 100],
                        y: i === 0 ? [-8, -80] : i === 1 ? [-8, -80] : i === 2 ? [8, 80] : [8, 80],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                    }}
                />
            ))}

        </div>
    );
}
