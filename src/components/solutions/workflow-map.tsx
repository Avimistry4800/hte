"use client";

import { motion } from "framer-motion";
import { GitBranch, Box, ArrowRight } from "lucide-react";

export function WorkflowMap() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 bg-void border border-white/5 rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div className="relative flex items-center gap-8">
                {/* Trigger */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl relative z-10"
                >
                    <Box className="w-6 h-6 text-electric" />
                    <div className="absolute -top-2 -left-2 px-1.5 py-0.5 bg-electric text-[8px] font-bold rounded text-white font-mono">TRIGGER</div>
                </motion.div>

                <div className="flex flex-col gap-12 relative">
                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <motion.path
                            d="M -32 30 L 0 0 M -32 30 L 0 60"
                            stroke="rgba(59,130,246,0.2)" strokeWidth="2" fill="none"
                        />
                    </svg>

                    {/* Step A */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-4 bg-white/5 border border-white/10 rounded-xl relative z-10"
                    >
                        <GitBranch className="w-6 h-6 text-purple-400 rotate-90" />
                    </motion.div>

                    {/* Step B */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-4 bg-white/5 border border-white/10 rounded-xl relative z-10"
                    >
                        <ArrowRight className="w-6 h-6 text-emerald-400" />
                    </motion.div>
                </div>

                {/* Outcome */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="p-5 bg-electric/10 border border-electric/30 rounded-2xl relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                >
                    <div className="w-8 h-8 rounded-full bg-electric flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-4 left-4 font-mono text-[8px] text-titanium/20 tracking-widest uppercase">
                Logic_Engine: Active
            </div>
        </div>
    );
}
