"use client";

import { motion } from "framer-motion";

const data = [
    { metric: "LCP Speed", standard: "2.4s", hte: "0.8s", improvement: "+300%" },
    { metric: "SEO Score", standard: "72/100", hte: "98/100", improvement: "+36%" },
    { metric: "Conv. Rate", standard: "1.2%", hte: "3.8%", improvement: "+216%" },
    { metric: "Automation Efficiency", standard: "Manual", hte: "Autonomous", improvement: "100%" },
];

export function PerformanceMatrix() {
    return (
        <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-white/5 border-b border-white/5 font-mono text-[10px] uppercase tracking-widest text-titanium/50">
                        <th className="px-6 py-4 font-normal">Metric Specification</th>
                        <th className="px-6 py-4 font-normal">Legacy Standard</th>
                        <th className="px-6 py-4 font-normal text-electric">HTE Protocol</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {data.map((row, i) => (
                        <motion.tr
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group hover:bg-white/[0.02] transition-colors"
                        >
                            <td className="px-6 py-4">
                                <span className="text-white font-bold text-sm block">{row.metric}</span>
                            </td>
                            <td className="px-6 py-4 text-titanium/40 text-sm">{row.standard}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-electric font-mono font-bold text-sm">{row.hte}</span>
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                                        className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                                    >
                                        {row.improvement}
                                    </motion.span>
                                </div>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
