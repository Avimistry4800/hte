"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Is this a standard marketing agency?",
        answer: "No. We are an engineering firm. We build systems, not campaigns. While agencies rent you attention, we build you an infrastructure that owns it.",
    },
    {
        question: "How long does deployment take?",
        answer: "A standard protocol implementation varies by complexity. Single-module automations deploy in <14 days. Full ecosystem architecture typically requires 4-6 weeks.",
    },
    {
        question: "Do I need technical knowledge?",
        answer: "Zero. We build the engine; you sit in the driver's seat. We provide full dashboard access and training, but the code runs invisibly in the background.",
    },
    {
        question: "What is the cost of entry?",
        answer: "We frame high-ticket partnerships. Our systems are investments designed to return 10x multiples on efficiency and conversion. Consult an Architect for a custom quote.",
    },
    {
        question: "Do you offer post-deployment support?",
        answer: "All systems come with a warranty and maintenance protocol. We monitor uptime and performance to ensure your automation never decays.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
                    >
                        System <span className="text-electric">Queries</span>
                    </motion.h2>
                    <p className="text-titanium/50 font-mono text-sm uppercase tracking-widest text-center">
                        Parameters & Specifications
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="relative">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={cn(
                                    "w-full flex justify-between items-center p-6 text-left focus:outline-none group rounded-2xl border transition-all duration-300",
                                    openIndex === i
                                        ? "bg-white/[0.04] border-electric/30 shadow-[0_0_30px_rgba(0,243,255,0.05)]"
                                        : "bg-transparent border-white/5 hover:bg-white/[0.02] hover:border-white/10"
                                )}
                            >
                                <span className={cn(
                                    "text-lg font-bold transition-colors",
                                    openIndex === i ? "text-electric" : "text-white group-hover:text-white/80"
                                )}>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    className={cn(
                                        "transition-colors",
                                        openIndex === i ? "text-electric" : "text-titanium/30"
                                    )}
                                >
                                    <ChevronDown className="w-5 h-5" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-titanium/70 leading-relaxed text-sm pt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
