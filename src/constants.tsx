import React from 'react';
import { 
  Layers, Zap, Server, ShieldCheck, Cloud, RefreshCcw, 
  Code2, Database, BarChart3 
} from 'lucide-react';

export const projects = [
  { id: 1, title: "Omnichannel Retail Engine", category: "E-Commerce", description: "Architected a high-availability retail ecosystem with real-time inventory synchronization across 50+ global locations. Reduced checkout latency by 70%.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop", metrics: "70% Latency Reduction | $2M+ ARR" },
  { id: 2, title: "Distributed SaaS Infrastructure", category: "SaaS", description: "Engineered a multi-tenant HR platform with rigid data isolation and automated payroll processing for 10,000+ concurrent enterprise users.", image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800&auto=format&fit=crop", metrics: "99.99% Uptime | 10k+ Users" },
  { id: 3, title: "Pharma Inventory Mesh", category: "POS", description: "Designed a real-time pharmaceutical stock management system with automated batch tracking and predictive replenishment algorithms.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800&auto=format&fit=crop", metrics: "Zero Leakage | 50k+ SKUs" },
  { id: 4, title: "High-Performance Logistics App", category: "E-Commerce", description: "Developed a React Native logistics platform with sub-second route optimization and real-time driver telemetry for 100k+ monthly active users.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop", metrics: "Sub-second Routing | 100k+ MAU" },
  { id: 5, title: "Enterprise Learning Ecosystem", category: "SaaS", description: "Scaled a global LMS portal to support 5,000+ interactive courses with low-latency video streaming and automated student progress analytics.", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop", metrics: "5k+ Courses | Global CDN" },
  { id: 6, title: "Cloud-Native Hospitality POS", category: "POS", description: "Built a cloud-native restaurant management system with kitchen display integration and automated table turnover optimization.", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop", metrics: "25% Faster Service | Cloud-Native" }
];

export const services = [
  { icon: React.createElement(Zap, { className: "w-8 h-8" }), title: "High-Concurrency Backend", description: "Engineering distributed systems capable of handling millions of requests with sub-200ms latency. We specialize in horizontal scaling and bottleneck elimination." },
  { icon: React.createElement(ShieldCheck, { className: "w-8 h-8" }), title: "Fintech Solutions", description: "Building secure, PCI-compliant payment gateways and financial ecosystems. Expert integration with Stripe, PayPal, and custom ledger systems." },
  { icon: React.createElement(Server, { className: "w-8 h-8" }), title: "System Architecture", description: "Designing decoupled, high-availability systems using Microservices and Background Workers to handle extreme traffic spikes." },
  { icon: React.createElement(Layers, { className: "w-8 h-8" }), title: "NextGen SaaS & ERP", description: "Developing multi-tenant ecosystems with rigid data isolation and modular design, ready for global enterprise deployment." },
  { icon: React.createElement(Cloud, { className: "w-8 h-8" }), title: "Cloud Ops & CI/CD", description: "Automating deployment pipelines via Docker and GitHub Actions. Expert AWS/Vultr infrastructure management for zero downtime." },
  { icon: React.createElement(RefreshCcw, { className: "w-8 h-8" }), title: "System Modernization", description: "Transforming legacy monoliths into modern, maintainable stacks. We ensure smooth refactoring without halting live operations." }
];

export const techArsenal = [
  { category: "Frontend", icon: React.createElement(Code2, { className: "w-5 h-5" }), skills: ["Next.js", "React.js", "Vue.js", "Blade", "Tailwind CSS", "Bootstrap 5", "jQuery/AJAX"] },
  { category: "Backend", icon: React.createElement(Database, { className: "w-5 h-5" }), skills: ["Laravel (Advanced)", "Node.js", "Express.js", "RESTful APIs", "System Design", "Multi-tenant SaaS", "Microservices"] },
  { category: "Database", icon: React.createElement(BarChart3, { className: "w-5 h-5" }), skills: ["MySQL / MariaDB", "PostgreSQL", "Redis Cache", "MongoDB", "Firebase", "Query Profiling"] },
  { category: "Cloud / DevOps", icon: React.createElement(Cloud, { className: "w-5 h-5" }), skills: ["AWS (EC2, S3)", "Docker", "NGINX / Apache", "GitHub Actions", "CI/CD", "SSL / App Security", "Vultr"] }
];
