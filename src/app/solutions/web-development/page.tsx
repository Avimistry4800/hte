"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Code, Layers, Smartphone, Search, Zap, Activity, ShieldCheck, Rocket, Terminal, Server, ArrowRight } from "lucide-react";
import { CTA } from "@/components/home/cta";
import { WebVisual } from "@/components/solutions/web-visual";
import { FrameworkOrchestrator } from "@/components/solutions/framework-orchestrator";
import { SeoGraph } from "@/components/solutions/seo-graph";
import { CoreWebVitals } from "@/components/solutions/core-web-vitals";
import { DeploymentPipeline } from "@/components/solutions/deployment-pipeline";
import { motion } from "framer-motion";

export default function WebDevPage() {
    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="Digital Infrastructure"
                title="High-Performance Web"
                subtitle="Speed is a feature. We engineer Next.js platforms that dominate search rankings and convert traffic at scale."
            />

            <section className="container mx-auto px-4 md:px-6 py-20 space-y-32">
                {/* 1. Value Trio */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Layers, title: "Headless Architecture", desc: "Decoupled content and frontend for maximum speed and security. We use Sanity or Strapi CMS paired with Next.js." },
                        { icon: Code, title: "Component Systems", desc: "Reusable, scalable UI libraries that ensure brand consistency and rapid feature deployment across your entire product line." },
                        { icon: Smartphone, title: "Mobile-First 3D", desc: "WebGL and Framer Motion interactions that feel native-app smooth, optimized for the highest-performing mobile handsets." }
                    ].map((item, i) => (
                        <Card key={i} className="p-8 hover:bg-white/5 transition-colors group">
                            <item.icon className="w-10 h-10 text-electric mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-titanium/70">{item.desc}</p>
                        </Card>
                    ))}
                </div>

                {/* 2. The Speed Advantage */}
                <div className="grid md:grid-cols-2 gap-12 items-center bg-white/5 rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 blur-[100px] -z-10" />
                    <div>
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <Zap className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">
                            The Speed Advantage
                        </h2>
                        <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
                            Google ranks fast sites. Users buy from fast sites. We optimize for Core Web Vitals from line one of code, ensuring sub-second response times globally.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-void p-6 rounded-2xl border border-white/5 text-center">
                                <div className="text-3xl font-bold text-electric mb-1">100</div>
                                <div className="text-[10px] font-mono text-titanium/40 uppercase tracking-widest">Performance</div>
                            </div>
                            <div className="bg-void p-6 rounded-2xl border border-white/5 text-center">
                                <div className="text-3xl font-bold text-electric mb-1">0.1s</div>
                                <div className="text-[10px] font-mono text-titanium/40 uppercase tracking-widest">LCP</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[400px] w-full relative">
                        <WebVisual />
                    </div>
                </div>

                {/* 3. Framework Orchestration (New) */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="order-2 md:order-1 h-[400px]">
                        <FrameworkOrchestrator />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <Server className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Distributed Orchestration</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            We utilize Next.js 15 for its advanced caching patterns and server-side components. Your data is fetched at the edge, reducing Round Trip Time (RTT) to near-zero.
                        </p>
                        <div className="space-y-4">
                            {["Static Route Optimization", "Streaming SSR Support", "Edge Network Logic", "Atomic Revalidation"].map((t, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/70 text-sm">
                                    <div className="w-1.5 h-1.5 bg-electric rounded-full" />
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. SEO Architecture (New) */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <Search className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Search Dominance</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            Websites are built for crawling robots first. We implement semantic HTML5, automated JSON-LD schema, and lightning-fast sitemaps to ensure near-instant indexing.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["JSON-LD", "Dynamic OG Tags", "Alt-Text AI", "Link Sanitization"].map(t => (
                                <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-titanium/40">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="h-[400px]">
                        <SeoGraph />
                    </div>
                </div>

                {/* 5. Performance Engineering (New) */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/[0.02] to-transparent pointer-events-none" />
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="h-[300px]">
                            <CoreWebVitals />
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:border-electric transition-colors border border-transparent">
                                <Activity className="w-6 h-6 text-electric" />
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-4">Vital Engineering</h2>
                            <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
                                We hit the perfect scores on LCP, FID, and CLS. No layout shifts, no blocking scripts, and zero unused CSS. Just pure technical performance.
                            </p>
                            <Button className="group" asChild>
                                <a href="/contact">
                                    Analyze Your Specs
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 6. Deployment Protocols (New) */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="order-2 md:order-1 h-[400px]">
                        <DeploymentPipeline />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <Rocket className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Continuous Evolution</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            Zero-downtime deployment pipelines. Every code change is automatically built, verified for quality, and distributed to the global edge network in seconds.
                        </p>
                        <div className="p-4 bg-void border border-white/5 rounded-xl font-mono text-xs text-titanium/40">
                            <div>$ git push origin production</div>
                            <div className="text-emerald-500 mt-1">✓ Deployment Initialized...</div>
                        </div>
                    </div>
                </div>

                {/* 7. Technical Specifications */}
                <div className="border-t border-white/5 pt-32">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                                    <ShieldCheck className="w-6 h-6 text-electric" /> Security Hardening
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        { t: "CSRF & XSS Protection", d: "Sanitized data handling at every layer." },
                                        { t: "DDoS Mitigation", d: "Deeply protected by Vercel edge firewall." },
                                        { t: "Atomic Rollbacks", d: "Instant recovery from any production error." }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <div className="text-white text-sm font-bold mb-1">{item.t}</div>
                                            <div className="text-titanium/50 text-xs">{item.d}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                                    <Terminal className="w-6 h-6 text-electric" /> Developer Experience
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        { t: "Strict TypeScript", d: "Type-safe codebases that eliminate runtime errors." },
                                        { t: "Atomic Design", d: "Scaling UI systems that grow with your company." },
                                        { t: "Headless Ease", d: "Empowering your team with modern CMS control." }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <div className="text-white text-sm font-bold mb-1">{item.t}</div>
                                            <div className="text-titanium/50 text-xs">{item.d}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8. Our Production Stack */}
                <div className="border-t border-white/5 pt-32">
                    <h3 className="text-2xl font-heading font-bold text-white mb-12 text-center">Production-Grade Stack</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { name: "Next.js 15", role: "Framework" },
                            { name: "React 19", role: "Library" },
                            { name: "Vercel", role: "Edge Computing" },
                            { name: "Stripe", role: "Payments" },
                            { name: "Sanity", role: "Headless CMS" }
                        ].map((tech, i) => (
                            <Card key={i} className="p-6 text-center hover:bg-white/5 transition-all border-white/5 hover:border-electric/30">
                                <div className="text-electric font-bold mb-1 text-sm">{tech.name}</div>
                                <div className="text-titanium/40 text-[10px] uppercase tracking-wider">{tech.role}</div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </main >
    );
}
