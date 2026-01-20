"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, ArrowRightLeft, CheckCircle2 } from "lucide-react";

const testimonials = [
    {
        quote: "Antigravity protocols didn't just automate our outreach; they rebuilt our entire growth model from the ground up.",
        author: "Marcus Thorne",
        role: "Head of Growth, Globex Systems",
        avatar: "MT"
    },
    {
        quote: "The 'Approval Gate' is what won us over. We have full control while the engine does the heavy lifting.",
        author: "Sarah Chen",
        role: "Founder, Zenith Consulting",
        avatar: "SC"
    }
];

const logos = ["Acme", "Globex", "Soylent", "Zenith", "Initech", "Umbrella", "Cyberdyne", "Weyland"];

export function SocialProof() {
    const [comparison, setComparison] = useState<"before" | "after">("before");

    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
                    >
                        System <span className="text-electric">Verification</span>
                    </motion.h2>
                    <p className="text-titanium/50 font-mono text-sm uppercase tracking-widest">Case Study Analysis // Verified Outputs</p>
                </div>

                {/* Marquee Logos */}
                <div className="mb-32 overflow-hidden relative py-8 border-y border-white/5 bg-white/[0.01]">
                    <div className="flex gap-20 whitespace-nowrap animate-marquee">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex gap-20 items-center"
                        >
                            {[...logos, ...logos, ...logos].map((logo, i) => (
                                <span key={i} className="text-xl font-bold font-heading text-titanium/10 tracking-tighter italic select-none">
                                    {logo.toUpperCase()}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Testimonials */}
                    <div className="space-y-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-colors"
                            >
                                <Quote className="absolute top-6 right-8 w-10 h-10 text-electric/5 group-hover:text-electric/10 transition-colors" />
                                <p className="text-titanium/80 italic mb-8 text-lg leading-relaxed relative z-10">"{t.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center text-electric font-bold text-sm border border-electric/20">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">{t.author}</div>
                                        <div className="text-titanium/40 text-[10px] uppercase tracking-widest font-bold font-mono">{t.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Before/After Comparison */}
                    <div className="relative p-8 md:p-12 bg-white/[0.02] rounded-[40px] border border-white/10 overflow-hidden">
                        <div className="flex justify-between items-center mb-12">
                            <h3 className="text-xl font-bold text-white font-mono tracking-tight">Efficacy Test</h3>
                            <div className="flex p-1 bg-void/50 rounded-xl border border-white/10">
                                <button
                                    onClick={() => setComparison("before")}
                                    className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold rounded-lg transition-all ${comparison === "before" ? "bg-white/10 text-white shadow-lg" : "text-titanium/40 hover:text-titanium/70"}`}
                                >
                                    Manual
                                </button>
                                <button
                                    onClick={() => setComparison("after")}
                                    className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold rounded-lg transition-all ${comparison === "after" ? "bg-electric text-void shadow-[0_0_20px_rgba(0,243,255,0.4)]" : "text-titanium/40 hover:text-titanium/70"}`}
                                >
                                    Autopilot
                                </button>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-3xl overflow-hidden bg-void/50 border border-white/5 flex items-center justify-center group">
                            <AnimatePresence mode="wait">
                                {comparison === "before" ? (
                                    <motion.div
                                        key="before"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        className="text-center space-y-4 px-8"
                                    >
                                        <div className="text-4xl font-black text-titanium/10 tracking-widest">CHAOS</div>
                                        <p className="text-titanium/40 text-xs font-mono">
                                            UNSTABLE OUTPUT / HIGH FRICTION
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="after"
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="text-center space-y-4 px-8"
                                    >
                                        <div className="text-4xl font-black text-electric tracking-widest drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">PRECISION</div>
                                        <p className="text-electric/60 text-xs font-mono">
                                            STABLE SCALE / ZERO DECAY
                                        </p>
                                        <div className="pt-6 flex justify-center gap-1.5">
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{
                                                        height: [4, 12, 4],
                                                        opacity: [0.3, 1, 0.3]
                                                    }}
                                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                                    className="w-1 bg-electric rounded-full"
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-void/40 border border-white/5 group hover:border-electric/20 transition-colors">
                                <div className="text-[10px] uppercase font-bold tracking-widest text-titanium/30 mb-2">Throughput</div>
                                <div className={`text-2xl font-bold font-heading transition-all ${comparison === 'after' ? 'text-emerald-500' : 'text-white'}`}>
                                    {comparison === 'after' ? '3.4x' : '1.0x'}
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-void/40 border border-white/5 group hover:border-electric/20 transition-colors">
                                <div className="text-[10px] uppercase font-bold tracking-widest text-titanium/30 mb-2">Error Margin</div>
                                <div className={`text-2xl font-bold font-heading transition-all ${comparison === 'after' ? 'text-emerald-500' : 'text-white'}`}>
                                    {comparison === 'after' ? '<0.01%' : '12%'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
