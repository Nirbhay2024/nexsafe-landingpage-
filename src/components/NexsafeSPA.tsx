import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, FileText, Globe, MapPin, ArrowRight, Eye } from 'lucide-react';

const features = [
    {
        icon: Eye,
        title: "Real-Time Visibility",
        desc: "Capture progress directly from the field through geo-tagged visual updates. Get a clear picture of what's completed, in-progress, and remaining."
    },
    {
        icon: ShieldCheck,
        title: "Verified Proof",
        desc: "Every update is supported by location-verified evidence. Progress is validated, reducing ambiguity and increasing confidence."
    },
    {
        icon: Zap,
        title: "Faster Decisions",
        desc: "Structured updates make it easier to review progress and identify gaps early, reducing delays and enabling faster approvals."
    },
    {
        icon: FileText,
        title: "Continuous Documentation",
        desc: "All activity is automatically recorded, creating a comprehensive digital record for audits, reviews, and historical data."
    },
    {
        icon: Globe,
        title: "Business at Scale",
        desc: "Built to support large, distributed projects. Reduces manual coordination and improves transparency across teams and partners."
    }
];

export default function NexsafeSPA() {
    return (
        <section id="spa" className="py-24 relative overflow-hidden bg-slate-50">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section: Intro + Dashboard Visual */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs mb-6 border border-secondary/20 uppercase tracking-widest">
                            <Activity size={14} /> Proprietary Tech
                        </div>

                        <h2 className="text-5xl font-black text-slate-900 mb-2">
                            Nexsafe <span className="text-secondary">SPA</span>
                        </h2>
                        <h3 className="text-2xl font-bold text-slate-700 mb-6">
                            Instant Access to Project Status
                        </h3>

                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Clients are provided secure access to a live project view that reflects actual on-ground progress. Without relying on periodic reports, stakeholders can see the current status of their projects at any time, staying informed and aligned.
                        </p>

                        <button className="group px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-primary transition-colors flex items-center gap-2 shadow-lg">
                            Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl ring-4 ring-slate-50">
                            {/* Decorative Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" /> Live Feed
                                </div>
                            </div>

                            {/* Dashboard Content Mockup */}
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-1 bg-slate-50 p-4 rounded-xl">
                                        <div className="text-slate-400 text-xs font-bold uppercase">Completion</div>
                                        <div className="text-3xl font-black text-primary mt-1">78%</div>
                                    </div>
                                    <div className="flex-1 bg-slate-50 p-4 rounded-xl">
                                        <div className="text-slate-400 text-xs font-bold uppercase">Active Sites</div>
                                        <div className="text-3xl font-black text-secondary mt-1">12</div>
                                    </div>
                                </div>

                                {/* Map Pin Mockup */}
                                <div className="bg-slate-100 h-48 rounded-xl relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md z-10 animate-bounce">
                                        <MapPin size={20} className="text-red-500" />
                                        <span className="text-xs font-bold text-slate-700">Site #404: Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section: Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
                        >
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <feature.icon size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
