"use client";

import { motion } from "framer-motion";
import { Search, ChevronRight } from "lucide-react";

export function SeoGraph() {
    return (
        <div className="relative w-full h-full bg-void border border-white/5 rounded-3xl overflow-hidden p-6">
            {/* Sitemap Nodes */}
            <div className="flex flex-col gap-4 relative z-10">
                {[1, 2, 3].map((node, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4"
                    >
                        <div className="h-0.5 w-8 bg-electric/30" />
                        <div className="px-3 py-2 bg-white/5 border border-white/5 rounded-lg flex items-center gap-3 w-48 group">
                            <div className="w-2 h-2 rounded-full bg-electric/50" />
                            <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ x: ["-100%", "300%"] }}
                                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                                    className="h-full w-4 bg-electric"
                                />
                            </div>
                            <ChevronRight className="w-3 h-3 text-titanium/20 group-hover:text-electric transition-colors" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Crawl Robot Animation */}
            <motion.div
                animate={{
                    y: [0, 100, 0],
                    x: [180, 200, 180]
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-4 bg-void border border-electric/30 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
                <Search className="w-6 h-6 text-electric animate-pulse" />
                <div className="mt-2 font-mono text-[8px] text-electric/50 whitespace-nowrap">INDEXING...</div>
            </motion.div>

            {/* Structural Connectivity */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <line x1="32" y1="0" x2="32" y2="100%" stroke="#3B82F6" strokeWidth="1" />
            </svg>
        </div>
    );
}
