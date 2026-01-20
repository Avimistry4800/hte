"use client";

import { motion } from "framer-motion";

export function DeploymentOrbit() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Center Planet */}
            <div className="w-16 h-16 rounded-full bg-void border-2 border-electric/30 flex items-center justify-center relative shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                <div className="absolute inset-0 rounded-full animate-pulse border border-electric/20" />
                <div className="w-4 h-4 bg-electric rounded-full" />
            </div>

            {/* Orbiting Nodes */}
            {[0, 120, 240].map((rotate, i) => (
                <motion.div
                    key={i}
                    animate={{ rotate: [rotate, rotate + 360] }}
                    transition={{ repeat: Infinity, duration: 8 + i * 2, ease: "linear" }}
                    className="absolute w-full h-full"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                            className="w-4 h-4 bg-void border border-electric rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        />
                    </div>
                </motion.div>
            ))}

            {/* Connection Lines */}
            <div className="absolute inset-4 border border-white/5 rounded-full border-dashed" />
            <div className="absolute inset-12 border border-white/5 rounded-full" />
        </div>
    );
}
