"use client";

import { motion } from "framer-motion";

export function GrowthVisual() {
    // Generate bars data
    const bars = [15, 25, 20, 35, 30, 45, 40, 60, 55, 75, 70, 90, 85, 100];

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center pt-8">
            {/* Grid Lines */}
            <div className="absolute inset-0 w-full h-full p-8 flex flex-col justify-end gap-8 opacity-20 pointer-events-none">
                <div className="w-full h-px bg-white/20" />
                <div className="w-full h-px bg-white/20" />
                <div className="w-full h-px bg-white/20" />
                <div className="w-full h-px bg-white/20" />
            </div>

            {/* ROI Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 text-center relative z-10"
            >
                <div className="text-4xl font-bold text-white mb-1 counter-reset flex items-center gap-1">
                    <span className="text-electric">+</span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <Counter from={0} to={300} />
                    </motion.span>
                    <span className="text-electric">%</span>
                </div>
                <div className="text-xs text-titanium uppercase tracking-[0.2em]">Growth Velocity</div>
            </motion.div>

            {/* Animated Bars */}
            <div className="h-32 flex items-end gap-1.5 md:gap-2 px-8 relative z-10">
                {bars.map((height, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: `${height}%`, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: i * 0.05,
                            ease: "easeOut"
                        }}
                        className="w-4 md:w-6 bg-gradient-to-t from-electric/20 to-electric rounded-t-sm"
                    />
                ))}
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent pointer-events-none" />
        </div>
    );
}

function Counter({ from, to }: { from: number, to: number }) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            {to}
        </motion.span>
    )
}
