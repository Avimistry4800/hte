"use client";

import { useState, useEffect } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, CheckCircle2, Loader2, Terminal, ShieldAlert, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendContactEmail } from "@/app/actions/contact";
import { NerveCenter } from "@/components/contact/nerve-center";
import { GlitchText } from "@/components/contact/glitch-text";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
    const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        scope: "Business Automation",
        brief: ""
    });

    useEffect(() => {
        if (status === "sending") {
            const logs = [
                "Initializing secure handshake...",
                "Bypassing legacy firewall...",
                "Syncing with Neural Core...",
                "Encrypting transmission packet...",
                "Uploading brief to protocol..."
            ];
            let current = 0;
            const interval = setInterval(() => {
                if (current < logs.length) {
                    setTerminalLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${logs[current]}`]);
                    current++;
                } else {
                    clearInterval(interval);
                }
            }, 600);
            return () => clearInterval(interval);
        } else {
            setTerminalLogs([]);
        }
    }, [status]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            // Artificial delay for terminal effect
            await new Promise(resolve => setTimeout(resolve, 3500));
            const result = await sendContactEmail(formData);
            if (result.success) {
                setStatus("success");
            } else {
                console.error("Transmission Refused:", result.error);
                setStatus("idle");
                alert(`Transmission Refused: ${result.error || "Unknown Error"}. Please check server logs.`);
            }
        } catch (error) {
            console.error("Transmission Failed", error);
            setStatus("idle");
            alert("Transmission Failed: Infrastructure error.");
        }
    };

    return (
        <main className="bg-void min-h-screen relative overflow-hidden">
            <NerveCenter />

            <div className="relative z-10">
                <PageHeader
                    tagline="Initialize"
                    title={<GlitchText text="Start Your Transmission" />}
                    subtitle="Ready to upgrade your infrastructure? Fill out the brief below to request a consultation."
                />

                <section className="container mx-auto px-4 md:px-6 py-20 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">

                        <div className="space-y-8">
                            <h3 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
                                <Cpu className="w-6 h-6 text-electric" />
                                Nerve Center
                            </h3>
                            <p className="text-titanium/80">
                                Connect directly to our engineering core for priority diagnostics.
                            </p>

                            <div className="flex items-center gap-4 text-titanium group cursor-pointer hover:text-white transition-colors">
                                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-electric/50 transition-colors">
                                    <Mail className="w-5 h-5 text-electric" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Secure Uplink</p>
                                    <p className="font-mono">hello@hightechenterprise.xyz</p>
                                </div>
                            </div>

                            <Card className="bg-electric/5 border-electric/20 p-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <ShieldAlert className="w-12 h-12 text-electric" />
                                </div>
                                <p className="text-sm text-electric font-mono mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-electric rounded-full animate-pulse" />
                                    SYSTEM WARNING
                                </p>
                                <p className="text-sm text-titanium/80 relative z-10">
                                    Our architects only respond to serious inquiries. Ensure your project meets the core technical requirements for high-revenue infrastructure upgrades before initializing.
                                </p>
                            </Card>
                        </div>

                        {/* Form Container */}
                        <Card className="p-8 relative overflow-hidden border-white/10 bg-void/50 backdrop-blur-xl">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 font-heading">Neural Sync Established</h3>
                                        <p className="text-titanium/60 text-sm leading-relaxed max-w-xs">
                                            Transmission received. Our architects have indexed your brief. Stand by for contact on secure channels.
                                        </p>
                                        <Button
                                            variant="secondary"
                                            className="mt-8 border-white/10 hover:bg-white/5 font-mono"
                                            onClick={() => setStatus("idle")}
                                        >
                                            RESTART PROTOCOL
                                        </Button>
                                    </motion.div>
                                ) : status === "sending" ? (
                                    <motion.div
                                        key="sending"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-[500px] flex flex-col bg-black/40 rounded-lg border border-electric/20 p-4 font-mono text-xs overflow-hidden"
                                    >
                                        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                                            <span className="text-electric">TERMINAL UPLINK</span>
                                            <div className="flex gap-1.5">
                                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                            </div>
                                        </div>
                                        <div className="flex-1 space-y-2 overflow-y-auto scrollbar-hide">
                                            {terminalLogs.map((log, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ x: -10, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    className="flex gap-2"
                                                >
                                                    <span className="text-electric/50">&gt;</span>
                                                    <span className="text-titanium">{log}</span>
                                                </motion.div>
                                            ))}
                                            <motion.div
                                                animate={{ opacity: [1, 0] }}
                                                transition={{ repeat: Infinity, duration: 0.8 }}
                                                className="w-2 h-4 bg-electric inline-block ml-2"
                                            />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono text-electric uppercase tracking-widest">First Name</label>
                                                <Input
                                                    required
                                                    className="bg-white/5 border-white/10 focus:border-electric/50"
                                                    placeholder="Jane"
                                                    value={formData.firstName}
                                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono text-electric uppercase tracking-widest">Last Name</label>
                                                <Input
                                                    required
                                                    className="bg-white/5 border-white/10 focus:border-electric/50"
                                                    placeholder="Doe"
                                                    value={formData.lastName}
                                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono text-electric uppercase tracking-widest">Business Email</label>
                                            <Input
                                                required
                                                type="email"
                                                className="bg-white/5 border-white/10 focus:border-electric/50"
                                                placeholder="jane@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono text-electric uppercase tracking-widest">Project Scope</label>
                                            <select
                                                className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-titanium focus:outline-none focus:ring-1 focus:ring-electric transition-colors"
                                                value={formData.scope}
                                                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                                            >
                                                <option>Business Automation</option>
                                                <option>Website Development</option>
                                                <option>Growth & Ads</option>
                                                <option>Full Ecosystem Overhaul</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono text-electric uppercase tracking-widest">System Brief</label>
                                            <Textarea
                                                required
                                                placeholder="Describe your current bottlenecks..."
                                                className="h-32 bg-white/5 border-white/10 focus:border-electric/50"
                                                value={formData.brief}
                                                onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                                            />
                                        </div>

                                        <Button
                                            className="w-full relative overflow-hidden group bg-white text-void hover:bg-electric hover:text-white transition-all duration-500 font-mono font-bold"
                                            size="lg"
                                        >
                                            <span className="flex items-center gap-2 justify-center">
                                                INITIALIZE TRANSMISSION
                                                <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 bg-white/20"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "100%" }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </Button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </Card>

                    </div>
                </section>
            </div>
        </main>
    );
}
