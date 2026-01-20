"use client";

import { motion } from "framer-motion";
import { Layers, Database, Cpu, Globe } from "lucide-react";

const stackLayers = [
    {
        title: "Interface Layer",
        desc: "Next.js 15, React, Tailwind v4",
        icon: Globe,
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: "Intelligence Layer",
        desc: "OpenAI, Anthropic, Custom LLMs",
        icon: Cpu,
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        title: "Execution Layer",
        desc: "Node.js, Python, Rust",
        icon: Database,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    },
    {
        title: "Infrastructure Layer",
        desc: "Vercel, AWS, PostgreSQL",
        icon: Layers,
        color: "text-amber-400",
        bg: "bg-amber-400/10"
    }
];

export function TechStack() {
    return (
        <div className="relative space-y-4">
            {stackLayers.map((layer, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group"
                >
                    <div className="flex items-center gap-6 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                        <div className={`w-12 h-12 rounded-lg ${layer.bg} flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors`}>
                            <layer.icon className={`w-6 h-6 ${layer.color}`} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-white font-heading font-bold text-sm mb-1">{layer.title}</h4>
                            <p className="text-titanium/50 text-xs font-mono">{layer.desc}</p>
                        </div>
                        <div className="h-1 w-12 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                whileInView={{ x: "0%" }}
                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                className={`h-full w-full bg-current ${layer.color}`}
                            />
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* Ambient Connection Line */}
            <div className="absolute left-10 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-400/20 via-purple-400/20 to-transparent -z-10" />
        </div>
    );
}
