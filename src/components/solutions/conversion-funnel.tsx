"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ConversionFunnel() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-void border border-white/5 rounded-3xl overflow-hidden group">
            {/* Funnel SVG */}
            <div className="relative w-full max-w-[280px]">
                <svg viewBox="0 0 200 160" className="w-full drop-shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    {/* Stage 1 */}
                    <motion.path
                        d="M 10 10 L 190 10 L 175 45 L 25 45 Z"
                        fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1"
                    />
                    {/* Stage 2 */}
                    <motion.path
                        d="M 25 50 L 175 50 L 155 85 L 45 85 Z"
                        fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1"
                    />
                    {/* Stage 3 */}
                    <motion.path
                        d="M 45 90 L 155 90 L 135 125 L 65 125 Z"
                        fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.5)" strokeWidth="1"
                    />
                    {/* Flow Particles */}
                    {isMounted && Array.from({ length: 12 }).map((_, i) => (
                        <motion.circle
                            key={i}
                            r="1.5"
                            fill="#3B82F6"
                            animate={{
                                cy: [15, 120],
                                cx: [Math.random() * 160 + 20, Math.random() * 60 + 70],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 2 + Math.random(), delay: i * 0.3 }}
                        />
                    ))}
                </svg>

                {/* Data Labels */}
                <div className="absolute top-[15%] left-[-20px] font-mono text-[8px] text-titanium/30">TRAFFIC</div>
                <div className="absolute top-[50%] right-[-20px] font-mono text-[8px] text-electric">LEADS</div>
                <div className="absolute top-[85%] left-[-20px] font-mono text-[8px] text-emerald-500">REVENUE</div>
            </div>

            <div className="mt-12 w-full grid grid-cols-3 gap-2">
                {[
                    { label: "Capture", val: "92%" },
                    { label: "Nurture", val: "48%" },
                    { label: "Convert", val: "14%" }
                ].map((item, i) => (
                    <div key={i} className="p-3 bg-white/5 border border-white/5 rounded-xl text-center group-hover:border-electric/20 transition-all">
                        <div className="text-white font-bold text-xs">{item.val}</div>
                        <div className="text-[8px] text-titanium/40 uppercase tracking-tighter">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
