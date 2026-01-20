"use client";

import { motion } from "framer-motion";

const brands = [
    "Acme Corp",
    "Globex Systems",
    "Soylent Corp",
    "Umbrella Inc",
    "Massive Dynamic",
    "Cyberdyne"
];

export function Clients() {
    return (
        <section className="py-12 border-y border-white/5 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-sm font-mono text-titanium/40 uppercase tracking-widest mb-8">
                    Trusted by High-Growth Enterprises
                </p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {brands.map((brand, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-xl font-bold font-heading text-white/40 hover:text-white transition-colors cursor-default"
                        >
                            {brand}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
