"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Cpu, Zap, ArrowRight, Settings, Share2, GitBranch, Terminal, ShieldCheck, Database, Brain } from "lucide-react";
import { CTA } from "@/components/home/cta";
import { AutomationVisual } from "@/components/solutions/automation-visual";
import { WorkflowMap } from "@/components/solutions/workflow-map";
import { AiAgentVisual } from "@/components/solutions/ai-agent-visual";
import { DataSynchronizer } from "@/components/solutions/data-synchronizer";
import { ResilienceMonitor } from "@/components/solutions/resilience-monitor";
import { motion } from "framer-motion";

export default function AutomationPage() {
    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="System Architecture"
                title="Business Automation"
                subtitle="Remove the human bottleneck. We build self-driving backend infrastructure."
            />

            <section className="container mx-auto px-4 md:px-6 py-20 space-y-32">
                {/* 1. Core Logic Duo */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="p-8 bg-white/5 border border-white/5 rounded-3xl group hover:border-electric/30 transition-all">
                            <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center mb-6">
                                <Share2 className="w-6 h-6 text-electric" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Orchestrated CRM</h3>
                            <p className="text-titanium/70 leading-relaxed">
                                We turn your CRM from a digital rolodex into a living business engine. Every deal move triggers a cascade of automated events across your entire tech stack.
                            </p>
                        </div>
                        <div className="p-8 bg-white/5 border border-white/5 rounded-3xl group hover:border-electric/30 transition-all">
                            <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center mb-6">
                                <Settings className="w-6 h-6 text-electric" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Fulfillment Logic</h3>
                            <p className="text-titanium/70 leading-relaxed">
                                Eliminate the "onboarding gap." Auto-generate contracts, initialize project boards, and invite team members the millisecond a payment is processed.
                            </p>
                        </div>
                    </div>
                    <div className="bg-electric/5 border border-white/5 rounded-[3rem] relative overflow-hidden flex flex-col items-center justify-center p-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-electric/10 blur-[100px] -z-10" />
                        <div className="w-full h-[400px]">
                            <AutomationVisual />
                        </div>
                    </div>
                </div>

                {/* 2. Workflow Orchestration (New) */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="order-2 md:order-1 h-[400px]">
                        <WorkflowMap />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6">
                            <GitBranch className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Logic Graph Optimization</h2>
                        <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
                            We map complex business decisions into executable logic trees. Our workflows handle thousands of conditions without a single point of failure.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Multi-branch Conditional Logic",
                                "API-First Data Transformation",
                                "Error-State Auto-Correction",
                                "Serverless Webhook Handlers"
                            ].map((t, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/50 text-sm font-mono">
                                    <div className="w-1 h-1 bg-electric rounded-full" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 3. AI Agent Integration (New) */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                            <Brain className="w-6 h-6 text-purple-400" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Autonomous Intelligence</h2>
                        <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
                            Beyond simple rules. We integrate LLM-powered agents that can read emails, categorize data, and make qualified decisions on your behalf.
                        </p>
                        <div className="p-4 bg-white/5 border border-white/5 rounded-2xl font-mono text-[10px] text-titanium/40">
                            <div>agent_qualifier_v2.process(new_lead)</div>
                            <div className="text-emerald-500 mt-1">✓ Lead Qualified: Priority A+ [Reason: High LTV potential]</div>
                        </div>
                    </div>
                    <div className="h-[400px]">
                        <AiAgentVisual />
                    </div>
                </div>

                {/* 4. Data Synchronicity (New) */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] p-12 md:p-24 overflow-hidden relative">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="h-[300px]">
                            <DataSynchronizer />
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                                <Database className="w-6 h-6 text-emerald-500" />
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-4">The Unified Source</h2>
                            <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                                No more data silos. We build bi-directional sync engines that ensure your ERP, CRM, and Marketing apps are always in perfect alignment.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Two-Way Sync", "Conflict Resolution", "Webhook Listeners", "Schema Mapping"].map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-titanium/40">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Resilience & Recovery (New) */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="h-[400px]">
                        <ResilienceMonitor />
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <ShieldCheck className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Bulletproof Infrastructure</h2>
                        <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
                            Automation is only valuable if it doesn't break. We build fail-safe systems with automated retries, error alerting, and redundancy nodes.
                        </p>
                        <Button className="group" asChild>
                            <a href="/contact">
                                Evaluate System Reliability
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </div>

                {/* 6. Integration Ecosystem */}
                <div className="border-t border-white/5 pt-32">
                    <h3 className="text-center text-titanium/30 font-mono uppercase tracking-[0.3em] mb-16 text-xs">Supported Infrastructure</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center opacity-60">
                        {["Make.com", "n8n.io", "Zapier", "Salesforce", "HubSpot", "OpenAI", "Stripe"].map((tech) => (
                            <div key={tech} className="text-lg font-heading font-bold text-white hover:text-electric transition-colors cursor-default text-center">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 7. The Blueprint Process (Timeline) */}
                <div className="border-t border-white/5 pt-32">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl font-heading font-bold text-white mb-16 text-center">The System Architect Blueprint</h3>
                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-white/10">
                            {[
                                { title: "Phase 1: Process Mapping", desc: "We diagram every manual touchpoint to identify logical bottlenecks." },
                                { title: "Phase 2: Schema Design", desc: "Architecting the bi-directional data flow between disparate apps." },
                                { title: "Phase 3: Logic Implementation", desc: "Building the core automation engines and AI agent loops." },
                                { title: "Phase 4: Resilience Testing", desc: "Stress-testing every branch for failure scenarios and edge cases." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-void shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <div className="w-1.5 h-1.5 bg-electric rounded-full group-hover:scale-150 transition-transform" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/[0.03] p-8 rounded-3xl border border-white/5 hover:border-electric/20 transition-all">
                                        <div className="text-electric font-mono text-[10px] uppercase tracking-widest mb-2 font-bold">Step 0{i + 1}</div>
                                        <div className="font-bold text-white text-xl mb-3">{item.title}</div>
                                        <div className="text-titanium/70 leading-relaxed text-sm">{item.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </main >
    );
}
