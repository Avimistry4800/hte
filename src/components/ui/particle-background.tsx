"use client";

import { useEffect, useRef } from "react";

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = 0;
        let h = 0;
        let particles: Particle[] = [];
        let animationFrameId: number;

        // Mouse state
        let mx = -1000;
        let my = -1000;

        const PARTICLE_COUNT = 400;
        const SPEED = 2; // Warp speed

        // Spring Physics Constants
        const SPRING_STRENGTH = 0.05; // How strongly they want to return (lower = smoother/slower)
        const FRICTION = 0.9;         // Damping to prevent endless bouncing
        const REPULSION_RADIUS = 300;
        const REPULSION_STRENGTH = 2; // Instant velocity add

        class Particle {
            x: number;
            y: number;
            z: number;
            ox: number; // Original/Target X
            oy: number; // Original/Target Y
            vx: number; // Velocity X
            vy: number; // Velocity Y

            constructor() {
                this.x = (Math.random() - 0.5) * w;
                this.y = (Math.random() - 0.5) * h;
                this.z = Math.random() * w;

                this.ox = this.x;
                this.oy = this.y;
                this.vx = 0;
                this.vy = 0;
            }

            move() {
                // 1. Warp Movement (Z-axis only)
                this.z -= SPEED;
                if (this.z <= 0) {
                    this.z = w;
                    this.ox = (Math.random() - 0.5) * w;
                    this.oy = (Math.random() - 0.5) * h;
                    this.x = this.ox;
                    this.y = this.oy;
                    this.vx = 0;
                    this.vy = 0;
                }

                // 2. Physics Logic (X/Y axis)
                const focalLength = 300;
                const sx = (this.x / this.z) * focalLength + w / 2;
                const sy = (this.y / this.z) * focalLength + h / 2;

                // Mouse Interaction (Repulsion)
                const dx = sx - mx;
                const dy = sy - my;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < REPULSION_RADIUS) {
                    const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
                    const angle = Math.atan2(dy, dx);
                    this.vx += Math.cos(angle) * force;
                    this.vy += Math.sin(angle) * force;
                }

                // Spring Return (Home to ox/oy)
                // We calculate return force based on deviation from ox/oy
                const homeDx = this.ox - this.x;
                const homeDy = this.oy - this.y;

                this.vx += homeDx * SPRING_STRENGTH;
                this.vy += homeDy * SPRING_STRENGTH;

                // Apply Friction
                this.vx *= FRICTION;
                this.vy *= FRICTION;

                // Update Position
                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                // Project 3D to 2D
                const focalLength = 300;
                const sx = (this.x / this.z) * focalLength + w / 2;
                const sy = (this.y / this.z) * focalLength + h / 2;

                const size = (1 - this.z / w) * 2.5;
                const alpha = (1 - this.z / w);

                if (sx < 0 || sx > w || sy < 0 || sy > h) return;

                ctx!.fillStyle = `rgba(59, 130, 246, ${alpha})`;
                ctx!.beginPath();
                ctx!.arc(sx, sy, size, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(new Particle());
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
        };

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            particles.forEach(p => {
                p.move();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: 'transparent' }}
        />
    );
}
