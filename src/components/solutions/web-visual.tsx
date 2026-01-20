"use client";

import { motion } from "framer-motion";

export function WebVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8">
            {/* Browser Window Frame */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-sm bg-void border border-white/10 rounded-xl overflow-hidden shadow-2xl relative z-10"
            >
                {/* Header */}
                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>

                {/* Body - Code Typing Effect */}
                <div className="p-6 space-y-3 font-mono text-xs">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-2 bg-titanium/30 rounded-full"
                    />
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="h-2 bg-titanium/20 rounded-full"
                    />
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "40%" }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="h-2 bg-electric/50 rounded-full"
                    />
                    <div className="flex gap-2 pt-2">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", delay: 1.8 }}
                            className="w-16 h-16 rounded bg-white/5 border border-white/10"
                        />
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", delay: 1.9 }}
                            className="w-16 h-16 rounded bg-white/5 border border-white/10"
                        />
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", delay: 2.0 }}
                            className="w-16 h-16 rounded bg-white/5 border border-white/10"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Performance Batch */}
            <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: -12 }}
                transition={{ type: "spring", bounce: 0.5, delay: 2.2 }}
                viewport={{ once: true }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-void border border-electric/50 text-electric px-4 py-2 rounded-lg font-bold shadow-[0_0_20px_rgba(59,130,246,0.2)] z-20 backdrop-blur-xl"
            >
                100ms
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-10 top-10 w-20 h-20 bg-electric/5 rounded-full blur-2xl pointer-events-none"
            />
        </div>
    );
}
