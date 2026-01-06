import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-black text-white mb-6 leading-tight">
                            Building Trust. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Delivering Power.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            In an industry clouded by complexity, Nexsafe Energy Infra stands as a beacon of transparency. We don't just execute projects; we engineer relationships built on decades of integrity.
                        </p>

                        <div className="space-y-4">
                            {["Unwavering Integrity", "Complete Transparency", "End-to-End Execution"].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary" size={20} />
                                    <span className="text-white font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-full overflow-hidden border-2 border-white/10 relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                                alt="Construction"
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>
                        {/* Spinning Text Ring Mockup - decorative */}
                        <div className="absolute -inset-4 border border-dashed border-white/20 rounded-full animate-spin-slow" />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
