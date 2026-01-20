"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Activity, Database, Link } from "lucide-react";

const capabilities = [
    { icon: Activity, label: "Latency", value: "< 20ms", desc: "Edge-optimized global delivery" },
    { icon: Cpu, label: "Throughput", value: "10k req/s", desc: "High-concurrency logic engines" },
    { icon: Shield, label: "Security", value: "L7 WAF", desc: "Hardened infrastructure by default" },
    { icon: Zap, label: "Uptime", value: "99.99%", desc: "Self-healing orchestrator clusters" },
    { icon: Database, label: "Scalability", value: "Elastic", desc: "Vertical and horizontal auto-scaling" },
    { icon: Link, label: "Integrations", value: "1k+ APIs", desc: "Unified bi-directional data mesh" }
];

export function CapabilityMatrix() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {capabilities.map((cap, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-8 bg-void hover:bg-white/[0.02] transition-colors group relative"
                >
                    <div className="flex items-center justify-between mb-4">
                        <cap.icon className="w-5 h-5 text-electric/50 group-hover:text-electric transition-colors" />
                        <span className="text-[10px] font-mono text-titanium/20 group-hover:text-titanium/40 transition-colors uppercase tracking-widest">{cap.label}</span>
                    </div>
                    <div className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-electric transition-colors">
                        {cap.value}
                    </div>
                    <div className="text-xs text-titanium/50 group-hover:text-titanium/70 transition-colors">
                        {cap.desc}
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-electric/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
            ))}
        </div>
    );
}
