"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, BarChart3, Users, Zap, CheckCircle, PieChart, MousePointer2, CreditCard, ArrowRight, Share2 } from "lucide-react";
import { CTA } from "@/components/home/cta";
import { GrowthVisual } from "@/components/solutions/growth-visual";
import { ConversionFunnel } from "@/components/solutions/conversion-funnel";
import { AdSpendOptimizer } from "@/components/solutions/ad-spend-optimizer";
import { LtvMaximizer } from "@/components/solutions/ltv-maximizer";
import { AttributionGraph } from "@/components/solutions/attribution-graph";
import { motion } from "framer-motion";

export default function GrowthPage() {
    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="Growth Engine"
                title="Conversion & Ads"
                subtitle="Traffic is a commodity. Conversion is an art. We build the systems that turn strangers into customers."
            />

            <section className="container mx-auto px-4 md:px-6 py-20 space-y-32">
                {/* 1. Scientific Shift */}
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-3xl font-heading font-bold text-white mb-8 border-l-4 border-electric pl-6">
                            We don't just "run ads." We build the entire capture mechanism.
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="p-8 group hover:bg-white/5 transition-colors border-white/5">
                                <Target className="w-10 h-10 text-electric mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-white text-xl mb-3">Precision Targeting</h3>
                                <p className="text-titanium/70 leading-relaxed">
                                    Using first-party data to seek out high-value lookalikes, eliminating wasted spend on unqualified traffic.
                                </p>
                            </Card>
                            <Card className="p-8 group hover:bg-white/5 transition-colors border-white/5">
                                <TrendingUp className="w-10 h-10 text-electric mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-white text-xl mb-3">Scientific CRO</h3>
                                <p className="text-titanium/70 leading-relaxed">
                                    A/B testing headlines and offers to mathematically improve ROI through relentless optimization.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* 2. Conversion Science (New) */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="order-2 md:order-1 h-[400px]">
                        <ConversionFunnel />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <PieChart className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Conversion Architecture</h2>
                        <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
                            We don't just send traffic; we engineer the path to purchase. From landing page speed to checkout flow, every pixel is optimized for one goal: Conversion.
                        </p>
                        <ul className="space-y-4">
                            {["Multivariate A/B Testing", "Heatmap Behavioral Analysis", "Dynamic Offer Injectors", "Zero-Latency Lead Capture"].map((t, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/50 text-sm">
                                    <div className="w-1.5 h-1.5 bg-electric rounded-full" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 3. Algorithmic Bidding (New) */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                            <Zap className="w-6 h-6 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Predictive Allocation</h2>
                        <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
                            Our cross-platform systems automatically shift budgets to the highest-performing channels in real-time, maximizing your ROAS across Meta, Google, and LinkedIn.
                        </p>
                        <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-mono text-titanium/40 uppercase">Auto_Optimizer</span>
                                <span className="text-emerald-500 font-bold text-[10px]">ACTIVE</span>
                            </div>
                            <div className="text-white font-bold text-sm">Shift $2,400 to Google_Search_High_Intent</div>
                        </div>
                    </div>
                    <div className="h-[400px]">
                        <AdSpendOptimizer />
                    </div>
                </div>

                {/* 4. LTV Maximization (New) */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] p-12 md:p-24 overflow-hidden relative">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="h-[350px]">
                            <LtvMaximizer />
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-electric" />
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-4">Retention Engineering</h2>
                            <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                                Growth isn't just about new customers; it's about keeping them. We build automated re-engagement loops that maximize Customer Lifetime Value (LTV).
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Email Automation", "SMS Retargeting", "Churn Prediction", "Loyalty Tiering"].map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-titanium/40">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Multi-Touch Attribution (New) */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6">
                            <Share2 className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Clear Attribution</h2>
                        <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
                            Stop guessing which ads work. We implement multi-touch attribution models that track the customer journey from the first click to the final sale.
                        </p>
                        <Button className="group" asChild>
                            <a href="/contact">
                                Request a Revenue Audit
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </div>
                    <div className="h-[300px]">
                        <AttributionGraph />
                    </div>
                </div>

                {/* 6. Multi-Vector Acquisition */}
                <div className="border-t border-white/5 pt-32">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h3 className="text-3xl font-heading font-bold text-white mb-4">The Growth Grid</h3>
                        <p className="text-titanium/70">A diversified approach to market dominance. No single point of failure.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Meta Ads", icon: MousePointer2 },
                            { name: "Google Search", icon: Target },
                            { name: "LinkedIn B2B", icon: Share2 },
                            { name: "Direct Checkout", icon: CreditCard }
                        ].map((channel, i) => (
                            <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-8 text-center group hover:border-electric/30 transition-all">
                                <channel.icon className="w-8 h-8 text-electric/40 group-hover:text-electric mx-auto mb-4 transition-colors" />
                                <div className="text-white font-bold">{channel.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 7. Performance Dashboard (Visual Hook) */}
                <div className="border-t border-white/5 pt-32">
                    <div className="bg-void border border-white/10 rounded-3xl p-12 text-center overflow-hidden relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
                        <h3 className="text-3xl font-heading font-bold text-white mb-12">The Growth Loop</h3>
                        <div className="h-[400px] w-full relative mb-12">
                            <GrowthVisual />
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </main >
    );
}
