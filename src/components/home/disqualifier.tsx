"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, X } from "lucide-react";

const forYou = [
    { text: "You sell services or B2B solutions", example: "Agencies, SaaS founders, or consulting firms." },
    { text: "You want predictable client acquisition", example: "Moving away from referral-only growth." },
    { text: "You value systems over hacks", example: "Building long-term assets, not quick tricks." },
    { text: "You want control, not black-box automation", example: "Reviewing every output before it goes live." },
];

const notForYou = [
    { text: "You want instant guaranteed results", example: "Automation is a process, not a magic button." },
    { text: "You rely on spam or shortcuts", example: "We prioritize reputation and deliverability." },
    { text: "You don’t want to review or approve anything", example: "Control is a core pillar of our protocol." },
    { text: "You are looking for cheap tools, not systems", example: "Our architecture is an enterprise-grade investment." },
];

export function WhoIsThisFor() {
    const [mode, setMode] = useState<"for" | "not">("for");

    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-heading text-white mb-8"
                    >
                        This Is Not for Everyone
                    </motion.h2>

                    {/* Toggle */}
                    <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10 relative">
                        <motion.div
                            className="absolute inset-y-1 bg-electric rounded-full"
                            initial={false}
                            animate={{
                                x: mode === "for" ? 0 : "100%",
                                width: mode === "for" ? "120px" : "150px",
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <button
                            onClick={() => setMode("for")}
                            className={`relative px-6 py-2 text-sm font-bold transition-colors z-10 ${mode === "for" ? "text-void" : "text-titanium/50 hover:text-titanium"}`}
                            style={{ width: "120px" }}
                        >
                            Qualified
                        </button>
                        <button
                            onClick={() => setMode("not")}
                            className={`relative px-6 py-2 text-sm font-bold transition-colors z-10 ${mode === "not" ? "text-void" : "text-titanium/50 hover:text-titanium"}`}
                            style={{ width: "150px" }}
                        >
                            Not For You
                        </button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                    {/* For You Column */}
                    <motion.div
                        animate={{
                            opacity: mode === "for" ? 1 : 0.3,
                            scale: mode === "for" ? 1.02 : 1,
                        }}
                        className={`p-8 rounded-3xl border transition-all duration-500 ${mode === "for" ? "bg-white/[0.03] border-electric/20 shadow-[0_0_40px_rgba(0,243,255,0.05)]" : "bg-transparent border-white/5"}`}
                    >
                        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                <Check className="w-4 h-4 text-emerald-500" />
                            </span>
                            This is for you if:
                        </h3>
                        <div className="space-y-6">
                            {forYou.map((item, i) => (
                                <div key={i} className="group relative">
                                    <div className="flex gap-4">
                                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <p className="text-white font-medium text-sm leading-relaxed">{item.text}</p>
                                            <p className="text-titanium/30 text-[10px] italic group-hover:text-titanium/60 transition-colors uppercase tracking-wider">
                                                {item.example}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Not For You Column */}
                    <motion.div
                        animate={{
                            opacity: mode === "not" ? 1 : 0.3,
                            scale: mode === "not" ? 1.02 : 1,
                        }}
                        className={`p-8 rounded-3xl border transition-all duration-500 ${mode === "not" ? "bg-white/[0.03] border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.05)]" : "bg-transparent border-white/5"}`}
                    >
                        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                                <X className="w-4 h-4 text-red-500" />
                            </span>
                            This is not for you if:
                        </h3>
                        <div className="space-y-6">
                            {notForYou.map((item, i) => (
                                <div key={i} className="group relative">
                                    <div className="flex gap-4">
                                        <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <p className="text-white font-medium text-sm leading-relaxed">{item.text}</p>
                                            <p className="text-titanium/30 text-[10px] italic group-hover:text-titanium/60 transition-colors uppercase tracking-wider">
                                                {item.example}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
