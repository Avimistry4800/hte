"use client";

import { PageHeader } from "@/components/ui/page-header";
import { CTA } from "@/components/home/cta";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    Brain,
    Search,
    DraftingCompass,
    Code2,
    Network,
    ShieldCheck,
    Rocket,
    TrendingUp
} from "lucide-react";
import { ProcessRadar } from "@/components/methodology/process-radar";
import { LogicFlow } from "@/components/methodology/logic-flow";
import { CodePulse } from "@/components/methodology/code-pulse";
import { DeploymentOrbit } from "@/components/methodology/deployment-orbit";

export default function MethodologyPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <main className="bg-void min-h-screen" ref={containerRef}>
            {/* Sticky Scroll Progress */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-16 left-0 right-0 h-1 bg-electric origin-left z-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            />
            <PageHeader
                tagline="The Antigravity Protocol"
                title="Systematic Velocity"
                subtitle="We don't rely on luck. We adhere to a rigid, 8-stage engineering process that guarantees scalable outcomes."
            />

            <div className="container mx-auto px-4 md:px-6 py-20 relative">
                {/* Background Ambient Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[10%] -left-[10%] w-[40%] h-[20%] bg-electric/5 blur-[120px] rounded-full rotate-12" />
                    <div className="absolute top-[40%] -right-[10%] w-[40%] h-[20%] bg-electric/5 blur-[120px] rounded-full -rotate-12" />
                    <div className="absolute top-[70%] -left-[10%] w-[40%] h-[20%] bg-electric/5 blur-[120px] rounded-full rotate-12" />
                </div>
                {/* Central Timeline Spine (Desktop) */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-electric/30 to-transparent hidden md:block" />

                <MethodologyStep
                    number="01"
                    title="Alignment"
                    desc="We align on your North Star. We strip away the vanity metrics and define what 'winning' actually looks like for your P&L."
                    icon={Brain}
                    alignment="left"
                />

                <MethodologyStep
                    number="02"
                    title="Audit"
                    desc="Deep-dive analysis of your current stack, bottlenecks, and data leaks. We find the inefficiencies you didn't know existed."
                    icon={Search}
                    visual={<ProcessRadar />}
                    alignment="right"
                />

                <MethodologyStep
                    number="03"
                    title="Architecture"
                    desc="We don't write a single line of code without a blueprint. We map the entire data schema and user flow before build."
                    icon={DraftingCompass}
                    visual={<LogicFlow />}
                    alignment="left"
                />

                <MethodologyStep
                    number="04"
                    title="Development"
                    desc="High-velocity engineering sprints. We build modular, atomic components ensuring code reusability and speed."
                    icon={Code2}
                    visual={<CodePulse />}
                    alignment="right"
                />

                <MethodologyStep
                    number="05"
                    title="Integration"
                    desc="Connecting the nervous system. APIs, webhooks, and automation pipelines are fused to create a unified data brain."
                    icon={Network}
                    alignment="left"
                />

                <MethodologyStep
                    number="06"
                    title="Validation"
                    desc="Rigourous testing. We simulate high-traffic loads and edge cases to ensure the system bends but never breaks."
                    icon={ShieldCheck}
                    alignment="right"
                />

                <MethodologyStep
                    number="07"
                    title="Deployment"
                    desc="The launch sequence. Zero-downtime deployment to edge networks ensures your global audience sees the update instantly."
                    icon={Rocket}
                    visual={<DeploymentOrbit />}
                    alignment="left"
                />

                <MethodologyStep
                    number="08"
                    title="Evolution"
                    desc="Launch is just Day 1. We monitor, analyze, and iterate based on real-world user data to compound growth."
                    icon={TrendingUp}
                    alignment="right"
                />
            </div>

            <CTA />
        </main>
    );
}

function MethodologyStep({ number, title, desc, icon: Icon, visual, alignment }: { number: string, title: string, desc: string, icon: any, visual?: React.ReactNode, alignment: "left" | "right" }) {
    const isLeft = alignment === "left";

    return (
        <div className={`flex flex-col md:flex-row items-center justify-between mb-32 relative ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>

            {/* Center Node */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-void border border-electric flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)] mt-[2.5rem] md:mt-0">
                <div className="w-2 h-2 bg-electric rounded-full animate-pulse" />
            </div>

            {/* Content Side */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full md:w-[45%] pl-16 md:pl-0 ${isLeft ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}
            >
                <div className={`flex items-center gap-4 mb-4 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                    <span className="font-mono text-electric text-xl font-bold tracking-tighter">{number}</span>
                    <h3 className="text-3xl font-heading font-bold text-white tracking-tight">{title}</h3>
                </div>
                <p className="text-titanium/70 text-lg leading-relaxed">{desc}</p>
            </motion.div>

            {/* Visual Side */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: isLeft ? 5 : -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className={`w-full md:w-[45%] mt-12 md:mt-0 pl-16 md:pl-0 flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
                <div className="relative group w-full max-w-[320px]">
                    <div className="absolute inset-0 bg-electric/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="aspect-square rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-center justify-center relative backdrop-blur-xl group-hover:border-electric/30 transition-all duration-700 shadow-2xl overflow-hidden">
                        {/* Internal Animated Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:10px_10px] opacity-20" />

                        {visual ? (
                            <div className="w-full h-full relative z-10 p-8">
                                {visual}
                            </div>
                        ) : (
                            <Icon className="w-12 h-12 md:w-16 md:h-16 text-titanium/30 group-hover:text-electric transition-all duration-700 group-hover:scale-110 relative z-10" />
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
