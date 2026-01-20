"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { blueprints } from "@/lib/blueprints-data";
import Image from "next/image";

export function Blueprints() {
    // Show first 2 blueprints on homepage
    const featuredBlueprints = blueprints.slice(0, 2);

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                            System Blueprints
                        </h2>
                        <p className="text-titanium/70 text-lg">
                            Deployment records. Real-world applications of our infrastructure methodology.
                        </p>
                    </div>
                    <Button variant="secondary" asChild>
                        <Link href="/blueprints">View All Archives</Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {featuredBlueprints.map((item, index) => (
                        <Link key={item.slug} href={`/blueprints/${item.slug}`}>
                            <Card className="group cursor-pointer hover:border-electric/50 transition-all bg-void border-white/10 p-0 overflow-hidden h-full flex flex-col">
                                <div className="aspect-video bg-white/5 relative overflow-hidden">
                                    {/* Background Image */}
                                    {item.image && (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                        />
                                    )}
                                    <div className="absolute inset-0 flex items-center justify-center text-titanium/10 font-mono text-2xl font-bold tracking-[0.2em] uppercase text-center px-4 z-10">
                                        [{item.title}]
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-60 z-20" />
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-electric text-[10px] font-mono uppercase tracking-widest border border-electric/20 px-2 py-1 rounded">
                                            {item.category}
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 text-titanium/50 group-hover:text-electric transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric transition-colors font-heading leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-titanium/60 mb-8 text-sm leading-relaxed flex-grow">
                                        {item.description}
                                    </p>
                                    <div className="flex gap-10 border-t border-white/5 pt-6 mt-auto">
                                        {item.metrics.map((metric, i) => (
                                            <div key={i}>
                                                <p className="text-[10px] text-titanium/40 uppercase tracking-widest mb-1">{metric.label}</p>
                                                <p className="font-mono text-lg text-electric font-bold">{metric.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
