"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Node {
    id: number;
    x: number;
    y: number;
}

interface Connection {
    from: number;
    to: number;
}

export function NerveCenter() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [nodes, setNodes] = useState<Node[]>([]);
    const [connections, setConnections] = useState<Connection[]>([]);

    useEffect(() => {
        const generateNodes = () => {
            const newNodes: Node[] = [];
            const newConnections: Connection[] = [];
            const count = 15;

            for (let i = 0; i < count; i++) {
                newNodes.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                });
            }

            // Create some random connections
            for (let i = 0; i < count; i++) {
                const targetCount = Math.floor(Math.random() * 2) + 1;
                for (let j = 0; j < targetCount; j++) {
                    const target = Math.floor(Math.random() * count);
                    if (target !== i) {
                        newConnections.push({ from: i, to: target });
                    }
                }
            }

            setNodes(newNodes);
            setConnections(newConnections);
        };

        generateNodes();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden bg-void z-0">
            <svg className="w-full h-full">
                {/* Connections */}
                {connections.map((conn, i) => {
                    const fromNode = nodes.find(n => n.id === conn.from);
                    const toNode = nodes.find(n => n.id === conn.to);
                    if (!fromNode || !toNode) return null;

                    return (
                        <g key={`conn-${i}`}>
                            <line
                                x1={`${fromNode.x}%`}
                                y1={`${fromNode.y}%`}
                                x2={`${toNode.x}%`}
                                y2={`${toNode.y}%`}
                                stroke="var(--electric)"
                                strokeWidth="0.5"
                                strokeOpacity="0.3"
                            />
                            {/* Animated Packet */}
                            <motion.circle
                                r="1.5"
                                fill="var(--electric)"
                                initial={{ offset: 0 }}
                                animate={{
                                    cx: [`${fromNode.x}%`, `${toNode.x}%`],
                                    cy: [`${fromNode.y}%`, `${toNode.y}%`],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: Math.random() * 2,
                                }}
                            />
                        </g>
                    );
                })}

                {/* Nodes */}
                {nodes.map((node) => (
                    <motion.circle
                        key={`node-${node.id}`}
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r="3"
                        fill="var(--electric)"
                        initial={{ opacity: 0.2 }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: Math.random() * 2 + 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>

            {/* Grain/Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-soft-light" />

            {/* Glitch Overlay (Random triggers) */}
            <motion.div
                className="absolute inset-0 bg-electric/5 mix-blend-overlay"
                animate={{
                    opacity: [0, 0, 0.1, 0, 0.2, 0, 0, 0.05, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    times: [0, 0.45, 0.46, 0.47, 0.48, 0.49, 0.9, 0.91, 1],
                }}
            />
        </div>
    );
}
