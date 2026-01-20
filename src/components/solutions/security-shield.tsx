"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";

export function SecurityShield() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 bg-void/50 rounded-3xl overflow-hidden group">
            {/* Hexagon Grid Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3B82F6_0.5px,transparent_0.5px)] [background-size:16px_16px]" />

            <div className="relative">
                {/* Rotating Outer Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="absolute inset-[-40px] border border-electric/20 rounded-full border-dashed"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="absolute inset-[-20px] border border-electric/10 rounded-full"
                />

                {/* Central Shield */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-32 h-32 bg-void border-2 border-electric flex items-center justify-center rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                >
                    <Shield className="w-16 h-16 text-electric" />

                    {/* Scanning Bar */}
                    <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="absolute left-0 right-0 h-0.5 bg-electric shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20"
                    />
                </motion.div>

                {/* Status Nodes */}
                <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="px-3 py-1 bg-void border border-emerald-500/30 rounded-full flex items-center gap-2"
                    >
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span className="text-[10px] text-emerald-500 font-mono font-bold">ENCRYPTED</span>
                    </motion.div>
                </div>

                <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="px-3 py-1 bg-void border border-white/10 rounded-full flex items-center gap-2">
                        <Lock className="w-3 h-3 text-electric" />
                        <span className="text-[10px] text-titanium/50 font-mono">TLS_v1.3</span>
                    </div>
                </div>
            </div>

            {/* Warning Overlay (Hover) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-electric/5 backdrop-blur-[2px] flex items-center justify-center transition-all duration-500"
            >
                <div className="px-6 py-3 bg-void/80 border border-electric/30 rounded-xl flex items-center gap-3">
                    <Eye className="w-4 h-4 text-electric animate-pulse" />
                    <span className="text-xs font-mono text-white tracking-widest">THREAT_DETECTION: 0</span>
                </div>
            </motion.div>
        </div>
    );
}
