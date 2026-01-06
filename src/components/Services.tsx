import { motion } from 'framer-motion';
import { TrendingUp, Zap, Building2, HardHat, FileText, Users } from 'lucide-react';

const services = [
    { icon: Zap, title: "Energy Infra", desc: "Sustainable power solutions & grid assets." },
    { icon: Building2, title: "Civil Works", desc: "High-durability public & private infra." },
    { icon: FileText, title: "Tenders", desc: "Expert bid management & strategy." },
    { icon: Users, title: "Partnships", desc: "Connecting global stakeholders." },
    { icon: TrendingUp, title: "Consulting", desc: "Data-driven strategic advisory." },
    { icon: HardHat, title: "EPC", desc: "Engineering, Procurement, Construction." }
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expertise</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions across the infrastructure value chain.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative bg-white/5 border border-white/5 p-8 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all">
                                <service.icon size={24} />
                            </div>

                            <h3 className="relative z-10 text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="relative z-10 text-gray-400 text-sm">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
