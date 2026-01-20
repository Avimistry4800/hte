"use client";

import { motion } from "framer-motion";
import { UserPlus, UserCheck } from "lucide-react";

export function LtvMaximizer() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-void border border-white/5 rounded-3xl overflow-hidden group">
            <div className="flex items-end gap-1 mb-8 h-32 w-full max-w-[200px]">
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${20 + i * 10}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="flex-1 bg-gradient-to-t from-emerald-500/10 to-emerald-500 opacity-60 rounded-t-sm"
                    />
                ))}
            </div>

            <div className="w-full space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                    <div className="flex items-center gap-3">
                        <UserCheck className="w-5 h-5 text-electric" />
                        <div>
                            <div className="text-[10px] text-titanium/40 uppercase tracking-widest leading-none">Retention</div>
                            <div className="text-white font-bold text-sm">94.2%</div>
                        </div>
                    </div>
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-emerald-500 font-mono text-[10px] font-bold"
                    >
                        +12% MoM
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                        <UserPlus className="w-4 h-4 text-purple-400 mb-2" />
                        <div className="text-white font-bold text-xs">$420</div>
                        <div className="text-[8px] text-titanium/40 uppercase tracking-widest">Avg. LTV</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                        <div className="w-4 h-4 rounded-full border border-emerald-500/50 flex items-center justify-center mb-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        </div>
                        <div className="text-white font-bold text-xs">88.2%</div>
                        <div className="text-[8px] text-titanium/40 uppercase tracking-widest">Active</div>
                    </div>
                </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
    );
}
