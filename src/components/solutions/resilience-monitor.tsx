"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, AlertCircle } from "lucide-react";

export function ResilienceMonitor() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-void border border-white/5 rounded-3xl overflow-hidden group">
            {/* Waveform Background */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                <svg width="100%" height="100" viewBox="0 0 400 100" className="stroke-electric fill-none">
                    <motion.path
                        animate={{
                            d: [
                                "M 0 50 Q 50 10 100 50 T 200 50 T 300 50 T 400 50",
                                "M 0 50 Q 50 90 100 50 T 200 50 T 300 50 T 400 50",
                                "M 0 50 Q 50 10 100 50 T 200 50 T 300 50 T 400 50"
                            ]
                        }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        strokeWidth="1"
                    />
                </svg>
            </div>

            <div className="relative z-10 w-full max-w-[240px]">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-titanium/40 uppercase tracking-widest">Health</div>
                            <div className="text-white font-bold text-sm">OPTIMAL</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] font-mono text-titanium/40 uppercase tracking-widest">Latency</div>
                        <div className="text-emerald-500 font-bold text-sm">0.2ms</div>
                    </div>
                </div>

                <div className="space-y-4">
                    {[
                        { label: "Retry Logic", status: "Active" },
                        { label: "Failover Node", status: "Standby" },
                        { label: "Auth Mesh", status: "Secure" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-xl group-hover:border-white/10 transition-colors">
                            <span className="text-xs text-titanium/70">{item.label}</span>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="text-[9px] font-mono text-emerald-500/80 uppercase tracking-widest">{item.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Simulated Error Pulse */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 10, times: [0, 0.05, 0.1] }}
                className="absolute inset-0 bg-red-500/5 flex items-center justify-center backdrop-blur-[1px]"
            >
                <div className="px-4 py-2 bg-void border border-red-500/30 rounded-xl flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-[10px] font-mono text-red-500 tracking-widest">RECOVERING_v1.2...</span>
                </div>
            </motion.div>
        </div>
    );
}
