"use client";

import { motion } from "framer-motion";
import { Share2, MousePointer2, CreditCard, Layers } from "lucide-react";

export function AttributionGraph() {
    return (
        <div className="relative w-full h-[300px] flex items-center justify-center bg-void border border-white/5 rounded-3xl overflow-hidden group">
            {/* Spider Web Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
                <motion.line x1="50%" y1="50%" x2="20%" y2="20%" stroke="white" strokeWidth="0.5" />
                <motion.line x1="50%" y1="50%" x2="80%" y2="20%" stroke="white" strokeWidth="0.5" />
                <motion.line x1="50%" y1="50%" x2="20%" y2="80%" stroke="white" strokeWidth="0.5" />
                <motion.line x1="50%" y1="50%" x2="80%" y2="80%" stroke="white" strokeWidth="0.5" />

                {/* Flow Particles */}
                {Array.from({ length: 4 }).map((_, i) => (
                    <motion.circle
                        key={i}
                        r="1.5"
                        fill="#3B82F6"
                        animate={{
                            offsetDistance: ["0%", "100%"]
                        }}
                        transition={{ repeat: Infinity, duration: 3, delay: i * 0.75 }}
                        className="motion-path-move"
                        style={{
                            offsetPath: `path('M 100 150 L ${i < 2 ? (i === 0 ? 40 : 160) : (i === 2 ? 40 : 160)} ${i < 2 ? 60 : 240}')`
                        } as any}
                    />
                ))}
            </svg>

            <div className="relative z-10 grid grid-cols-2 gap-20">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
                    <Share2 className="w-6 h-6 text-blue-400" />
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
                    <MousePointer2 className="w-6 h-6 text-purple-400" />
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
                    <Layers className="w-6 h-6 text-amber-400" />
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
                    <CreditCard className="w-6 h-6 text-emerald-400" />
                </div>
            </div>

            {/* Central Node */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                    <div className="w-6 h-6 bg-void rounded-full border border-white/20" />
                </motion.div>
            </div>

            <div className="absolute top-4 left-4 font-mono text-[8px] text-titanium/20 tracking-widest uppercase">
                Multi_Touch attribution
            </div>
        </div>
    );
}
