"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Server, Cloud, ArrowRight, Database, Shield, Zap, GitBranch, Activity, Lock, Gauge, Network } from "lucide-react";
import { CTA } from "@/components/home/cta";
import { DeploymentPipeline } from "@/components/solutions/deployment-pipeline";
import { ResilienceMonitor } from "@/components/solutions/resilience-monitor";
import { motion } from "framer-motion";

export default function InfrastructurePage() {
    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="Cloud Infrastructure"
                title="Enterprise Infrastructure"
                subtitle="Scalable, secure, and resilient infrastructure built for modern businesses."
            />

            <section className="container mx-auto px-4 md:px-6 py-20 space-y-32">
                {/* 1. Hero Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                            <Server className="w-6 h-6 text-electric" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Built for Scale</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            We architect cloud infrastructure that grows with your business. From serverless functions to containerized microservices, we build systems that handle millions of requests without breaking a sweat.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Cloud-Native Architecture",
                                "Auto-Scaling Infrastructure",
                                "Zero-Downtime Deployments",
                                "Global CDN Distribution"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-titanium">
                                    <CheckCircle className="w-5 h-5 text-electric mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button className="group" asChild>
                            <a href="/contact">
                                Architect Your Infrastructure
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
                        <DeploymentPipeline />
                    </motion.div>
                </div>

                {/* 2. Infrastructure Stack */}
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Modern Tech Stack</h2>
                        <p className="text-titanium/70">
                            We leverage cutting-edge technologies to build infrastructure that's fast, reliable, and cost-effective.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Cloud,
                                title: "Cloud Platforms",
                                desc: "Multi-cloud deployments across AWS, Google Cloud, and Azure with intelligent load balancing.",
                                color: "blue"
                            },
                            {
                                icon: Database,
                                title: "Database Architecture",
                                desc: "Optimized database design with replication, sharding, and automated backups for maximum reliability.",
                                color: "emerald"
                            },
                            {
                                icon: GitBranch,
                                title: "CI/CD Pipelines",
                                desc: "Automated testing, building, and deployment pipelines that ship code to production in minutes.",
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
                                <Card className="p-8 bg-white/5 border-white/5 hover:border-electric/30 transition-all h-full group">
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

                {/* 3. Performance Metrics */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                            <Gauge className="w-6 h-6 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Performance Guaranteed</h2>
                        <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
                            We don't just build infrastructure—we engineer performance. Every system is optimized for speed, reliability, and cost-efficiency.
                        </p>
                        <div className="space-y-4">
                            {[
                                { metric: "99.99% Uptime", desc: "SLA-backed availability" },
                                { metric: "<50ms Latency", desc: "Global edge network" },
                                { metric: "Auto-Scaling", desc: "Handle traffic spikes" },
                                { metric: "24/7 Monitoring", desc: "Proactive issue detection" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-white/5 border border-white/5 rounded-xl">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2" />
                                    <div>
                                        <div className="text-white font-bold">{item.metric}</div>
                                        <div className="text-titanium/60 text-sm">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                        <div className="space-y-6">
                            {[
                                { label: "Request Throughput", value: "10M+/day", color: "blue" },
                                { label: "Data Processed", value: "500TB+", color: "purple" },
                                { label: "Global Regions", value: "15+", color: "emerald" }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                                    <div className="text-titanium/40 text-xs font-mono uppercase tracking-widest mb-2">{stat.label}</div>
                                    <div className={`text-${stat.color}-400 font-bold text-3xl`}>{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Security & Compliance */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] p-12 md:p-24">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="order-2 md:order-1">
                            <div className="h-[400px]">
                                <ResilienceMonitor />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-electric" />
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-4">Enterprise Security</h2>
                            <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                                Security isn't an afterthought—it's built into every layer of our infrastructure. From encryption at rest to DDoS protection, we've got you covered.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "End-to-End Encryption",
                                    "DDoS Protection",
                                    "Automated Security Patches",
                                    "SOC 2 Compliance",
                                    "Identity & Access Management",
                                    "Intrusion Detection Systems"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-titanium/70 text-sm">
                                        <Lock className="w-4 h-4 text-electric/50" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. DevOps & Automation */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                            <GitBranch className="w-6 h-6 text-purple-400" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">DevOps Excellence</h2>
                        <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
                            We implement industry-leading DevOps practices that enable rapid iteration without sacrificing stability. Ship features faster, with confidence.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Infrastructure as Code (IaC)",
                                "Containerization & Orchestration",
                                "Blue-Green Deployments",
                                "Automated Rollbacks"
                            ].map((t, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/50 text-sm font-mono">
                                    <div className="w-1 h-1 bg-purple-400 rounded-full" />
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-void border border-white/10 rounded-2xl p-8 font-mono text-xs">
                        <div className="flex items-center gap-2 text-electric mb-6">
                            <Activity className="w-4 h-4" />
                            <span>DEPLOYMENT PIPELINE</span>
                        </div>
                        <div className="space-y-3">
                            {[
                                { step: "Code Push", status: "completed", time: "2m ago" },
                                { step: "Unit Tests", status: "completed", time: "1m 45s ago" },
                                { step: "Build Docker Image", status: "completed", time: "1m 20s ago" },
                                { step: "Integration Tests", status: "completed", time: "45s ago" },
                                { step: "Deploy to Staging", status: "completed", time: "30s ago" },
                                { step: "Smoke Tests", status: "running", time: "in progress" },
                                { step: "Deploy to Production", status: "pending", time: "waiting" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${item.status === 'completed' ? 'bg-emerald-500' : item.status === 'running' ? 'bg-yellow-500 animate-pulse' : 'bg-titanium/20'}`} />
                                        <span className="text-titanium/80">{item.step}</span>
                                    </div>
                                    <span className="text-titanium/40 text-[10px]">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 6. Monitoring & Observability */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="order-2 md:order-1">
                        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-titanium/60 text-sm">CPU Usage</span>
                                    <span className="text-emerald-500 font-bold">23%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[23%]" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-titanium/60 text-sm">Memory Usage</span>
                                    <span className="text-blue-500 font-bold">41%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[41%]" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-titanium/60 text-sm">Network I/O</span>
                                    <span className="text-purple-500 font-bold">67%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 w-[67%]" />
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                    <div className="text-emerald-500 text-xs font-mono flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                        All systems operational
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                            <Activity className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Real-Time Monitoring</h2>
                        <p className="text-titanium/80 text-lg mb-6 leading-relaxed">
                            Complete visibility into your infrastructure. Track performance metrics, set up custom alerts, and get notified before issues become problems.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Prometheus", "Grafana", "DataDog", "New Relic", "Sentry", "PagerDuty"].map(t => (
                                <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-titanium/40">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 7. Technology Partners */}
                <div className="border-t border-white/5 pt-32">
                    <h3 className="text-center text-titanium/30 font-mono uppercase tracking-[0.3em] mb-16 text-xs">Infrastructure Partners</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center opacity-60">
                        {["AWS", "Google Cloud", "Azure", "Vercel", "Cloudflare", "DigitalOcean"].map((tech) => (
                            <div key={tech} className="text-lg font-heading font-bold text-white hover:text-electric transition-colors cursor-default text-center">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 8. Implementation Timeline */}
                <div className="border-t border-white/5 pt-32">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl font-heading font-bold text-white mb-16 text-center">Infrastructure Deployment Process</h3>
                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-white/10">
                            {[
                                { title: "Phase 1: Architecture Design", desc: "We design a scalable infrastructure blueprint tailored to your specific needs and growth projections." },
                                { title: "Phase 2: Infrastructure Setup", desc: "Provisioning cloud resources, configuring networks, and setting up security layers." },
                                { title: "Phase 3: CI/CD Implementation", desc: "Building automated deployment pipelines for rapid, reliable releases." },
                                { title: "Phase 4: Monitoring & Optimization", desc: "Implementing observability tools and continuously optimizing for performance and cost." }
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
        </main>
    );
}
