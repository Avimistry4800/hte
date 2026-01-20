"use client";

import { motion } from "framer-motion";
import { Shield, FastForward, Target, RefreshCw } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Mathematical Precision",
        desc: "We don't guess. Every decision is backed by data points and architectural blueprints.",
        color: "from-blue-500/20 to-electric/20"
    },
    {
        icon: FastForward,
        title: "High-Velocity Engineering",
        desc: "Speed is a competitive advantage. We ship production-grade code at startup pace.",
        color: "from-purple-500/20 to-blue-500/20"
    },
    {
        icon: Shield,
        title: "Security by Design",
        desc: "Automation shouldn't compromise safety. We build with enterprise-grade security protocols.",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        icon: RefreshCw,
        title: "Recursive Improvement",
        desc: "Our systems learn. We build loops that improve efficiency with every iteration.",
        color: "from-orange-500/20 to-red-500/20"
    }
];

export function ValueSystem() {
    return (
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {values.map((v, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group"
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                    <div className="relative z-10 flex gap-6 items-start">
                        <div className="p-4 rounded-2xl bg-void border border-white/10 group-hover:border-electric/50 transition-colors duration-500">
                            <v.icon className="w-8 h-8 text-electric" />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-electric transition-colors duration-500">
                                {v.title}
                            </h3>
                            <p className="text-titanium/70 leading-relaxed">
                                {v.desc}
                            </p>
                        </div>
                    </div>

                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-electric/5 rounded-full blur-3xl group-hover:bg-electric/20 transition-all duration-700" />
                </motion.div>
            ))}
        </div>
    );
}
