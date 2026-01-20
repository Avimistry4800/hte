"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus("error");
            setMessage("Please enter a valid email address");
            return;
        }

        setStatus("loading");

        // Simulate API call - replace with actual newsletter service integration
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            // TODO: Integrate with actual email service (e.g., Mailchimp, ConvertKit, Resend)
            // const response = await fetch('/api/newsletter', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // });

            setStatus("success");
            setMessage("Successfully subscribed to updates!");
            setEmail("");

            // Reset after 3 seconds
            setTimeout(() => {
                setStatus("idle");
                setMessage("");
            }, 3000);
        } catch (error) {
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
            setTimeout(() => {
                setStatus("idle");
                setMessage("");
            }, 3000);
        }
    };

    return (
        <div className="space-y-3">
            <form onSubmit={handleSubmit} className="relative">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    disabled={status === "loading" || status === "success"}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-titanium/40 focus:outline-none focus:border-electric/50 focus:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed pr-12"
                />
                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-electric/10 hover:bg-electric/20 text-electric rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    {status === "loading" ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                            <Send className="w-4 h-4" />
                        </motion.div>
                    ) : status === "success" ? (
                        <CheckCircle2 className="w-4 h-4" />
                    ) : (
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    )}
                </button>
            </form>

            {/* Status Messages */}
            {message && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 text-sm ${status === "success" ? "text-emerald-400" : "text-red-400"
                        }`}
                >
                    {status === "success" ? (
                        <CheckCircle2 className="w-4 h-4" />
                    ) : (
                        <AlertCircle className="w-4 h-4" />
                    )}
                    <span>{message}</span>
                </motion.div>
            )}
        </div>
    );
}
