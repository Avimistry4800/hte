"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Search, PenTool, Zap } from "lucide-react";

const steps = [
    {
        title: "01. Audit",
        description: "We deconstruct your current operations. We identify manual bottlenecks, data silos, and friction points that are bleeding revenue.",
        icon: Search,
    },
    {
        title: "02. Architect",
        description: "We design a custom infrastructure. No templates. We engineer a system layout that integrates your CRM, API, and ad-tech stack.",
        icon: PenTool,
    },
    {
        title: "03. Automate",
        description: "We deploy the code. Your business shifts from manual labor to code-based leverage. You scale without adding headcount.",
        icon: Zap,
    },
];

export function Methodology() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        The Core Protocol
                    </h2>
                    <p className="text-titanium/70 text-lg">
                        We don't guess. We follow a mathematical process to systemize your growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-void/10 border-white/10 backdrop-blur-sm p-8 hover:border-electric/50 transition-colors">
                                <div className="mb-6 p-4 bg-electric/10 w-fit rounded-lg">
                                    <step.icon className="w-8 h-8 text-electric" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-heading">{step.title}</h3>
                                <p className="text-titanium/70 leading-relaxed">
                                    {step.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
