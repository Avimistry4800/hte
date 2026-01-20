"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MetricProps {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
}

function Counter({ value, decimals = 0, prefix = "", suffix = "" }: Omit<MetricProps, "label">) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            let startTime: number | null = null;

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                setCount(progress * (end - start) + start);
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{count.toFixed(decimals)}{suffix}
        </span>
    );
}

const metrics: MetricProps[] = [
    { label: "Uptime Protocol", value: 99.99, suffix: "%", decimals: 2 },
    { label: "Systems Automated", value: 450, suffix: "+" },
    { label: "Mean Time to Deploy", value: 12, suffix: "m" },
    { label: "Data Accuracy", value: 100, suffix: "%" },
];

export function MetricGrid() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {metrics.map((metric, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-electric/30 transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                        <Counter
                            value={metric.value}
                            decimals={metric.decimals}
                            prefix={metric.prefix}
                            suffix={metric.suffix}
                        />
                    </div>
                    <div className="text-xs md:text-sm font-mono text-titanium/50 uppercase tracking-widest uppercase">
                        {metric.label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
