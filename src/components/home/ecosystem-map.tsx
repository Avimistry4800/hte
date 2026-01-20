"use client";

import { motion } from "framer-motion";
import { Layers, Zap, MousePointer2 } from "lucide-react";

export function EcosystemMap() {
    return (
        <div className="relative w-full h-[350px] bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col items-center justify-center px-12 group">
            <div className="relative w-full flex justify-between items-center max-w-md">
                {/* Visual Connector Pipes */}
                <svg className="absolute inset-0 w-full h-full -z-10 opacity-20 pointer-events-none">
                    <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Pillar 1: Web */}
                <div className="flex flex-col items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-void border-2 border-electric/30 rounded-2xl flex items-center justify-center text-electric shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-colors group-hover:border-electric"
                    >
                        <Layers className="w-8 h-8" />
                    </motion.div>
                    <span className="text-[10px] font-mono text-titanium/50 uppercase tracking-widest">Web Systems</span>
                </div>

                {/* Central Bridge: Automation */}
                <div className="flex flex-col items-center gap-4">
                    <motion.div
                        animate={{
                            boxShadow: ["0 0 10px rgba(16,185,129,0.1)", "0 0 30px rgba(16,185,129,0.3)", "0 0 10px rgba(16,185,129,0.1)"]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-20 h-20 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-500 transition-all hover:bg-emerald-500/20 group-hover:border-emerald-500"
                    >
                        <Zap className="w-10 h-10" />
                    </motion.div>
                    <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-bold">Automation</span>
                </div>

                {/* Pillar 2: Growth */}
                <div className="flex flex-col items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-void border-2 border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-colors group-hover:border-purple-500"
                    >
                        <MousePointer2 className="w-8 h-8" />
                    </motion.div>
                    <span className="text-[10px] font-mono text-titanium/50 uppercase tracking-widest">Growth Engine</span>
                </div>
            </div>

            <div className="mt-12 text-center max-w-xs space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <p className="text-white text-sm font-bold">Unified Logic Ecosystem</p>
                <p className="text-titanium/50 text-[10px] leading-relaxed uppercase tracking-tighter">
                    Data flows seamlessly from your web presence, through automated logic clusters, directly into customer acquisition funnels.
                </p>
            </div>
        </div>
    );
}
