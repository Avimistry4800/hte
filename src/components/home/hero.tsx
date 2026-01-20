"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Dimming effect on scroll
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.85]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.98]);

    // Mouse parallax values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 2;
            const y = (clientY / window.innerHeight - 0.5) * 2;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Starfield Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const stars: { x: number, y: number, z: number, size: number, opacity: number }[] = [];
        const STAR_COUNT = 150;

        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                z: Math.random() * 2 + 0.5, // Depth factor
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }

        let animationFrame: number;
        const render = () => {
            ctx.clearRect(0, 0, w, h);

            const px = springX.get();
            const py = springY.get();

            stars.forEach(star => {
                // Drift + Parallax
                star.y -= 0.2 / star.z; // Slow vertical drift
                if (star.y < 0) star.y = h;

                // Parallax shift based on depth (z)
                const offsetX = px * 20 * star.z;
                const offsetY = py * 20 * star.z;

                let drawX = star.x + offsetX;
                let drawY = star.y + offsetY;

                // Wrap around for horizontal parallax
                if (drawX < 0) drawX += w;
                if (drawX > w) drawX -= w;
                if (drawY < 0) drawY += h;
                if (drawY > h) drawY -= h;

                ctx.fillStyle = `rgba(59, 130, 246, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(drawX, drawY, star.size * star.z, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrame = requestAnimationFrame(render);
        };

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrame);
        };
    }, [springX, springY]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Canvas Starfield */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none opacity-40"
            />

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[150px]" />
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl space-y-6"
                >
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-titanium backdrop-blur-sm mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-electric mr-2 animate-pulse" />
                        System Status: Operational
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white leading-[1.1] relative">
                        {/* Masked Reveal Headline */}
                        <motion.div
                            initial={{ width: "100%" }}
                            animate={{ width: "0%" }}
                            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                            className="absolute inset-0 right-0 bg-void z-20"
                        />
                        Build Your Business on{" "}
                        <span className="relative inline-block group text-electric">
                            Autopilot
                            {/* Kinetic Gradient Shimmer Sweep */}
                            <motion.div
                                initial={{ left: "-100%" }}
                                whileInView={{ left: "200%" }}
                                transition={{ duration: 2, ease: "easeInOut", repeat: 0 }}
                                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                            />
                            {/* Glow Pulse (Hover Only) */}
                            <div className="absolute -inset-1 bg-electric/0 group-hover:bg-electric/10 blur-xl transition-colors duration-500 rounded-lg pointer-events-none" />
                        </span>.
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-titanium/80 font-light leading-relaxed">
                        HTE provides the operating system for modern business. We replace
                        manual chaos with intelligent automation, high-performance scale,
                        and conversion-focused infrastructure.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                    >
                        <Magnetic>
                            <Button size="lg" className="group relative overflow-hidden h-14 px-8" asChild>
                                <a href="/contact">
                                    <span className="relative z-10 transition-transform group-hover:-translate-y-0.5">Consult an Architect</span>
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                                    {/* Magnetic soft lift/glow edge logic handled by layout & Magnetic */}
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </Button>
                        </Magnetic>
                        <Magnetic>
                            <Button variant="secondary" size="lg" className="h-14 px-8 group relative" asChild>
                                <a href="/solutions">
                                    <span className="relative z-10">View Ecosystem</span>
                                    <div className="absolute inset-0 rounded-md border border-white/5 group-hover:border-white/20 transition-colors" />
                                </a>
                            </Button>
                        </Magnetic>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
