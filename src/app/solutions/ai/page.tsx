"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Brain, Sparkles, ArrowRight, Zap, MessageSquare, BarChart3, Shield, Cpu, Network } from "lucide-react";
import { CTA } from "@/components/home/cta";
import { AiAgentVisual } from "@/components/solutions/ai-agent-visual";
import { motion } from "framer-motion";

export default function AIPage() {
    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="Artificial Intelligence"
                title="AI-Powered Automation"
                subtitle="Deploy intelligent agents that think, learn, and execute on your behalf."
            />

            <section className="container mx-auto px-4 md:px-6 py-20 space-y-32">
                {/* 1. Hero Section with AI Visual */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                            <Brain className="w-6 h-6 text-purple-400" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Beyond Simple Automation</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            We don't just automate tasks—we deploy AI agents that understand context, make decisions, and adapt to changing conditions in real-time.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Natural Language Processing",
                                "Intelligent Decision Making",
                                "Contextual Understanding",
                                "Continuous Learning"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-titanium">
                                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button className="group bg-purple-500 hover:bg-purple-600" asChild>
                            <a href="/contact">
                                Deploy AI Agents
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-purple-500/20 bg-purple-500/5 h-[450px] relative overflow-hidden shadow-2xl"
                    >
                        <AiAgentVisual />
                    </motion.div>
                </div>

                {/* 2. AI Capabilities Grid */}
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Intelligent Capabilities</h2>
                        <p className="text-titanium/70">
                            Our AI systems handle complex tasks that traditionally required human judgment.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MessageSquare,
                                title: "Conversational AI",
                                desc: "Deploy chatbots and voice agents that understand intent, maintain context, and provide intelligent responses.",
                                color: "blue"
                            },
                            {
                                icon: BarChart3,
                                title: "Predictive Analytics",
                                desc: "Machine learning models that forecast trends, identify opportunities, and optimize decision-making.",
                                color: "emerald"
                            },
                            {
                                icon: Sparkles,
                                title: "Content Generation",
                                desc: "AI-powered content creation for emails, reports, product descriptions, and marketing materials.",
                                color: "purple"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="p-8 bg-white/5 border-white/5 hover:border-purple-500/30 transition-all h-full group">
                                    <div className={`w-12 h-12 bg-${item.color}-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-titanium/70 leading-relaxed">{item.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. AI Agent Workflow */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <Network className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Multi-Agent Orchestration</h2>
                        <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
                            Deploy specialized AI agents that work together as a coordinated system. Each agent handles specific tasks while communicating seamlessly with others.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Lead Qualification Agent",
                                "Customer Support Agent",
                                "Data Analysis Agent",
                                "Content Creation Agent"
                            ].map((t, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/50 text-sm font-mono">
                                    <div className="w-1 h-1 bg-purple-400 rounded-full" />
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                        <div className="space-y-4 font-mono text-xs">
                            <div className="flex items-center gap-2 text-purple-400">
                                <Cpu className="w-4 h-4" />
                                <span>AI AGENT PIPELINE</span>
                            </div>
                            <div className="space-y-2 text-titanium/60">
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-500">✓</span>
                                    <span>Incoming lead detected</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-500">✓</span>
                                    <span>Qualification agent analyzing...</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-500">✓</span>
                                    <span>Score: 92/100 (High Priority)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-500">✓</span>
                                    <span>Auto-assigned to sales team</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-500">✓</span>
                                    <span>Personalized email sent</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500">⟳</span>
                                    <span>Monitoring engagement...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Security & Compliance */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] p-12 md:p-24">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-emerald-500" />
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-4">Secure & Compliant AI</h2>
                            <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                                Our AI systems are built with enterprise-grade security and compliance frameworks. Every decision is logged, auditable, and transparent.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["SOC 2 Compliant", "GDPR Ready", "Encrypted Processing", "Audit Trails"].map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-titanium/40">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            {[
                                { label: "Data Privacy", value: "100%" },
                                { label: "Model Accuracy", value: "94.7%" },
                                { label: "Response Time", value: "<200ms" }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                                    <div className="text-titanium/40 text-xs font-mono uppercase tracking-widest mb-2">{stat.label}</div>
                                    <div className="text-white font-bold text-3xl">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. Integration Ecosystem */}
                <div className="border-t border-white/5 pt-32">
                    <h3 className="text-center text-titanium/30 font-mono uppercase tracking-[0.3em] mb-16 text-xs">AI Platform Integrations</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center opacity-60">
                        {["OpenAI", "Anthropic", "Google AI", "Hugging Face", "LangChain", "Pinecone"].map((tech) => (
                            <div key={tech} className="text-lg font-heading font-bold text-white hover:text-purple-400 transition-colors cursor-default text-center">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. Use Cases */}
                <div className="border-t border-white/5 pt-32">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl font-heading font-bold text-white mb-16 text-center">Real-World Applications</h3>
                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-white/10">
                            {[
                                { title: "Customer Support Automation", desc: "AI agents handle 80% of support tickets with human-level understanding and empathy." },
                                { title: "Lead Qualification & Scoring", desc: "Intelligent systems analyze leads in real-time and prioritize based on conversion probability." },
                                { title: "Content Personalization", desc: "Dynamic content generation tailored to each user's preferences and behavior patterns." },
                                { title: "Predictive Maintenance", desc: "AI monitors systems and predicts failures before they occur, preventing downtime." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-void shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:scale-150 transition-transform" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/[0.03] p-8 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-all">
                                        <div className="text-purple-400 font-mono text-[10px] uppercase tracking-widest mb-2 font-bold">Use Case 0{i + 1}</div>
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
        </main>
    );
}
