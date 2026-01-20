"use client";

import { motion } from "framer-motion";

export function GlobalInfrastructure() {
    return (
        <div className="relative w-full h-[400px] bg-void border border-white/5 rounded-[3rem] overflow-hidden group flex items-center justify-center">
            {/* World Map Backdrop (Abstract) */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_100%)]" />
                <svg className="w-full h-full opacity-10" viewBox="0 0 800 400">
                    <circle cx="200" cy="150" r="2" fill="white" />
                    <circle cx="400" cy="250" r="2" fill="white" />
                    <circle cx="600" cy="120" r="2" fill="white" />
                    <circle cx="300" cy="100" r="2" fill="white" />
                    <circle cx="500" cy="300" r="2" fill="white" />
                </svg>
            </div>

            {/* Pulsing Nodes */}
            {[
                { x: "20%", y: "40%", delay: 0 },
                { x: "45%", y: "60%", delay: 0.5 },
                { x: "70%", y: "30%", delay: 1 },
                { x: "35%", y: "25%", delay: 1.5 },
                { x: "55%", y: "75%", delay: 2 }
            ].map((node, i) => (
                <div key={i} className="absolute" style={{ left: node.x, top: node.y }}>
                    <motion.div
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 3, delay: node.delay }}
                        className="w-12 h-12 bg-electric/20 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                    />
                    <div className="w-2 h-2 bg-electric rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(59,130,246,1)]" />
                </div>
            ))}

            {/* Connection Lines (Abstract) */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                <motion.path
                    d="M 160 160 Q 300 100 360 240 T 560 120"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -40] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />
            </svg>

            <div className="relative z-10 text-center space-y-4 px-8">
                <div className="inline-block px-3 py-1 bg-electric/10 border border-electric/30 rounded-full text-electric font-mono text-[10px] uppercase tracking-widest font-bold">
                    Infrastructure Status: Online
                </div>
                <h3 className="text-4xl font-heading font-bold text-white max-w-lg mx-auto leading-tight">
                    Global Edge Distribution
                </h3>
                <p className="text-titanium/50 font-mono text-sm uppercase tracking-widest">
                    Latency-First Network Topology
                </p>
            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] flex justify-between items-center px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono text-titanium/40 tracking-tighterUppercase tracking-widest">Server Load: 14.2%</span>
                </div>
                <div className="text-[10px] font-mono text-electric font-bold tracking-widest">US-EAST-1 // EU-WEST-2 // AP-SOUTH-1</div>
            </div>
        </div>
    );
}
