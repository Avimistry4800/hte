"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { motion } from "framer-motion";
import { Cpu, Globe, TrendingUp, CheckCircle, ArrowRight, Database, Shield, Zap, Lock, Activity } from "lucide-react";
import { Solutions } from "@/components/home/solutions";
import { AutomationVisual } from "@/components/solutions/automation-visual";
import { WebVisual } from "@/components/solutions/web-visual";
import { GrowthVisual } from "@/components/solutions/growth-visual";
import { TechStack } from "@/components/solutions/tech-stack";
import { SecurityShield } from "@/components/solutions/security-shield";
import { PerformanceMatrix } from "@/components/solutions/performance-matrix";
import { IntegrationMap } from "@/components/solutions/integration-map";

export default function SolutionsPage() {
    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="Capabilities"
                title="Engineered for Scale"
                subtitle="Our systems replace manual effort with algorithmic precision. Choose your infrastructure."
            />

            <section className="py-20 container mx-auto px-4 md:px-6 space-y-32">
                {/* Solution 1: Automation */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <Cpu className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Autonomous Workflows</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            We build backend architectures that handle CRM management, seamless fulfillment, and customer communication without human intervention.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "CRM Sync & Data Hygiene",
                                "Automated Lead Qualification",
                                "Fulfillment Logic",
                                "AI Agent Deployment"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-titanium">
                                    <CheckCircle className="w-5 h-5 text-electric mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button className="group" asChild>
                            <a href="/solutions/automation">
                                Deploy Automation
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-white/10 bg-white/5 h-[450px] relative overflow-hidden group shadow-2xl"
                    >
                        <AutomationVisual />
                    </motion.div>
                </div>

                {/* Section 4: Technical Specs (New) */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="order-2 md:order-1">
                        <TechStack />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2"
                    >
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <Activity className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Full-Stack Intelligence</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            Our solutions are built on a hardened stack designed for the 2026 technical landscape. We utilize edge computing and low-latency database architectures to guarantee uptime.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                                <div className="text-white font-bold text-sm mb-1">99.99% Uptime</div>
                                <div className="text-xs text-titanium/40">SLA Guaranteed</div>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                                <div className="text-white font-bold text-sm mb-1">Edge Cache</div>
                                <div className="text-xs text-titanium/40">Global Delivery</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Solution 2: Web Systems */}
                <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1 rounded-2xl border border-white/10 bg-white/5 h-[450px] relative overflow-hidden shadow-2xl"
                    >
                        <WebVisual />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2"
                    >
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <Globe className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">High-Performance Web</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            Your website is an asset, not a brochure. We engineer Next.js platforms optimized for speed, SEO dominance, and maximum conversion.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Next.js & React Architecture",
                                "Advanced SEO Structure",
                                "Interactive 3D/WebGL",
                                "Headless CMS Integration"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-titanium">
                                    <CheckCircle className="w-5 h-5 text-electric mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button variant="secondary" asChild>
                            <a href="/solutions/web-development">
                                View Specs
                            </a>
                        </Button>
                    </motion.div>
                </div>

                {/* Section 5: Performance Matrix (New) */}
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Algorithmic Advantage</h2>
                        <p className="text-titanium/70">
                            We don't just provide services; we install performance. Here is the technical delta between HTE systems and standard agency solutions.
                        </p>
                    </div>
                    <PerformanceMatrix />
                </div>

                {/* Solution 3: Growth & Analytics */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <TrendingUp className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Conversion Infrastructure</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            We don't just "run ads." We engineer the entire capture mechanism. From precision targeting to scientific CRO, we build systems that turn strangers into revenue.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Precision Audience Targeting",
                                "Scientific CRO & A/B Testing",
                                "Multi-Vector Acquisition",
                                "ROI-Focused Analytics"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-titanium">
                                    <CheckCircle className="w-5 h-5 text-electric mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button className="group" asChild>
                            <a href="/solutions/growth">
                                Launch Growth Engine
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-white/10 bg-white/5 h-[450px] relative overflow-hidden shadow-2xl"
                    >
                        <GrowthVisual />
                    </motion.div>
                </div>

                {/* Section 6: Security (New) */}
                <div className="grid md:grid-cols-2 gap-20 items-center bg-white/[0.02] p-12 rounded-[3rem] border border-white/5">
                    <div className="order-2">
                        <SecurityShield />
                    </div>
                    <div className="order-1">
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Enterprise Resilience</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            Automation requires trust. We implement SOC-2 compliant logic and end-to-end encryption for every internal database and public-facing portal.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Encrypted Data Pipelines",
                                "Automated Threat Detection",
                                "Zero-Downtime Patching",
                                "Identity & Access Control"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-center text-titanium/70 text-sm">
                                    <Lock className="w-4 h-4 text-electric/50" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 7: Integration Map (New) */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <Zap className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Seamless Ecosystem</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            We don't build silos. We build nervous systems. Every solution we deploy integrates natively with your existing tools—Shopify, HubSpot, Salesforce, and beyond.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Shopify", "HubSpot", "Salesforce", "Zapier", "Make", "Stripe"].map(t => (
                                <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-titanium/40 border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl border border-white/10 hover:border-electric/30 transition-colors shadow-2xl">
                        <IntegrationMap />
                    </div>
                </div>

                {/* Solution 8: Solutions Grid (Existing but as part of the flow) */}
                <div className="pt-16 border-t border-white/5">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">The Multi-Vector Grid</h2>
                        <p className="text-titanium/50">Unified solutions for fragmented business problems.</p>
                    </div>
                    <Solutions />
                </div>
            </section>
        </main >
    );
}
