"use client";

import { PageHeader } from "@/components/ui/page-header";
import { motion } from "framer-motion";
import { Shield, Mail, Database, Lock, Eye, FileText } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    const lastUpdated = "January 19, 2026";

    const sections = [
        {
            icon: Database,
            title: "Information We Collect",
            content: [
                "When you visit our website or use our services, we may collect the following information:",
                "• Contact information (name, email address, phone number)",
                "• Company information (company name, industry, size)",
                "• Technical data (IP address, browser type, device information)",
                "• Usage data (pages visited, time spent, interactions)",
                "• Communication data (messages sent through contact forms)",
            ]
        },
        {
            icon: Eye,
            title: "How We Use Your Information",
            content: [
                "We use the collected information for the following purposes:",
                "• To provide and maintain our services",
                "• To communicate with you about our services",
                "• To improve our website and user experience",
                "• To send marketing communications (with your consent)",
                "• To comply with legal obligations",
                "• To detect and prevent fraud or security issues",
            ]
        },
        {
            icon: Lock,
            title: "Data Security",
            content: [
                "We implement industry-standard security measures to protect your data:",
                "• SSL/TLS encryption for data transmission",
                "• Secure data storage with encryption at rest",
                "• Regular security audits and vulnerability assessments",
                "• Access controls and authentication protocols",
                "• Employee training on data protection",
                "• Incident response procedures",
            ]
        },
        {
            icon: Shield,
            title: "Your Rights (GDPR)",
            content: [
                "Under GDPR and other privacy regulations, you have the following rights:",
                "• Right to access your personal data",
                "• Right to rectification of inaccurate data",
                "• Right to erasure ('right to be forgotten')",
                "• Right to restrict processing",
                "• Right to data portability",
                "• Right to object to processing",
                "• Right to withdraw consent at any time",
            ]
        },
        {
            icon: FileText,
            title: "Third-Party Services",
            content: [
                "We may use the following third-party services that process your data:",
                "• Analytics: Google Analytics, Vercel Analytics",
                "• Email Services: For transactional and marketing emails",
                "• Payment Processing: Stripe (for payment transactions)",
                "• CRM: HubSpot (for customer relationship management)",
                "• Hosting: Vercel, Cloudflare (for website hosting and CDN)",
                "Each third-party service has its own privacy policy governing data use.",
            ]
        },
        {
            icon: Mail,
            title: "Contact Us",
            content: [
                "If you have questions about this Privacy Policy or wish to exercise your rights:",
                "• Email: privacy@high-tech-enterprise.com",
                "• Contact Form: Visit our contact page",
                "• Response Time: We aim to respond within 48 hours",
                "For data protection inquiries, please include 'Privacy Request' in your subject line.",
            ]
        },
    ];

    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="Legal"
                title="Privacy Policy"
                subtitle="How we collect, use, and protect your personal information."
            />

            <section className="container mx-auto px-4 md:px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Last Updated */}
                    <div className="mb-12 p-4 bg-white/5 border border-white/10 rounded-lg">
                        <p className="text-titanium/60 text-sm">
                            <strong className="text-white">Last Updated:</strong> {lastUpdated}
                        </p>
                    </div>

                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16 prose prose-invert prose-lg max-w-none"
                    >
                        <p className="text-titanium/70 leading-relaxed">
                            At High-Tech Enterprise (HTE), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our practices regarding your personal data.
                        </p>
                    </motion.div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-electric/10 border border-electric/20 rounded-lg">
                                        <section.icon className="w-6 h-6 text-electric" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-heading font-bold text-white mb-2">
                                            {section.title}
                                        </h2>
                                    </div>
                                </div>
                                <div className="pl-16 space-y-3">
                                    {section.content.map((paragraph, j) => (
                                        <p key={j} className="text-titanium/70 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Cookies Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 bg-white/5 border border-white/10 rounded-2xl"
                    >
                        <h3 className="text-xl font-heading font-bold text-white mb-4">
                            Cookies and Tracking
                        </h3>
                        <p className="text-titanium/70 mb-4">
                            We use cookies and similar tracking technologies to enhance your browsing experience. For detailed information about the cookies we use, please see our{" "}
                            <Link href="/cookie-policy" className="text-electric hover:underline">
                                Cookie Policy
                            </Link>.
                        </p>
                    </motion.div>

                    {/* Changes to Policy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 p-6 bg-electric/5 border border-electric/20 rounded-xl"
                    >
                        <h3 className="text-lg font-heading font-bold text-white mb-3">
                            Changes to This Policy
                        </h3>
                        <p className="text-titanium/70 text-sm">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically for any changes.
                        </p>
                    </motion.div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-titanium/60 mb-6">
                            Have questions about our privacy practices?
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric/90 text-white font-heading font-bold rounded-lg transition-all hover:scale-105"
                        >
                            <Mail className="w-5 h-5" />
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
