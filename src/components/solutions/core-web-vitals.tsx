"use client";

import { motion } from "framer-motion";

const vitals = [
    { label: "LCP", score: 99, color: "text-emerald-500", metric: "0.8s" },
    { label: "FID", score: 100, color: "text-emerald-500", metric: "12ms" },
    { label: "CLS", score: 98, color: "text-emerald-500", metric: "0.01" },
];

export function CoreWebVitals() {
    return (
        <div className="grid grid-cols-3 gap-6 p-8 bg-white/[0.02] border border-white/5 rounded-3xl h-full items-center">
            {vitals.map((v, i) => (
                <div key={i} className="flex flex-col items-center gap-4 text-center">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90">
                            <circle
                                cx="40" cy="40" r="36"
                                fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6"
                            />
                            <motion.circle
                                cx="40" cy="40" r="36"
                                fill="none" stroke="currentColor" strokeWidth="6"
                                strokeDasharray="226"
                                initial={{ strokeDashoffset: 226 }}
                                whileInView={{ strokeDashoffset: 226 - (226 * v.score) / 100 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                                className={v.color}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-white font-bold text-lg leading-none">{v.score}</span>
                        </div>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-titanium/40 tracking-widest uppercase mb-1">{v.label}</div>
                        <div className="text-white font-bold text-sm tracking-tighter">{v.metric}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
