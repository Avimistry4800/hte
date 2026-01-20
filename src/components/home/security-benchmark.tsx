"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Terminal } from "lucide-react";

export function SecurityBenchmark() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-void border border-white/5 rounded-3xl overflow-hidden group">
            <div className="w-full max-w-[320px] space-y-6">
                {/* 1. Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-sm">HARDENED_v4.2</div>
                            <div className="text-[9px] font-mono text-titanium/40 uppercase tracking-widest">Security Protocol</div>
                        </div>
                    </div>
                </div>

                {/* 2. Visual Layers */}
                <div className="relative h-32 flex flex-col items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="absolute inset-0 border border-white/5 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                        className="absolute inset-4 border border-white/10 rounded-full border-dashed"
                    />
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                        <Lock className="w-6 h-6 text-white/50" />
                    </div>
                </div>

                {/* 3. Metrics */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                        <div className="text-emerald-500 font-bold text-lg leading-none mb-1">2048-bit</div>
                        <div className="text-[8px] font-mono text-titanium/40 uppercase tracking-widest">Encryption</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                        <div className="text-white font-bold text-lg leading-none mb-1">TLS 1.3</div>
                        <div className="text-[8px] font-mono text-titanium/40 uppercase tracking-widest">Handshake</div>
                    </div>
                </div>

                {/* 4. Terminal Feed (Abstract) */}
                <div className="p-4 bg-void border border-white/5 rounded-2xl font-mono text-[9px] text-titanium/30 h-24 overflow-hidden relative">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-500/50">[OK]</span>
                            <span>Brute-force protection: ENABLED</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-500/50">[OK]</span>
                            <span>SQL Injection pattern check: PASSED</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500/50">[INFO]</span>
                            <span>Rate limiting: GLOBAL_ACTIVE</span>
                        </div>
                        <motion.div
                            animate={{ opacity: [0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="bg-white/20 w-1.5 h-3"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />
                </div>
            </div>
        </div>
    );
}
