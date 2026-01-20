"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Lock, Unlock, CheckCircle2, ChevronDown } from "lucide-react";

const steps = [
    {
        title: "Input",
        desc: "Your target market, offer, and rules.",
        detail: "Define the parameters of your campaign, ideal customer profiles, and the specific value proposition you want to deliver."
    },
    {
        title: "Intelligence Layer",
        desc: "AI analyzes businesses, detects gaps, and prepares personalized outreach drafts.",
        detail: "Our proprietary AI engine research each prospect individually, identifying pain points and crafting hyper-personalized messages."
    },
    {
        title: "Approval Gate",
        desc: "Nothing goes out without your approval. Control stays with you.",
        detail: "You maintain 100% control. Review, edit, or reject any message before it's sent. The system learns from your feedback.",
        isGate: true
    },
    {
        title: "Execution",
        desc: "Messages are sent, follow-ups run, replies are tracked automatically.",
        detail: "Automated distribution across multiple channels with intelligent timing and sequence management to maximize response rates."
    },
    {
        title: "Human Takeover",
        desc: "When a lead is hot, humans step in. Automation steps out.",
        detail: "The moment a prospect shows genuine interest, your team is notified to jump in and close the deal. High-tech meets high-touch."
    }
];

function Step({ step, index, progress, isLast }: { step: any, index: number, progress: any, isLast: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isApproved, setIsApproved] = useState(false);

    return (
        <div className="relative pl-12 pb-12 last:pb-0">
            {/* Connection Line */}
            {!isLast && (
                <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-white/5">
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-electric origin-top"
                        style={{ scaleY: progress }}
                    />
                </div>
            )}

            {/* Node */}
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-white/10 bg-void z-10 flex items-center justify-center transition-colors duration-500 overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-electric"
                    style={{ opacity: progress }}
                />
                {step.isGate && (
                    <motion.div
                        animate={{ scale: isApproved ? 0 : 1 }}
                        className="relative z-20"
                    >
                        <Lock className="w-2.5 h-2.5 text-white" />
                    </motion.div>
                )}
            </div>

            {/* Content Container */}
            <div
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white/5 border-white/10 shadow-[0_0_30px_rgba(0,243,255,0.05)]' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-mono text-titanium/30">0{index + 1}</span>
                        <h3 className="text-xl font-bold text-white group-hover:text-electric transition-colors">
                            {step.title}
                        </h3>
                    </div>
                    <div className="flex items-center gap-3">
                        {step.isGate && isApproved && (
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="flex items-center gap-2 px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-500 text-[10px] uppercase font-bold tracking-wider"
                            >
                                <CheckCircle2 className="w-3 h-3" />
                                Approved
                            </motion.div>
                        )}
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className="text-titanium/30"
                        >
                            <ChevronDown className="w-4 h-4" />
                        </motion.div>
                    </div>
                </div>

                <p className="text-titanium/70 leading-relaxed">
                    {step.desc}
                </p>

                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden"
                >
                    <div className="pt-4 pb-2 text-titanium/50 text-sm border-t border-white/5 mt-4">
                        {step.detail}
                        {step.isGate && !isApproved && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsApproved(true);
                                }}
                                className="mt-4 flex items-center gap-2 px-4 py-2 border border-electric/30 rounded-lg text-electric hover:bg-electric/10 transition-colors text-[10px] font-bold uppercase tracking-widest"
                            >
                                <Unlock className="w-3 h-3" />
                                Simulate Approval
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export function SimpleFlow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} className="py-32 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
                    >
                        A Simple Flow. <br />
                        <span className="text-electric">Built for Scale.</span>
                    </motion.h2>
                </div>

                <div className="max-w-2xl mx-auto">
                    {steps.map((step, i) => {
                        // Calculate progress for each step's line
                        const start = i / steps.length;
                        const end = (i + 1) / steps.length;
                        // Use useTransform to get progress for this specific step
                        const stepProgress = useTransform(scrollYProgress, [start, end], [0, 1]);

                        return (
                            <Step
                                key={i}
                                step={step}
                                index={i}
                                progress={stepProgress}
                                isLast={i === steps.length - 1}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
