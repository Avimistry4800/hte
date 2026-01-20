"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, useState } from "react";
import { Target, Zap, MessageSquare, Database, BarChart3, BrainCircuit } from "lucide-react";

interface ServiceCardProps {
    title: string;
    icon: any;
    delay: number;
}

function ServiceCard({ title, icon: Icon, delay }: ServiceCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-electric/30 transition-colors"
        >
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-electric" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {title}
                </h3>
            </div>

            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-[-1px] rounded-[inherit] bg-gradient-to-r from-electric/50 via-void to-electric/50 animate-gradient-xy blur-[1px]" />
            </div>
        </motion.div>
    );
}

const services = [
    { title: "Lead sourcing & qualification", icon: Target },
    { title: "WhatsApp & Email outreach systems", icon: Zap },
    { title: "Follow-ups that don’t feel robotic", icon: MessageSquare },
    { title: "CRM pipelines & deal tracking", icon: Database },
    { title: "Client reporting & alerts", icon: BarChart3 },
    { title: "AI-assisted decision layers", icon: BrainCircuit },
];

export function CoreFocus() {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
                    >
                        We Don’t Automate Everything. <br />
                        <span className="text-electric">We Automate What Makes Money.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-titanium/70 text-lg"
                    >
                        Every automation is built around one goal: more revenue with less manual effort.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <ServiceCard
                            key={i}
                            title={service.title}
                            icon={service.icon}
                            delay={0.1 * i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
