"use client";

import { motion } from "framer-motion";

export function ProcessRadar() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Outer Ring */}
            <div className="absolute inset-0 border border-electric/10 rounded-full" />

            {/* Radar Scan Line */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="w-1/2 h-0.5 bg-gradient-to-r from-transparent to-electric shadow-[0_0_15px_rgba(59,130,246,0.5)] origin-right -ml-[50%]" />
            </motion.div>

            {/* Pulse Rings */}
            {[0.5, 1, 1.5].map((delay, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0.1, opacity: 0.5 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 3, delay, ease: "easeOut" }}
                    className="absolute inset-0 border border-electric/30 rounded-full"
                />
            ))}

            {/* Target Points */}
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-3 h-3 bg-electric rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10"
            />

            <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-electric/50 rounded-full" />
            <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-electric/50 rounded-full animate-pulse" />
        </div>
    );
}
