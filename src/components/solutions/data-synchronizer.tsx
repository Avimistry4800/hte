"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Database, RefreshCw, Smartphone } from "lucide-react";

export function DataSynchronizer() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden group">
            <div className="flex items-center gap-12 relative z-10">
                <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-void border border-white/10 rounded-2xl group-hover:border-electric/30 transition-colors">
                        <Database className="w-8 h-8 text-titanium/50" />
                    </div>
                    <span className="text-[10px] font-mono text-titanium/30 uppercase tracking-widest">Master DB</span>
                </div>

                <div className="relative w-32 flex flex-col items-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        className="mb-4"
                    >
                        <RefreshCw className="w-6 h-6 text-emerald-500" />
                    </motion.div>
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
                    {/* Pulsing Data Point */}
                    <motion.div
                        animate={{ x: [-60, 60] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                    />
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-void border border-white/10 rounded-2xl group-hover:border-electric/30 transition-colors">
                        <Smartphone className="w-8 h-8 text-titanium/50" />
                    </div>
                    <span className="text-[10px] font-mono text-titanium/30 uppercase tracking-widest">Client CRM</span>
                </div>
            </div>

            {/* Binary Stream */}
            <div className="absolute inset-0 opacity-5 font-mono text-[8px] text-emerald-500 flex flex-col gap-1 pointer-events-none">
                {isMounted && Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ x: [0, -100] }}
                        transition={{ repeat: Infinity, duration: 10 + i, ease: "linear" }}
                        className="whitespace-nowrap"
                    >
                        {Array.from({ length: 10 }).map(() => Math.random() > 0.5 ? "10101011 " : "00101101 ")}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
