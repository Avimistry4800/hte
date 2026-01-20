"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, PlayCircle, ShieldCheck, Mail, MessageSquare } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

export function CTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-40 relative overflow-hidden">
            {/* Gravity Pull Effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-electric/5 rounded-full blur-[200px] pointer-events-none"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-10"
                >
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black font-heading text-white leading-[1.1] tracking-tight"
                        >
                            Ready to Put Your <br />
                            <span className="text-electric">Business on Autopilot?</span>
                        </motion.h2>
                        <p className="text-xl text-titanium/60 max-w-2xl mx-auto leading-relaxed">
                            If you’re serious about automation — not experimentation —
                            start with a controlled setup. We’ll show you the system.
                            You decide how far to take it.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
                        <Magnetic>
                            <Button
                                size="lg"
                                className="h-16 px-10 text-lg group bg-white text-void hover:bg-white/90 relative overflow-hidden"
                                asChild
                            >
                                <a href="/contact">
                                    Request Access
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />

                                    <motion.div
                                        animate={{
                                            left: ["-100%", "200%"]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear",
                                            repeatDelay: 3
                                        }}
                                        className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-electric/20 to-transparent skew-x-12"
                                    />
                                </a>
                            </Button>
                        </Magnetic>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 text-titanium/50 hover:text-white transition-colors group font-bold tracking-widest text-xs uppercase"
                        >
                            <PlayCircle className="w-5 h-5 text-electric/50 group-hover:text-electric transition-colors" />
                            View Demo Workflow
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Workflow Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-void/90 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-white/[0.03] border border-white/10 rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-12"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-8 right-8 p-2 rounded-full bg-white/5 hover:bg-white/10 text-titanium/50 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-electric/10 border border-electric/20 rounded-full text-electric text-[10px] uppercase font-bold tracking-[0.2em] mb-4">
                                            Architecture Demo
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4">The Pipeline</h3>
                                        <p className="text-titanium/50 leading-relaxed text-sm">
                                            Our ecosystem connects every touchpoint into a unified logic mesh.
                                            From data ingestion to final human handoff.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { icon: Mail, label: "Cold Outreach", status: "Automated" },
                                            { icon: MessageSquare, label: "Response Handling", status: "AI Augmented" },
                                            { icon: ShieldCheck, label: "System Security", status: "Hardened" },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                                                <div className="flex items-center gap-3">
                                                    <item.icon className="w-5 h-5 text-electric/60" />
                                                    <span className="text-white font-bold text-sm">{item.label}</span>
                                                </div>
                                                <span className="text-[10px] font-mono text-electric font-bold uppercase">{item.status}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="aspect-square bg-void/50 rounded-3xl border border-white/5 p-8 flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-1.5">
                                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                            </div>
                                            <div className="text-[10px] font-mono text-titanium/30 uppercase">Terminal Output</div>
                                        </div>
                                        <div className="space-y-4 font-mono text-[11px]">
                                            <div className="text-emerald-500 animate-pulse">{"> Initializing protocol..."}</div>
                                            <div className="text-titanium/40">{"> Validating data mesh..."}</div>
                                            <div className="text-titanium/40">{"> Deploying intelligence layers..."}</div>
                                            <div className="text-electric font-bold">{"> SYSTEM READY. TARGETING: GLOBAL MARKET"}</div>
                                        </div>
                                    </div>
                                    <Button className="w-full" onClick={() => setIsModalOpen(false)}>
                                        Close Preview
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
