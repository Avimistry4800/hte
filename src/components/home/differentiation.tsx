"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Differentiation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Node positions (Scattered)
    const node1X = useTransform(scrollYProgress, [0, 0.5], [50, 200 + Math.cos(0) * 100]);
    const node1Y = useTransform(scrollYProgress, [0, 0.5], [50, 200 + Math.sin(0) * 100]);

    const node2X = useTransform(scrollYProgress, [0, 0.5], [350, 200 + Math.cos(Math.PI * 0.5) * 100]);
    const node2Y = useTransform(scrollYProgress, [0, 0.5], [80, 200 + Math.sin(Math.PI * 0.5) * 100]);

    const node3X = useTransform(scrollYProgress, [0, 0.5], [40, 200 + Math.cos(Math.PI) * 100]);
    const node3Y = useTransform(scrollYProgress, [0, 0.5], [320, 200 + Math.sin(Math.PI) * 100]);

    const node4X = useTransform(scrollYProgress, [0, 0.5], [340, 200 + Math.cos(Math.PI * 1.5) * 100]);
    const node4Y = useTransform(scrollYProgress, [0, 0.5], [320, 200 + Math.sin(Math.PI * 1.5) * 100]);

    const circleOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 0.1]);
    const textOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden bg-white/[0.01]">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative aspect-square max-w-md mx-auto">
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            {/* The "Outcome" Circle Loop */}
                            <motion.circle
                                cx="200"
                                cy="200"
                                r="100"
                                fill="none"
                                stroke="var(--electric)"
                                strokeWidth="1"
                                strokeDasharray="5 5"
                                style={{ opacity: circleOpacity }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />

                            <motion.text
                                x="200"
                                y="205"
                                textAnchor="middle"
                                className="fill-electric text-[12px] font-bold font-mono tracking-[0.3em]"
                                style={{ opacity: textOpacity }}
                            >
                                SYSTEMIC OUTCOMES
                            </motion.text>

                            {/* Wandering Nodes (Tasks) connecting into Outcome Loop */}
                            <motion.circle cx={node1X} cy={node1Y} r="4" className="fill-electric shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
                            <motion.circle cx={node2X} cy={node2Y} r="4" className="fill-electric shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
                            <motion.circle cx={node3X} cy={node3Y} r="4" className="fill-electric shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
                            <motion.circle cx={node4X} cy={node4Y} r="4" className="fill-electric shadow-[0_0_10px_rgba(0,243,255,0.5)]" />

                            <motion.circle
                                cx="200"
                                cy="200"
                                r="100"
                                fill="none"
                                stroke="var(--electric)"
                                strokeWidth="0.5"
                                style={{ opacity: useTransform(scrollYProgress, [0.5, 0.7], [0, 0.2]) }}
                            />
                        </svg>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight"
                        >
                            Most Tools Automate Tasks. <br />
                            <span className="text-electric">We Automate Outcomes.</span>
                        </motion.h2>

                        <div className="space-y-6">
                            {[
                                { text: "Tools break. Platforms change. What survives is structure.", secondary: false },
                                { text: "Our systems are not tied to a single platform or trend.", secondary: true },
                                { text: "They are modular, replaceable, and designed to evolve without rebuilding everything again.", secondary: true },
                                { text: "This is why agencies and founders use us behind the scenes — quietly.", secondary: false }
                            ].map((item, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className={`text-lg leading-relaxed ${item.secondary ? "text-titanium/50" : "text-titanium/80"}`}
                                >
                                    {item.text}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
