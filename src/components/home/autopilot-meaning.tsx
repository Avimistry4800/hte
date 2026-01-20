"use client";

import { motion } from "framer-motion";

export function AutopilotMeaning() {
    return (
        <section className="relative py-32 overflow-hidden border-t border-white/5">
            {/* Background Spotlight */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/5 rounded-full blur-[160px] pointer-events-none"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight"
                            >
                                Autopilot Means Your Business Runs <br />
                                <span className="text-electric">Even When You Don’t</span>
                            </motion.h2>

                            <div className="space-y-6">
                                {[
                                    { text: "Automation is not about replacing humans.", highlight: true },
                                    { text: "It’s about removing chaos.", highlight: true },
                                    { text: "We design systems where lead generation, follow-ups, customer communication, and reporting run automatically — with human control only where decisions matter.", highlight: false },
                                    { text: "No noise. No guesswork. Just predictable execution.", highlight: false }
                                ].map((item, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.12), duration: 0.5 }}
                                        className={item.highlight ? "text-xl text-white font-medium" : "text-lg text-titanium/70"}
                                    >
                                        {item.text}
                                    </motion.p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 3-Node Diagram */}
                    <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            {/* Static Path Shadow */}
                            <motion.path
                                d="M 100 100 L 300 100 L 200 300 Z"
                                fill="none"
                                stroke="rgba(0, 243, 255, 0.1)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />

                            {/* Animated Dash Path */}
                            <motion.path
                                d="M 100 100 L 300 100 L 200 300 Z"
                                fill="none"
                                stroke="var(--electric)"
                                strokeWidth="2"
                                strokeDasharray="10 20"
                                initial={{ pathOffset: 0, pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                animate={{ pathOffset: [0, -1] }}
                                transition={{
                                    pathLength: { duration: 2, ease: "easeInOut" },
                                    pathOffset: { duration: 15, repeat: Infinity, ease: "linear" }
                                }}
                            />

                            {/* Nodes */}
                            {[
                                { cx: 100, cy: 100, label: "Input" },
                                { cx: 300, cy: 100, label: "Intelligence" },
                                { cx: 200, cy: 300, label: "Execution" }
                            ].map((node, i) => (
                                <g key={i}>
                                    <motion.circle
                                        cx={node.cx}
                                        cy={node.cy}
                                        r="40"
                                        className="fill-void stroke-electric/20"
                                        strokeWidth="1"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.8 + (i * 0.2)
                                        }}
                                    />
                                    {/* Decorative small circles in orbit */}
                                    <motion.circle
                                        cx={node.cx}
                                        cy={node.cy}
                                        r="45"
                                        fill="none"
                                        stroke="var(--electric)"
                                        strokeWidth="0.5"
                                        strokeDasharray="4 8"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.circle
                                        cx={node.cx}
                                        cy={node.cy}
                                        r="5"
                                        className="fill-electric"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.2 + (i * 0.2) }}
                                    />
                                    <motion.text
                                        x={node.cx}
                                        y={node.cy + 65}
                                        textAnchor="middle"
                                        className="fill-titanium/60 text-[10px] uppercase tracking-widest font-mono font-bold"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.5 + (i * 0.2) }}
                                    >
                                        {node.label}
                                    </motion.text>
                                </g>
                            ))}
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
