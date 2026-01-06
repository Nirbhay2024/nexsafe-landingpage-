import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export default function NexsafeSPA() {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-50">

            {/* Background Glow - Adjusted for Light Mode */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-200 rounded-full blur-[120px] opacity-40 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs mb-6 border border-secondary/20 uppercase tracking-widest">
                            <Activity size={14} /> Proprietary Tech
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                            Nexsafe <span className="text-secondary">SPA</span>
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Real-time intelligence for complex infrastructure. Track every milestone, asset, and team member from a single glass pane.
                        </p>

                        <ul className="space-y-4">
                            {["Live Progress Tracking", "Automated Compliance Reports", "Geo-Fenced Asset Management"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-secondary" /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 perspective-1000"
                    >
                        <div className="relative bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-2xl ring-1 ring-slate-200">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-10" />

                            <div className="relative space-y-4">
                                <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
                                    <span className="font-bold text-slate-800 text-lg">Project Alpha</span>
                                    <span className="flex items-center gap-1 text-green-600 text-xs font-mono uppercase"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Live</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="text-slate-400 text-xs uppercase mb-1">Status</div>
                                        <div className="text-2xl font-bold text-primary">On Track</div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="text-slate-400 text-xs uppercase mb-1">Efficiency</div>
                                        <div className="text-2xl font-bold text-secondary">94%</div>
                                    </div>
                                </div>

                                <div className="h-32 bg-slate-50 rounded-xl flex items-end justify-between p-4 gap-2 border border-slate-100">
                                    {[30, 50, 45, 70, 60, 85, 95, 75, 60, 80].map((h, i) => (
                                        <div key={i} className="w-full bg-gradient-to-t from-primary/30 to-primary rounded-t-sm" style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
