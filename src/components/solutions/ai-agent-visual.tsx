"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";

export function AiAgentVisual() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-void/50 rounded-3xl border border-white/5 overflow-hidden group">
            {/* Neural Connections */}
            <div className="absolute inset-0">
                {isMounted && Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            scale: [0.5, 1, 0.5],
                            x: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                            y: [Math.random() * 400 - 200, Math.random() * 400 - 200]
                        }}
                        transition={{ repeat: Infinity, duration: 5 + Math.random() * 5, delay: i * 0.2 }}
                        className="absolute w-1 h-1 bg-electric rounded-full"
                    />
                ))}
            </div>

            <motion.div
                animate={{
                    boxShadow: ["0 0 20px rgba(59,130,246,0.1)", "0 0 50px rgba(168,85,247,0.3)", "0 0 20px rgba(59,130,246,0.1)"]
                }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="w-32 h-32 bg-void border-2 border-white/10 rounded-full flex items-center justify-center relative z-10 backdrop-blur-xl group-hover:border-electric/50 transition-colors"
            >
                <Brain className="w-16 h-16 text-white group-hover:text-electric transition-colors duration-700" />
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-purple-400 animate-pulse" />
            </motion.div>

            <div className="mt-8 relative z-10 space-y-2 w-full max-w-[200px]">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="h-full w-1/3 bg-gradient-to-r from-transparent via-electric to-transparent"
                    />
                </div>
                <div className="flex justify-between font-mono text-[8px] text-titanium/40 uppercase tracking-widest">
                    <span>Processing</span>
                    <span>98.4% Accuracy</span>
                </div>
            </div>
        </div>
    );
}
