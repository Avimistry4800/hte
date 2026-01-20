"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    angle: number;
    distance: number;
    speed: number;
    opacity: number;
}

interface Cluster {
    x: number;
    y: number;
    particles: Particle[];
}

export function TechnicalSpecificationsVisual() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Parallax effect based on scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yTransform = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    useEffect(() => {
        setIsMounted(true);
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let clusters: Cluster[] = [];
        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = 800; // Fixed height for the section area
            initClusters();
        };

        const initClusters = () => {
            clusters = [];
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = Math.min(canvas.width, canvas.height) * 0.35;

            // 6 nodes in a hexagon
            for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI * 2) / 6;
                const tx = centerX + Math.cos(angle) * radius;
                const ty = centerY + Math.sin(angle) * radius;

                const cluster: Cluster = {
                    x: tx,
                    y: ty,
                    particles: []
                };

                // Add 40-60 particles per cluster
                const particleCount = 40 + Math.floor(Math.random() * 20);
                for (let j = 0; j < particleCount; j++) {
                    const distance = 10 + Math.random() * 60;
                    cluster.particles.push({
                        x: 0,
                        y: 0,
                        baseX: 0,
                        baseY: 0,
                        size: 0.5 + Math.random() * 1.5,
                        angle: Math.random() * Math.PI * 2,
                        distance: distance,
                        speed: (0.005 + Math.random() * 0.01) * (Math.random() > 0.5 ? 1 : -1),
                        opacity: 0.2 + Math.random() * 0.6
                    });
                }
                clusters.push(cluster);
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            clusters.forEach((cluster) => {
                ctx.beginPath();
                ctx.fillStyle = "rgba(59, 130, 246, 0.03)";
                ctx.arc(cluster.x, cluster.y, 80, 0, Math.PI * 2);
                ctx.fill();

                cluster.particles.forEach((p) => {
                    p.angle += p.speed;
                    p.x = cluster.x + Math.cos(p.angle) * p.distance;
                    p.y = cluster.y + Math.sin(p.angle) * p.distance;

                    ctx.beginPath();
                    ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity * (0.5 + Math.sin(Date.now() * 0.001 + p.angle) * 0.3)})`;
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();

                    // Tiny glow for some
                    if (p.size > 1.2) {
                        ctx.shadowBlur = 5;
                        ctx.shadowColor = "rgba(59, 130, 246, 0.5)";
                        ctx.fill();
                        ctx.shadowBlur = 0;
                    }
                });

                // Subtle connection lines within cluster
                ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";
                ctx.lineWidth = 0.5;
                for (let i = 0; i < cluster.particles.length; i++) {
                    for (let j = i + 1; j < cluster.particles.length; j++) {
                        const dx = cluster.particles[i].x - cluster.particles[j].x;
                        const dy = cluster.particles[i].y - cluster.particles[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 30) {
                            ctx.beginPath();
                            ctx.moveTo(cluster.particles[i].x, cluster.particles[i].y);
                            ctx.lineTo(cluster.particles[j].x, cluster.particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none -z-10 overflow-hidden h-full">
            {isMounted && (
                <motion.canvas
                    ref={canvasRef}
                    style={{ y: yTransform }}
                    className="opacity-60 mix-blend-screen"
                />
            )}
        </div>
    );
}
