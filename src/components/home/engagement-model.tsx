"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 1500;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.round(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const milestones = [
    { title: "Design", desc: "Mapping your business logic into automation rules." },
    { title: "Deploy", desc: "Setting up infrastructure and AI layers." },
    { title: "Maintain", desc: "Scaling systems and optimizing outcomes." },
];

export function EngagementModel() {
    return (
        <section className="py-32 relative overflow-hidden bg-white/[0.01]">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold font-heading text-white mb-8 leading-tight"
                        >
                            We Build. You Control. <br />
                            <span className="text-electric">Systems Run.</span>
                        </motion.h2>

                        <p className="text-lg text-titanium/70 mb-12 leading-relaxed max-w-xl">
                            We don’t sell software licenses. We design, deploy, and maintain automation systems tailored to your business. Engagement usually starts with a short pilot. If it works, we scale it. No lock-ins. No nonsense.
                        </p>

                        <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-12">
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">
                                    <Counter value={7} suffix="-Day" />
                                </div>
                                <div className="text-[10px] uppercase tracking-widest text-titanium/40 font-bold">Pilot Phase</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">
                                    <Counter value={100} suffix="%" />
                                </div>
                                <div className="text-[10px] uppercase tracking-widest text-titanium/40 font-bold">Control Layer</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">
                                    <Counter value={3} suffix="+" />
                                </div>
                                <div className="text-[10px] uppercase tracking-widest text-titanium/40 font-bold">Daily Cycles</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric/50 to-transparent" />

                        <div className="space-y-12 relative">
                            {/* Vertical Timeline Line */}
                            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/5">
                                <motion.div
                                    className="absolute top-0 left-0 w-full bg-electric origin-top"
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                />
                            </div>

                            {milestones.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.2 }}
                                    className="relative pl-10"
                                >
                                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full border border-white/10 bg-void flex items-center justify-center">
                                        <div className="w-1 h-1 rounded-full bg-electric shadow-[0_0_10px_rgba(0,243,255,1)]" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-1">{m.title}</h4>
                                    <p className="text-titanium/50 text-sm leading-relaxed">{m.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
