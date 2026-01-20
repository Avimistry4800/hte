"use client";

import { motion } from "framer-motion";
import { Box, Share2, Database, Globe } from "lucide-react";

export function FrameworkOrchestrator() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 bg-void/50 rounded-3xl border border-white/5 overflow-hidden">
            {/* Background Data Stream */}
            <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 3 + i, ease: "linear", delay: i }}
                        className="h-px w-full bg-gradient-to-r from-transparent via-electric to-transparent mb-12"
                    />
                ))}
            </div>

            <div className="relative flex items-center gap-12">
                {/* Left Side: Sources */}
                <div className="space-y-8">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl"
                    >
                        <Database className="w-6 h-6 text-purple-400" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl"
                    >
                        <Share2 className="w-6 h-6 text-blue-400" />
                    </motion.div>
                </div>

                {/* Central Hub: Next.js */}
                <div className="relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                        className="absolute inset-[-20px] border border-electric/20 rounded-full border-dashed"
                    />
                    <div className="w-24 h-24 bg-void border-2 border-electric rounded-3xl flex items-center justify-center relative z-10 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                        <Box className="w-12 h-12 text-electric" />
                        <div className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-electric text-[8px] font-bold rounded text-white">CORE</div>
                    </div>
                </div>

                {/* Right Side: Destinations */}
                <div className="space-y-8">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl"
                    >
                        <Globe className="w-6 h-6 text-emerald-400" />
                    </motion.div>
                    <div className="w-14 h-14 border border-white/5 rounded-2xl flex items-center justify-center">
                        <div className="w-2 h-2 bg-white/10 rounded-full animate-ping" />
                    </div>
                </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                    d="M 120 150 Q 200 150 200 150"
                    stroke="rgba(59,130,246,0.2)" strokeWidth="2" fill="none"
                />
            </svg>
        </div>
    );
}
