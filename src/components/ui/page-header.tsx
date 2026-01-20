"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
    title: ReactNode;
    subtitle: string;
    tagline?: string;
}

export function PageHeader({ title, subtitle, tagline }: PageHeaderProps) {
    return (
        <section className="relative pt-32 pb-16 px-4 md:px-6 bg-void overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-electric/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto text-center relative z-10">
                {tagline && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-4"
                    >
                        <span className="text-electric text-sm font-mono tracking-wider uppercase border border-electric/20 rounded-full px-3 py-1 bg-electric/5">
                            {tagline}
                        </span>
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold font-heading text-white mb-6"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-titanium/70 max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            </div>
        </section>
    );
}
