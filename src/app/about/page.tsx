"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Grid } from "@/components/ui/grid";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Hammer, Ruler, Zap, Shield, Globe, Cpu, Code, Layers, Rocket } from "lucide-react";
import { CTA } from "@/components/home/cta";
import { MetricGrid } from "@/components/about/metric-grid";
import { ValueSystem } from "@/components/about/value-system";
import { TerminalVisual } from "@/components/about/terminal-visual";

export default function AboutPage() {
    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="Who We Are"
                title="Engineers, Not Marketers"
                subtitle="We approach business growth as an engineering problem. We build systems that are testable, scalable, and predictable."
            />

            {/* Section 1: Philosophy Overview */}
            <section className="container mx-auto px-4 md:px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-invert prose-lg max-w-none text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                            The HTE Philosophy
                        </h2>
                        <p className="text-titanium/80 leading-relaxed text-balance">
                            Most agencies operate on chaos. They throw ideas at the wall and hope something sticks.
                            High-Tech Enterprise operates on <strong>structure</strong>. We believe that a business
                            without a system is just a job for the founder.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Mission Control (Terminal) */}
            <section className="container mx-auto px-4 md:px-6 py-20 bg-white/[0.02] border-y border-white/5">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                            Mission Control: Why We Exist
                        </h3>
                        <p className="text-titanium/70 text-lg mb-8">
                            HTE was born out of a frustration with "digital vanity." We saw too many businesses with beautiful websites that produced zero revenue, and too many automated systems that were brittle and unscalable.
                        </p>
                        <div className="space-y-4">
                            {[
                                "We build for performance first.",
                                "We treat code as a tier-1 business asset.",
                                "We optimize for the bottom line, not just clicks."
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-center text-titanium/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-electric shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <TerminalVisual />
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Engineering Tenets (Values) */}
            <section className="container mx-auto px-4 md:px-6 py-32">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        Our Engineering Tenets
                    </h2>
                    <p className="text-titanium/50 font-mono tracking-widest uppercase text-sm">
                        The Core Directives of HTE Ops
                    </p>
                </div>
                <ValueSystem />
            </section>

            {/* Section 4: Operational Metrics */}
            <section className="container mx-auto px-4 md:px-6 py-20">
                <div className="bg-white/5 rounded-[3rem] p-12 md:p-20 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-12 text-center">
                            The Engine in Numbers
                        </h3>
                        <MetricGrid />
                    </div>
                </div>
            </section>

            {/* Section 5: Global Infrastructure */}
            <section className="container mx-auto px-4 md:px-6 py-32 border-t border-white/5 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        {/* Custom Animated Network Map Placeholder */}
                        <div className="w-full aspect-square max-w-[500px] mx-auto relative flex items-center justify-center">
                            <div className="absolute inset-0 border-[30px] border-electric/5 rounded-full animate-ping [animation-duration:3s]" />
                            <div className="absolute inset-4 border-[20px] border-electric/10 rounded-full animate-ping [animation-duration:4s]" />
                            <div className="absolute inset-10 border-[10px] border-electric/20 rounded-full animate-ping [animation-duration:5s]" />

                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute inset-0 border border-white/10 rounded-full border-dashed"
                            />

                            <Globe className="w-24 h-24 text-electric relative z-10" />

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 p-2 bg-void border border-white/10 rounded-lg shadow-2xl flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] text-titanium/70 font-mono">NODE_ACTIVE: LONDON</span>
                            </div>
                            <div className="absolute bottom-10 right-0 p-2 bg-void border border-white/10 rounded-lg shadow-2xl flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] text-titanium/70 font-mono">NODE_ACTIVE: DHAKA</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                            Global Infrastructure
                        </h3>
                        <p className="text-titanium/70 text-lg leading-relaxed mb-8">
                            We operate on a geographically distributed model, utilizing edge-network deployment protocols to ensure that every system we build is instantly available anywhere on the globe with sub-100ms latency.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                                <Cpu className="w-6 h-6 text-electric mb-4" />
                                <div className="text-white font-bold mb-1 font-mono">Edge Compute</div>
                                <div className="text-xs text-titanium/50">Vercel & Cloudflare</div>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                                <Shield className="w-6 h-6 text-electric mb-4" />
                                <div className="text-white font-bold mb-1 font-mono">Secure Tunnel</div>
                                <div className="text-xs text-titanium/50">SSL v3.0 Encryption</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Operational Excellence (Quality Standards) */}
            <section className="container mx-auto px-4 md:px-6 py-20 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                        Operational Excellence
                    </h3>
                    <p className="text-titanium/70">
                        We don't just write code; we engineer assets. Every platform is built to rigorous standards of performance and security.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Code, title: "Clean Architecture", desc: "SOLID principles applied to every module we build." },
                        { icon: Layers, title: "Modern Stack", desc: "Next.js 15, Tailwind v4, and Headless CMS infrastructure." },
                        { icon: Rocket, title: "CI/CD Protocols", desc: "Automated testing and deployment quality gates." }
                    ].map((item, i) => (
                        <Card key={i} className="p-8 group hover:bg-white/5 transition-all">
                            <item.icon className="w-8 h-8 text-electric mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                            <p className="text-titanium/60 text-sm leading-relaxed">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Section 7: Ecosystem Partners */}
            <section className="py-32 border-t border-white/5 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 mb-12">
                    <p className="text-center text-titanium/50 font-mono text-sm uppercase tracking-widest">Global Tech Partners</p>
                </div>
                <div className="flex gap-16 animate-marquee whitespace-nowrap opacity-30 hover:opacity-100 transition-opacity duration-700 cursor-default">
                    {["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Node.js", "PostgreSQL", "OpenAI", "Vercel", "n8n", "Make", "Stripe", "HubSpot", "Sanity"].map((tech, i) => (
                        <span key={i} className="text-4xl font-heading font-bold text-white">{tech}</span>
                    ))}
                    {["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Node.js", "PostgreSQL", "OpenAI", "Vercel", "n8n", "Make", "Stripe", "HubSpot", "Sanity"].map((tech, i) => (
                        <span key={`dup-${i}`} className="text-4xl font-heading font-bold text-white">{tech}</span>
                    ))}
                </div>
            </section>

            {/* Section 8: Final Statement */}
            <section className="container mx-auto px-4 md:px-6 py-40 border-t border-white/5 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 tracking-tighter max-w-5xl mx-auto">
                        We are current state architects building the systems of <span className="text-electric italic">tomorrow.</span>
                    </h2>
                    <p className="text-titanium/50 font-mono uppercase tracking-[0.4em] text-sm">
                        High-Tech Enterprise
                    </p>
                </motion.div>
            </section>

            <CTA />
        </main>
    );
}
