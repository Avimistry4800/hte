import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Cpu, Globe, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { getBlueprintBySlug, blueprints } from "@/lib/blueprints-data";
import { notFound } from "next/navigation";
import { CTA } from "@/components/home/cta";

export default async function BlueprintDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blueprint = getBlueprintBySlug(slug);

    if (!blueprint) {
        notFound();
    }

    return (
        <main className="bg-void min-h-screen">
            <div className="container mx-auto px-4 md:px-6 pt-12">
                <Link href="/blueprints" className="inline-flex items-center text-titanium/50 hover:text-electric transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Archives
                </Link>
            </div>

            <PageHeader
                tagline={blueprint.category}
                title={blueprint.title}
                subtitle={blueprint.tagline}
            />

            {/* Metrics Overview */}
            <section className="container mx-auto px-4 md:px-6 -mt-20 relative z-20 mb-32">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {blueprint.metrics.map((metric, i) => (
                        <Card key={i} className="p-8 bg-void/50 backdrop-blur-xl border-white/10 hover:border-electric/30 transition-colors">
                            <p className="text-[10px] text-titanium/40 uppercase tracking-widest mb-2">{metric.label}</p>
                            <p className="font-mono text-3xl text-electric font-bold">{metric.value}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Technical Narrative */}
            <section className="container mx-auto px-4 md:px-6 mb-40">
                <div className="grid lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-20">
                        {/* The Challenge */}
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-8 border-b border-white/5 pb-4">
                                The Challenge
                            </h2>
                            <p className="text-titanium/80 text-lg leading-relaxed mb-6">
                                {blueprint.challenge}
                            </p>
                        </div>

                        {/* The Solution */}
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-8 border-b border-white/5 pb-4">
                                The Solution
                            </h2>
                            <p className="text-titanium/80 text-lg leading-relaxed mb-10">
                                {blueprint.solution}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {blueprint.results.map((result, i) => (
                                    <div key={i} className="flex gap-4 p-6 bg-white/5 border border-white/5 rounded-2xl">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                                        <span className="text-titanium/70 text-sm leading-relaxed">{result}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        {/* Tech Stack Card */}
                        <Card className="p-8 bg-white/5 border-white/5 rounded-3xl sticky top-32">
                            <h3 className="text-white font-bold mb-8 flex items-center gap-3">
                                <Cpu className="w-5 h-5 text-electric" />
                                Technical Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {blueprint.stack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-void border border-white/10 rounded-full text-titanium/50 text-[10px] uppercase tracking-widest font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5">
                                <p className="text-[10px] text-titanium/40 uppercase tracking-widest mb-6">Security Verification</p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-emerald-500/50">
                                        <Shield className="w-4 h-4" />
                                        <span className="text-[10px] font-mono">SOC2 COMPLIANT ARCHITECTURE</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-emerald-500/50">
                                        <Zap className="w-4 h-4" />
                                        <span className="text-[10px] font-mono">EDGE-OPTIMIZED DEPLOYMENT</span>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full mt-12 group" asChild>
                                <Link href="/contact">
                                    Request Full Schematic
                                    <Globe className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                                </Link>
                            </Button>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Next Blueprint Suggestion */}
            <section className="container mx-auto px-4 md:px-6 py-20 border-t border-white/5">
                <div className="flex justify-between items-center">
                    <p className="text-titanium/40 font-mono text-xs uppercase tracking-widest">End of Blueprint_{blueprint.slug.toUpperCase()}</p>
                    <Link href="/blueprints" className="text-electric hover:underline font-mono text-xs uppercase tracking-widest">View All Case Studies</Link>
                </div>
            </section>

            <CTA />
        </main>
    );
}

export async function generateStaticParams() {
    return blueprints.map((blueprint) => ({
        slug: blueprint.slug,
    }));
}
