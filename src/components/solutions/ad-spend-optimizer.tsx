"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign } from "lucide-react";

export function AdSpendOptimizer() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-void border border-white/5 rounded-3xl overflow-hidden group">
            <div className="w-full space-y-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-emerald-500" />
                        <span className="text-[10px] font-mono text-titanium/50 uppercase tracking-widest">Budget Allocation</span>
                    </div>
                    <div className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[8px] font-bold rounded">AUTO_SYNC</div>
                </div>

                {[
                    { label: "Google", val: 85, color: "bg-blue-500" },
                    { label: "Meta", val: 65, color: "bg-pink-500" },
                    { label: "LinkedIn", val: 45, color: "bg-cyan-500" }
                ].map((platform, i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-mono text-titanium/40 uppercase">
                            <span>{platform.label}</span>
                            <span>{platform.val}% Efficiency</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${platform.val}%` }}
                                transition={{ duration: 1.5, delay: i * 0.2 }}
                                className={`h-full ${platform.color} shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
                            />
                        </div>
                    </div>
                ))}

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-emerald-500" />
                        <div>
                            <div className="text-[10px] text-titanium/40 uppercase tracking-widest leading-none">Global ROAS</div>
                            <div className="text-white font-bold text-lg">4.82x</div>
                        </div>
                    </div>
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(j => (
                            <div key={j} className="w-6 h-6 rounded-full border border-white/10 bg-void flex items-center justify-center text-[8px] font-bold text-white/30">
                                {j}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
