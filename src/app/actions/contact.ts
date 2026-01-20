"use server";

import nodemailer from "nodemailer";
import * as v from "valibot";

// Define the schema for production validation
const ContactSchema = v.object({
    firstName: v.pipe(v.string(), v.minLength(1, "First name is required")),
    lastName: v.pipe(v.string(), v.minLength(1, "Last name is required")),
    email: v.pipe(v.string(), v.email("Invalid business email")),
    scope: v.pipe(v.string(), v.minLength(1, "Project scope is required")),
    brief: v.pipe(v.string(), v.minLength(10, "Brief must be at least 10 characters")),
});

type ContactFormData = v.InferOutput<typeof ContactSchema>;

export async function sendContactEmail(rawData: unknown) {
    // 1. Data Integrity Check (Valibot)
    let formData: ContactFormData;
    try {
        formData = v.parse(ContactSchema, rawData);
    } catch (error: any) {
        console.error("VALIDATION_FAILED:", error);
        return { success: false, error: "Protocol validation failed. Please check your inputs." };
    }

    // 2. Environment Configuration
    const host = process.env.EMAIL_SERVER_HOST || "hightechenterprise.xyz";
    const port = parseInt(process.env.EMAIL_SERVER_PORT || "465");
    const user = process.env.EMAIL_SERVER_USER || "hello@hightechenterprise.xyz";
    const pass = process.env.EMAIL_SERVER_PASSWORD;
    const to = process.env.EMAIL_DESTINATION || "hello@hightechenterprise.xyz";
    const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === "true";

    // 3. Demo Mode Guard (Development only)
    if (isDemo) {
        console.log("--- DEVELOPMENT_DEMO_ACTIVE ---");
        console.log("Simulating relay to:", to);
        await new Promise(resolve => setTimeout(resolve, 1500));
        return { success: true };
    }

    // 4. Production Relay Setup
    if (!pass) {
        console.error("FATAL: EMAIL_SERVER_PASSWORD missing in production environment.");
        return { success: false, error: "Systems offline. Please contact hello@hightechenterprise.xyz directly." };
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
        tls: {
            // Necessary for some cPanel/Shared hosting environments
            rejectUnauthorized: true
        }
    });

    // 5. Admin Notification Template
    const adminMailOptions = {
        from: `"HTE Systems" <${user}>`,
        replyTo: formData.email,
        to,
        subject: `[SYSTEM_NOTIFICATION] New Brief: ${formData.scope}`,
        text: `Incoming Transmission\n\nFrom: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nScope: ${formData.scope}\n\nBrief:\n${formData.brief}`,
        html: `
            <div style="font-family: 'JetBrains Mono', monospace, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #050505; color: #E5E5E5; border: 1px solid #3B82F6; border-radius: 8px;">
                <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 15px; margin-bottom: 30px; letter-spacing: 2px; text-transform: uppercase;">Incoming Lead Protocol</h2>
                
                <div style="background-color: #0A0A0A; padding: 20px; border-left: 4px solid #3B82F6; margin-bottom: 25px;">
                    <p style="margin: 10px 0;"><strong>SENDER_NAME:</strong> ${formData.firstName} ${formData.lastName}</p>
                    <p style="margin: 10px 0;"><strong>SENDER_EMAIL:</strong> ${formData.email}</p>
                    <p style="margin: 10px 0;"><strong>SYSTEM_SCOPE:</strong> ${formData.scope}</p>
                </div>

                <div style="margin-top: 30px;">
                    <h3 style="color: #3B82F6; font-size: 14px; margin-bottom: 10px;">PROJECT_BRIEF</h3>
                    <div style="padding: 20px; background-color: #030303; border: 1px solid #1A1A1A; line-height: 1.6; white-space: pre-wrap; font-size: 15px;">
                        ${formData.brief}
                    </div>
                </div>

                <p style="font-size: 11px; color: #444; margin-top: 40px; text-align: center; border-top: 1px solid #111; padding-top: 20px;">
                    HTE-RELAY-v3.2 | SECURE INFRASTRUCTURE | ALL SYSTEMS NOMINAL
                </p>
            </div>
        `,
    };

    // 6. User Confirmation Template (Optional but Professional)
    const userMailOptions = {
        from: `"HTE | High-Tech Enterprise" <${user}>`,
        to: formData.email,
        subject: `Transmission Received | High-Tech Enterprise`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #050505; color: #E5E5E5; border-top: 4px solid #3B82F6;">
                <h2 style="color: #FFFFFF; margin-bottom: 20px;">Protocol Initialized</h2>
                <p>Hello ${formData.firstName},</p>
                <p>Your technical brief regarding <strong>${formData.scope}</strong> has been successfully received by our engineering team.</p>
                <p>We are currently conducting an initial diagnostic based on your requirements. One of our architects will contact you via this channel within 24 standard business hours.</p>
                <br/>
                <hr style="border: 0; border-top: 1px solid #1A1A1A; margin: 30px 0;" />
                <p style="font-size: 13px; color: #888;">
                    <strong>HTE | High-Tech Enterprise</strong><br/>
                    Digital Infrastructure & Growth Systems<br/>
                    <a href="https://hightechenterprise.xyz" style="color: #3B82F6; text-decoration: none;">hightechenterprise.xyz</a>
                </p>
            </div>
        `
    };

    try {
        // Parallelized delivery for performance
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions).catch(e => console.warn("User confirmation failed:", e))
        ]);

        console.log(`[SUCCESS] Transmission delivered to ${to} and ${formData.email}`);
        return { success: true };
    } catch (error) {
        console.error("RELAY_FAILURE:", error);
        return { success: false, error: "Network relay failure. Please retry or email us directly." };
    }
}
