"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Filter } from "lucide-react";
import { CTA } from "@/components/home/cta";
import Link from "next/link";
import { blueprints } from "@/lib/blueprints-data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All Systems", "Automation", "Web Infrastructure", "Growth"];

export default function BlueprintsPage() {
    const [activeCategory, setActiveCategory] = useState("All Systems");

    const filteredBlueprints = activeCategory === "All Systems"
        ? blueprints
        : blueprints.filter(b => b.category === activeCategory);

    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="System Archives"
                title="Blueprints"
                subtitle="Detailed records of deployed infrastructure. We document every architecture we build."
            />

            <section className="container mx-auto px-4 md:px-6 py-12">
                {/* Filter Bar */}
                <div className="flex flex-wrap items-center gap-4 mb-16 border-b border-white/5 pb-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? "secondary" : "ghost"}
                                onClick={() => setActiveCategory(cat)}
                                className={`transition-all duration-300 ${activeCategory === cat
                                    ? "bg-electric/10 border-electric/30 text-white"
                                    : "text-titanium/40 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                    <div className="ml-auto flex items-center gap-2 text-titanium/40 text-xs font-mono uppercase tracking-widest">
                        <Filter className="w-3 h-3 text-electric" />
                        <span>Filter Archives</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-24 min-h-[600px] items-start">
                    <AnimatePresence mode="popLayout">
                        {filteredBlueprints.map((item) => (
                            <motion.div
                                key={item.slug}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <Link href={`/blueprints/${item.slug}`}>
                                    <Card className="group cursor-pointer hover:border-electric/50 transition-all duration-500 bg-void border-white/10 p-0 overflow-hidden h-full flex flex-col hover:shadow-[0_0_50px_-12px_rgba(0,240,255,0.15)]">
                                        <div className="aspect-video bg-white/5 relative overflow-hidden">
                                            {/* Technical Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center text-titanium/10 font-mono text-xl font-bold tracking-[0.3em] uppercase text-center px-8 z-10 pointer-events-none group-hover:text-electric/20 transition-colors duration-500">
                                                [{item.title}]
                                            </div>

                                            {/* Background Image */}
                                            {item.image && (
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    priority
                                                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                                />
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent z-20 group-hover:opacity-40 transition-opacity" />

                                            {/* Grid Scanline Effect */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] z-30 opacity-20 pointer-events-none" />
                                        </div>

                                        <div className="p-8 relative z-40 flex-grow flex flex-col bg-void/80 backdrop-blur-sm">
                                            <div className="flex justify-between items-start mb-6">
                                                <span className="text-electric text-[10px] font-mono uppercase tracking-[0.2em] border border-electric/20 px-3 py-1 rounded-full bg-electric/5">
                                                    {item.category}
                                                </span>
                                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-electric/50 group-hover:bg-electric/5 transition-all duration-500">
                                                    <ArrowUpRight className="w-4 h-4 text-titanium/40 group-hover:text-electric transition-colors" />
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric transition-colors duration-500 font-heading leading-tight tracking-tight">
                                                {item.title}
                                            </h3>

                                            <p className="text-titanium/50 mb-10 text-sm leading-relaxed flex-grow line-clamp-2 italic">
                                                "{item.description}"
                                            </p>

                                            <div className="flex gap-12 border-t border-white/5 pt-8 mt-auto">
                                                {item.metrics.map((metric, i) => (
                                                    <div key={i} className="space-y-1">
                                                        <p className="text-[9px] text-titanium/30 uppercase tracking-[0.2em] font-mono">{metric.label}</p>
                                                        <p className="font-mono text-xl text-electric font-bold">{metric.value}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="text-center py-12 border-t border-white/5">
                    <p className="text-titanium/40 mb-6 font-mono text-[10px] uppercase tracking-[0.3em]">
                        Additional architecture records are classified.
                    </p>
                    <Button variant="ghost" asChild className="border border-white/10 text-titanium/60 hover:text-electric hover:border-electric/50 transition-all px-8 py-6 rounded-none uppercase font-mono text-xs tracking-[0.2em] bg-transparent group">
                        <Link href="/contact">
                            Request Agency Clearance
                            <ArrowUpRight className="ml-2 w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </section>

            <CTA />
        </main>
    );
}
