"use client";

import { Grid } from "@/components/ui/grid";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    Cpu,
    Globe,
    TrendingUp,
    Bot,
    Database,
    ShoppingCart,
    LayoutTemplate,
    BarChart3,
    Layers
} from "lucide-react";

const solutions = [
    // Automation Layer
    {
        title: "Workflow Architecture",
        description: "End-to-end mapping and automation of business logic using n8n for maximum control and scalability.",
        icon: Layers,
        href: "/solutions/automation"
    },
    {
        title: "AI Agent Deployment",
        description: "Custom LLM bots for customer support, internal knowledge retrieval, and lead qualification.",
        icon: Bot,
        href: "/solutions/automation"
    },
    {
        title: "CRM Synchronization",
        description: "Unified data truth. Bi-directional sync between your CRM, marketing, and fulfillment tools.",
        icon: Database,
        href: "/solutions/automation"
    },

    // Web Layer
    {
        title: "Headless Commerce",
        description: "Shopify/WooCommerce backends powered by ultra-fast Next.js frontends.",
        icon: ShoppingCart,
        href: "/solutions/web-development"
    },
    {
        title: "High-Performance Web",
        description: "SEO-dominant corporate sites with 100/100 Lighthouse scores and Core Web Vitals.",
        icon: Globe,
        href: "/solutions/web-development"
    },
    {
        title: "SaaS Product MVP",
        description: "Rapid development of functional Minimum Viable Products for startups and enterprise tools.",
        icon: LayoutTemplate,
        href: "/solutions/web-development"
    },

    // Growth Layer
    {
        title: "Conversion Infrastructure",
        description: "Funnel engineering designed to capture, nurture, and convert traffic into revenue.",
        icon: TrendingUp,
        href: "/solutions/growth"
    },
    {
        title: "Data Analytics",
        description: "Server-side tracking and custom dashboards to visualize actual ROI without data loss.",
        icon: BarChart3,
        href: "/solutions/growth"
    },
    {
        title: "Conversion-Driven Advertising",
        description: "Paid traffic systems engineered for ROAS. We verify every dollar spent against revenue generated.",
        icon: TrendingUp,
        href: "/solutions/growth"
    },
];

export function Solutions() {
    return (
        <section className="py-24 relative">
            {/* Background glow just for this section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electric/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        The Full Specifications
                    </h2>
                    <p className="text-titanium/70 text-lg">
                        We don't just "do IT". We deploy specific, high-leverage modules to upgrade your business operating system.
                    </p>
                </div>

                <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                        >
                            <a href={item.href} className="block h-full">
                                <Card className="h-full flex flex-col group hover:bg-white/10 transition-colors cursor-pointer border-white/5 hover:border-electric/30 p-6 bg-void/20 backdrop-blur-sm">
                                    <div className="mb-4 p-3 bg-electric/10 w-fit rounded-lg group-hover:bg-electric/20 transition-colors">
                                        <item.icon className="w-6 h-6 text-electric" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-electric transition-colors">{item.title}</h3>
                                    <p className="text-sm text-titanium/70 leading-relaxed">{item.description}</p>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </Grid>
            </div>
        </section>
    );
}
