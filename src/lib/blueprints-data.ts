export interface Blueprint {
    slug: string;
    title: string;
    category: "Automation" | "Web Infrastructure" | "Growth";
    tagline: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    metrics: { label: string; value: string }[];
    stack: string[];
    image: string;
}

export const blueprints: Blueprint[] = [
    {
        slug: "pipeline-automator",
        title: "$4.2M Pipeline Automator",
        category: "Automation",
        tagline: "Logistics Optimization Engine",
        description: "Full CRM overhaul for a global logistics firm. Eliminated manual data entry and increased lead velocity.",
        challenge: "A logistics leader was losing 40+ hours per week to manual carrier coordination and fragmented CRM data, resulting in a 15% lead leakage rate.",
        solution: "Implemented a custom n8n orchestration layer connecting their legacy ERP with HubSpot. Built automated carrier bidding bots and real-time shipment status synchronizers.",
        results: [
            "Eliminated 100% of manual data entry for carrier coordination",
            "Reduced lead response time from 4 hours to 90 seconds",
            "Identified and saved $4.2M in annual shipment leakage"
        ],
        metrics: [
            { label: "Efficiency", value: "+300%" },
            { label: "Leakage Reduction", value: "98%" }
        ],
        stack: ["n8n", "Node.js", "HubSpot", "PostgreSQL", "Docker"],
        image: "/images/blueprint-1.png"
    },
    {
        slug: "headless-ecommerce",
        title: "Headless E-Commerce Core",
        category: "Web Infrastructure",
        tagline: "Direct-to-Consumer Scale Architecture",
        description: "Migration from standard Shopify to Next.js Headless. Achieved 99/100 Core Web Vitals.",
        challenge: "A high-growth D2C brand's monolithic Shopify theme was bottlenecking their mobile conversion rate due to 5s+ load times and heavy script bloat.",
        solution: "Architected a headless frontend using Next.js and Sanity.io. Implemented ISR (Incremental Static Regeneration) for lightning-fast product page updates and a custom edge-cached checkout API.",
        results: [
            "Sub-second page transitions globally",
            "45% increase in mobile add-to-cart rate",
            "Maintenance costs reduced by 30% through modular architecture"
        ],
        metrics: [
            { label: "Lighthouse Score", value: "99/100" },
            { label: "Mobile Conversion", value: "+45%" }
        ],
        stack: ["Next.js", "Shopify Storefront API", "Sanity CMS", "Tailwind CSS", "Vercel"],
        image: "/images/blueprint-2.png"
    },
    {
        slug: "predictive-growth-engine",
        title: "Predictive Growth Engine",
        category: "Growth",
        tagline: "Algorithmic Ad Optimization",
        description: "Real-time cross-platform budget optimization for a fintech startup.",
        challenge: "The startup was struggling to attribute ROI across Meta, Google, and LinkedIn, leading to a 30% waste in ad spend on underperforming segments.",
        solution: "Built a custom attribution dashboard that pulls server-side event data from Segment and pushes optimized budget allocations back to ad APIs every 4 hours using a basic Bayesian model.",
        results: [
            "ROAS increased from 2.4x to 5.1x in 90 days",
            "Customer Acquisition Cost (CAC) dropped by 28%",
            "Automated budget shifting saved 15 hours of manual analysis per week"
        ],
        metrics: [
            { label: "ROAS Increase", value: "112%" },
            { label: "CAC Reduction", value: "28%" }
        ],
        stack: ["Python", "Segment", "BigQuery", "Looker", "Meta/Google Ads APIs"],
        image: "/images/blueprint-3.png"
    },
    {
        slug: "saas-launchpad",
        title: "Enterprise SaaS Launchpad",
        category: "Web Infrastructure",
        tagline: "Multi-Tenant Platform Architecture",
        description: "Building a hardened multi-tenant SaaS foundation for a health-tech provider.",
        challenge: "The provider needed to migrate 50+ clinics into a single cloud platform with strict HIPAA compliance and individual data isolation requirements.",
        solution: "Deployed a multi-tenant PostgreSQL architecture with Row Level Security (RLS). Built an automated clinic onboarding pipeline that provisions isolated storage and dedicated subdomains in minutes.",
        results: [
            "Onboarding time reduced from 3 weeks to 15 minutes",
            "Zero cross-tenant data leakage during audit",
            "99.99% uptime during the migration of 1M+ patient records"
        ],
        metrics: [
            { label: "Onboarding Velocity", value: "120x" },
            { label: "Uptime", value: "99.99%" }
        ],
        stack: ["Supabase", "React", "AWS Lambda", "Terraform", "auth0"],
        image: "/images/blueprint-1.png"
    }
];

export function getBlueprintBySlug(slug: string) {
    return blueprints.find(b => b.slug === slug);
}
