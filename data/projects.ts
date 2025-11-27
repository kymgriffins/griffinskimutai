import { ProjectDataRaw } from "../components/projects/ProjectDetail";
import { LucideIcon, Brain, Building, Youtube } from "lucide-react";

// Dynamic icon loading function
async function loadIcon(iconName: string) {
  const lucide = await import('lucide-react');
  return (lucide as unknown as Record<string, LucideIcon>)[iconName];
}

// Import ProjectDataRaw from ProjectDetail
// No local interface needed

export const projectsData: ProjectDataRaw[] = [
  {
    id: "payment-escrow",
    title: "Payment Escrow System",
    subtitle: "Key Features Implemented",
    description: "Secure payment processing with integrated project management for construction and services. Multi-signature wallets with automated milestone releases.",
    longDescription: "Secure payment processing integrated with comprehensive project management for construction, consulting, and service-based industries.",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    impact: "$2.5M+ processed",
    iconName: "Shield",
    features: [
      {
        iconName: "Shield",
        title: "Secure Escrow System",
        desc: "Multi-signature wallets with fraud detection and dispute resolution mechanisms.",
      },
      {
        iconName: "CreditCard",
        title: "Multiple Payment Methods",
        desc: "Support for credit cards, ACH, wire transfers, and cryptocurrency payments.",
      },
      {
        iconName: "Users",
        title: "Project Management Integration",
        desc: "Milestone tracking, progress updates, and automated payment releases.",
      },
      {
        iconName: "Clock",
        title: "Automated Workflows",
        desc: "Smart contract-based payment releases triggered by project milestones.",
      },
      {
        iconName: "TrendingUp",
        title: "Real-time Analytics",
        desc: "Dashboard with payment trends, project status, and financial reporting.",
      },
      {
        iconName: "Lock",
        title: "Compliance & Security",
        desc: "SOC 2 compliant with end-to-end encryption and audit trails.",
      },
    ],
    frontendFeatures: [
      "React 18 with TypeScript for type safety",
      "Next.js 14 for SSR and routing",
      "Tailwind CSS for responsive design",
      "Framer Motion for smooth animations",
      "Real-time updates with WebSocket"
    ],
    backendFeatures: [
      "Node.js with Express and TypeScript",
      "PostgreSQL with Prisma ORM",
      "Stripe Connect for payment processing",
      "AWS for hosting and scalability",
      "Redis for session management"
    ],
    specialFeatures: [
      {
        iconName: "Lock",
        title: "Bank-Level Security",
        desc: "PCI DSS compliant payment processing with end-to-end encryption. Multi-factor authentication and biometric verification.",
      },
      {
        iconName: "Shield",
        title: "Fraud Prevention",
        desc: "Advanced AI-powered fraud detection with real-time monitoring. Automated risk assessment and dispute resolution system.",
      },
    ],
    stats: [
      { value: "$2,500+ USD", label: "Payments Processed" },
      { value: "99.9%", label: "Uptime Achieved" },
      { value: "6+", label: "Active Projects" },
    ],
    ctaText: "Build Similar Solution",
    ctaIconName: "Zap",
  },
  {
    id: "mentorship-platform",
    title: "Dracarys - Trading Psychology Platform",
    subtitle: "Platform Features",
    description: "Psychology-first trading development platform transforming traders through mental game mastery and bias detection.",
    longDescription: "Transform traders from gamblers into disciplined professionals through psychology-first mental game development. The most critical yet most neglected aspect of trading success.",
    tech: ["Next.js 14", "Supabase", "Stripe", "TypeScript"],
    impact: "85% psychology improvement",
    iconName: "Brain",
    features: [
      {
        iconName: "Brain",
        title: "Psychology Engine 2.0",
        desc: "Automated identification of cognitive biases with emotional tracking and self-reflection tools.",
      },
      {
        iconName: "BarChart3",
        title: "Advanced Trading Journal",
        desc: "Log trades with detailed performance analytics, AI-powered insights, and psychological pattern recognition.",
      },
      {
        iconName: "Target",
        title: "Goal Setting Framework",
        desc: "Custom routines builder with hierarchical goal-setting for steady psychological progression.",
      },
      {
        iconName: "Shield",
        title: "Bias Detection System",
        desc: "Automated identification of 15+ psychological biases in trading decisions with real-time alerts.",
      },
      {
        iconName: "Users",
        title: "Premium Mentorship",
        desc: "Dedicated mentor assignment with weekly coaching calls and personalized playbook development.",
      },
      {
        iconName: "TrendingUp",
        title: "Performance Analytics",
        desc: "Deep performance metrics with progress visualization and data-driven improvement planning.",
      },
    ],
    frontendFeatures: [
      "Next.js 14 with App Router and server components",
      "TypeScript for enterprise-grade type safety",
      "Tailwind CSS with shadcn/ui component library",
      "Mobile-responsive design for on-the-go trading",
      "Progressive Web App with offline journaling"
    ],
    backendFeatures: [
      "Supabase with PostgreSQL and real-time subscriptions",
      "Built-in authentication and user management",
      "Stripe integration for subscription management",
      "Real-time data synchronization and live updates",
      "Edge functions for serverless API endpoints"
    ],
    specialFeatures: [
      {
        iconName: "Brain",
        title: "Psychology Engine 2.0",
        desc: "Advanced AI algorithms detect 15+ psychological biases in real-time. Automated emotional pattern analysis with cognitive behavioral techniques.",
      },
      {
        iconName: "Award",
        title: "Evidence-Based Methods",
        desc: "Research-backed psychological techniques from behavioral finance and sports performance psychology. No signals, no shortcuts - pure mental mastery.",
      },
    ],
    stats: [
      { value: "85%", label: "Psychology Improvement" },
      { value: "40+", label: "Expert Mentors" },
      { value: "2,500+", label: "Trades Analyzed" },
    ],
    ctaText: "Build Your Trading Psychology Platform",
    ctaIconName: "Brain",
  },
  {
    id: "design-build",
    title: "Design & Build Platform",
    subtitle: "Platform Capabilities",
    description: "End-to-end construction management connecting architects, contractors, and clients with 3D visualization and predictive analytics.",
    longDescription: "End-to-end construction management platform connecting architects, contractors, and clients. Streamlines the entire design-to-completion workflow with real-time collaboration.",
    tech: ["React", "Node.js", "Three.js", "MongoDB"],
    impact: "40% cost reduction",
    iconName: "Building",
    features: [
      {
        iconName: "Building",
        title: "3D Design Visualization",
        desc: "Interactive 3D models with real-time collaboration for design reviews and client approvals.",
      },
      {
        iconName: "HardHat",
        title: "Project Management",
        desc: "Comprehensive project tracking with Gantt charts, resource allocation, and milestone management.",
      },
      {
        iconName: "Calculator",
        title: "Cost Estimation Engine",
        desc: "AI-powered cost calculations with real-time material pricing and labor cost analysis.",
      },
      {
        iconName: "FileText",
        title: "Document Management",
        desc: "Centralized document storage with version control, approval workflows, and digital signatures.",
      },
      {
        iconName: "Camera",
        title: "Progress Photography",
        desc: "Automated progress tracking with time-lapse construction photography and defect detection.",
      },
      {
        iconName: "MapPin",
        title: "Site Management",
        desc: "GPS-enabled site tracking, equipment monitoring, and safety compliance management.",
      },
    ],
    frontendFeatures: [
      "React 18 with advanced state management",
      "Three.js for 3D visualization and modeling",
      "Real-time collaborative editing with Operational Transforms",
      "Mobile-responsive design for field workers",
      "PWA capabilities for offline functionality"
    ],
    backendFeatures: [
      "Node.js microservices architecture",
      "MongoDB for flexible document storage",
      "WebSocket connections for real-time updates",
      "AWS with serverless functions and CDN",
      "AI/ML integration for cost estimation"
    ],
    specialFeatures: [
      {
        iconName: "TrendingUp",
        title: "Predictive Analytics",
        desc: "Machine learning algorithms predict project delays, cost overruns, and resource requirements. Historical data analysis for accurate forecasting.",
      },
      {
        iconName: "Users",
        title: "Stakeholder Management",
        desc: "Role-based access control with customizable dashboards for architects, contractors, subcontractors, and clients. Automated communication workflows.",
      },
    ],
    stats: [
      { value: "40%", label: "Cost Reduction" },
      { value: "60%", label: "Faster Delivery" },
      { value: "95%", label: "Client Satisfaction" },
    ],
    ctaText: "Transform Your Construction Business",
    ctaIconName: "Building",
  },
  {
    id: "youtube-portfolio",
    title: "YouTube Portfolio App",
    subtitle: "Platform Features",
    description: "Turn your YouTube channel into a portfolio showcasing your best content and engaging with your audience.",
    longDescription: "Transform your YouTube presence into a comprehensive portfolio platform that showcases your content, engages your audience, and drives growth.",
    tech: ["React", "Node.js", "MongoDB"],
    impact: "1000+ views",
    iconName: "Youtube",
    features: [
      {
        iconName: "Play",
        title: "Video Portfolio Showcase",
        desc: "Curated collection of your best videos with custom categories and playlists.",
      },
      {
        iconName: "Eye",
        title: "Analytics Dashboard",
        desc: "Detailed viewership analytics, engagement metrics, and growth tracking.",
      },
      {
        iconName: "Heart",
        title: "Community Engagement",
        desc: "Interactive features for fan engagement, comments, and community building.",
      },
      {
        iconName: "Share2",
        title: "Social Integration",
        desc: "Seamless sharing across social platforms with custom embed codes.",
      },
      {
        iconName: "TrendingUp",
        title: "Growth Optimization",
        desc: "AI-powered recommendations for content strategy and audience growth.",
      },
      {
        iconName: "Users",
        title: "Collaborator Network",
        desc: "Connect with other creators for collaborations and cross-promotion.",
      },
    ],
    frontendFeatures: [
      "React 18 with modern hooks and context",
      "Responsive design for all devices",
      "Video player integration with YouTube API",
      "Progressive Web App capabilities",
      "Real-time notifications and updates"
    ],
    backendFeatures: [
      "Node.js with Express framework",
      "MongoDB for content and user data",
      "YouTube Data API v3 integration",
      "JWT authentication and user management",
      "Cloud storage for media assets"
    ],
    specialFeatures: [
      {
        iconName: "TrendingUp",
        title: "Content Strategy AI",
        desc: "Machine learning algorithms analyze your content performance and provide data-driven recommendations for growth.",
      },
      {
        iconName: "Users",
        title: "Creator Community",
        desc: "Built-in networking features connecting creators, fostering collaborations, and building meaningful relationships.",
      },
    ],
    stats: [
      { value: "1000+", label: "Portfolio Views" },
      { value: "500+", label: "Community Members" },
      { value: "50+", label: "Collaborations" },
    ],
    ctaText: "Build Your YouTube Portfolio",
    ctaIconName: "Youtube",
  },
];

export function getProjectById(id: string): ProjectDataRaw | undefined {
  return projectsData.find(project => project.id === id);
}

export function getProjectsList() {
  return projectsData.map(project => ({
    id: project.id,
    title: project.title,
    description: project.description,
    icon: project.iconName, // Use iconName for client-side resolution
    link: `/projects/${project.id}`,
    tech: project.tech,
    impact: project.impact,
  }));
}
