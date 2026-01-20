"use client";

import { motion } from "framer-motion";
import { Check, Terminal, Play, Radio } from "lucide-react";

const steps = [
    { label: "Commit", icon: Terminal },
    { label: "Build", icon: Play },
    { label: "Verify", icon: Check },
    { label: "Live", icon: Radio },
];

export function DeploymentPipeline() {
    return (
        <div className="relative w-full p-8 bg-void border border-white/5 rounded-3xl overflow-hidden h-full flex flex-col justify-center">
            <div className="flex justify-between items-center relative gap-4">
                {/* Connecting Line */}
                <div className="absolute left-0 right-0 h-0.5 bg-white/5 top-1/2 -translate-y-1/2 -z-10" />

                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <div className="w-12 h-12 bg-void border border-white/10 rounded-xl flex items-center justify-center relative group-hover:border-electric/50 transition-colors">
                            <step.icon className={`w-5 h-5 ${i === 3 ? "text-emerald-500 animate-pulse" : "text-titanium/50"}`} />
                        </div>
                        <div className="text-[9px] font-mono text-titanium/40 tracking-widest uppercase">{step.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Animated Packet */}
            <motion.div
                animate={{ x: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 pointer-events-none"
            >
                <div className="w-4 h-full bg-gradient-to-r from-transparent to-electric shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            </motion.div>

            <div className="mt-12 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-emerald-500/80 tracking-widest">DEPLOY_SUCCESSFUL_v1.4.2</span>
                    </div>
                    <span className="text-[10px] font-mono text-titanium/30">0.034ms</span>
                </div>
            </div>
        </div>
    );
}
