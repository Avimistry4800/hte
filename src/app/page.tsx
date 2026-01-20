import { Hero } from "@/components/home/hero";
import { Clients } from "@/components/home/clients";
import { Solutions } from "@/components/home/solutions";
import { Blueprints } from "@/components/home/blueprints";
import { Methodology } from "@/components/home/methodology";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";
import { Spotlight } from "@/components/ui/spotlight";
import { ParticleBackground } from "@/components/ui/particle-background";
import { CapabilityMatrix } from "@/components/home/capability-matrix";
import { GlobalInfrastructure } from "@/components/home/global-infrastructure";
import { SecurityBenchmark } from "@/components/home/security-benchmark";
import { EcosystemMap } from "@/components/home/ecosystem-map";
import { TechnicalSpecificationsVisual } from "@/components/home/technical-specifications-visual";
// New Strategy Imports
import { AutopilotMeaning } from "@/components/home/autopilot-meaning";
import { CoreFocus } from "@/components/home/core-focus";
import { SimpleFlow } from "@/components/home/simple-flow";
import { Differentiation } from "@/components/home/differentiation";
import { WhoIsThisFor } from "@/components/home/disqualifier";
import { EngagementModel } from "@/components/home/engagement-model";
import { SocialProof } from "@/components/home/social-proof";

import { ArrowRight, Terminal, ShieldCheck, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-void min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <Spotlight />

      {/* 1. Hero Module */}
      <Hero />

      {/* 2. Intelligence Bar */}
      <Clients />

      <div className="container mx-auto px-4 md:px-6 space-y-32 py-20 pb-40">

        {/* Strategy Layer 1: The Concept */}
        <AutopilotMeaning />
        <CoreFocus />
        <SimpleFlow />
        <Differentiation />

        {/* 3. Capability Matrix (Technical Proof) */}
        <section id="capabilities" className="relative py-20">
          <TechnicalSpecificationsVisual />
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Engineering <span className="text-electric">Specifications</span>
            </h2>
            <p className="text-titanium/70 text-lg">
              Our systems aren't just built; they're stress-tested to handle the rigorous demands of enterprise-scale logic and high-velocity growth.
            </p>
          </div>
          <div className="relative z-10">
            <CapabilityMatrix />
          </div>
        </section>

        {/* 4. The Solutions Grid */}
        <section id="solutions">
          <Solutions />
        </section>

        {/* 5. Integration Ecosystem */}
        <section id="ecosystem" className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-electric" />
            </div>
            <h2 className="text-4xl font-heading font-bold text-white mb-6 leading-tight">
              The Unified <br /> Logic Engine
            </h2>
            <p className="text-titanium/80 text-lg mb-8 leading-relaxed">
              We eliminate the friction between web presence, backend automation, and market acquisition. Every component of our ecosystem communicates through a high-frequency data mesh.
            </p>
            <div className="space-y-4">
              {[
                { label: "Bi-directional Data Flow", desc: "No silos between CRM and Ops" },
                { label: "Real-time Event Orchestration", desc: "Instant triggers across all pillars" },
                { label: "Unified Attribution Graph", desc: "Tracing growth back to first touch" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-electric/20 transition-colors">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2" />
                  <div>
                    <div className="text-white font-bold text-sm tracking-tight">{item.label}</div>
                    <div className="text-titanium/50 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <EcosystemMap />
        </section>

        {/* 6. Protocol Verification (Methodology) */}
        <section id="methodology">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">The Antigravity Protocol</h2>
            <p className="text-titanium/60 max-w-2xl mx-auto italic font-mono text-sm leading-relaxed">
              ["Audit" &rarr; "Architecture" &rarr; "Development" &rarr; "Verification" &rarr; "Deployment" &rarr; "Optimization"]
            </p>
          </div>
          <Methodology />
          <div className="mt-12 text-center">
            <Button size="lg" className="group" asChild>
              <a href="/methodology">
                Explore the Engineering Protocol
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </section>

        {/* 7. Global Infrastructure */}
        <section id="infrastructure" className="relative pt-20">
          <div className="absolute inset-0 -z-10 bg-electric/5 blur-[120px] rounded-full" />
          <GlobalInfrastructure />
        </section>

        {/* 8. Hardening & Security */}
        <section id="security" className="grid lg:grid-cols-2 gap-20 items-center">
          <SecurityBenchmark />
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-500 font-mono text-[10px] uppercase tracking-widest font-bold">
              Infrastructure Hardening: Tier 4
            </div>
            <h2 className="text-4xl font-heading font-bold text-white leading-tight">
              Enterprise-Grade <br /> Security Defenses
            </h2>
            <p className="text-titanium/80 text-lg leading-relaxed">
              Security isn't a bolt-on; it's the foundation of every line of code we ship. From SOC2-aligned protocols to zero-trust architecture, your data remains impenetrable.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Point-to-Point TLS", icon: ShieldCheck },
                { title: "DPI Traffic Audit", icon: Terminal },
                { title: "SOC2 Compliance", icon: Globe },
                { title: "Zero Data-at-Rest", icon: ShieldCheck }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500" />
                    <span className="text-white font-bold text-sm">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Strategy Layer 2: Qualification & Proof */}
        <WhoIsThisFor />
        <EngagementModel />
        <SocialProof />

        {/* 9. Case Study Blueprints */}
        <section id="blueprints">
          <Blueprints />
        </section>

        {/* 10. Technical FAQ */}
        <section id="faq">
          <FAQ />
        </section>

      </div>

      {/* 11. Final Conversion Engine */}
      <CTA />
    </main>
  );
}
