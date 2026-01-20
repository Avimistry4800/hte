"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
    "> initialize hte_core_vision --verbose",
    "[OK] Booting Neural-Network Core...",
    "[OK] Mounting Scalable Ecosystem v4.0",
    "[OK] Syncing Global Data Protocols",
    "> verify --standards",
    "CODE_QUALITY: 100/100",
    "PERFORMANCE: 99.8ms LCP",
    "SECURITY: AES-256 ENCRYPTED",
    "> load_philosophy",
    "SYSTEM_MSG: We are architects of the future.",
    "SYSTEM_MSG: Luck is not a variable in our engineering.",
    "> ready_for_deployment",
    "[STATUS] SYSTEM_READY"
];

export function TerminalVisual() {
    const [visibleLines, setVisibleLines] = useState<string[]>([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleLines(prev => {
                if (prev.length < lines.length) {
                    return [...prev, lines[prev.length]];
                }
                clearInterval(timer);
                return prev;
            });
        }, 800);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full max-w-2xl mx-auto bg-void border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm relative group">
            {/* Header */}
            <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] text-titanium/30 uppercase tracking-widest">hte-terminal-v4.0.exe</div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-2 h-[320px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void z-10" />
                {visibleLines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`${line.startsWith(">") ? "text-electric" :
                                line.startsWith("[OK]") ? "text-emerald-400" :
                                    line.startsWith("[STATUS]") ? "text-yellow-400 font-bold" :
                                        "text-titanium/70"
                            }`}
                    >
                        {line}
                    </motion.div>
                ))}
                {visibleLines.length < lines.length && (
                    <motion.div
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 bg-electric inline-block ml-1 align-middle"
                    />
                )}
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        </div>
    );
}
