"use client";

import { motion } from "framer-motion";
import { Link2, Zap, Share2 } from "lucide-react";

export function IntegrationMap() {
    return (
        <div className="relative w-full h-[300px] flex items-center justify-center">
            {/* Animated Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.line
                    x1="20%" y1="20%" x2="50%" y2="50%"
                    stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"
                    className="text-electric"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                <motion.line
                    x1="80%" y1="20%" x2="50%" y2="50%"
                    stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"
                    className="text-electric"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                <motion.line
                    x1="20%" y1="80%" x2="50%" y2="50%"
                    stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"
                    className="text-electric"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                <motion.line
                    x1="80%" y1="80%" x2="50%" y2="50%"
                    stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"
                    className="text-electric"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
            </svg>

            {/* Center Hub */}
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-16 h-16 bg-electric rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10"
            >
                <Zap className="w-8 h-8 text-white" />
            </motion.div>

            {/* Orbiting Satellite Nodes */}
            <div className="absolute top-[15%] left-[15%] p-3 bg-void border border-white/10 rounded-xl shadow-2xl">
                <Share2 className="w-5 h-5 text-titanium/50" />
            </div>
            <div className="absolute top-[15%] right-[15%] p-3 bg-void border border-white/10 rounded-xl shadow-2xl">
                <Link2 className="w-5 h-5 text-titanium/50" />
            </div>
            <div className="absolute bottom-[15%] left-[15%] p-3 bg-void border border-white/10 rounded-xl shadow-2xl">
                <Database className="w-5 h-5 text-titanium/50" stroke="#E5E5E5" />
            </div>
            <div className="absolute bottom-[15%] right-[15%] p-3 bg-void border border-white/10 rounded-xl shadow-2xl">
                <div className="w-5 h-5 rounded-full border border-electric flex items-center justify-center">
                    <div className="w-2 h-2 bg-electric rounded-full animate-pulse" />
                </div>
            </div>
        </div>
    );
}

import { Database } from "lucide-react";
