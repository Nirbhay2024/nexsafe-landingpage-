import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Urban Solar Infra",
        location: "Uttar Pradesh",
        desc: "Deploying high-efficiency smart street lighting across 3 major metropolitan cities.",
        image: "/project-solar-light.jpg",
        tags: ["Smart City", "Solar"]
    },
    {
        title: "Factory Power",
        location: "Gujarat",
        desc: "Complete transition of a 50-acre manufacturing plant to green rooftop solar energy.",
        image: "/project-solar-factory.jpg",
        tags: ["Industrial", "EPC"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-5xl font-black text-slate-900 mb-2">Featured <span className="text-primary">Work</span></h2>
                    </div>
                    <a href="#contact" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-semibold">
                        View All <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-6 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-inner">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="lg:p-8">
                                <div className="flex gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                                <p className="text-xl text-slate-500 mb-8">{project.desc}</p>
                                <button className="px-6 py-3 border border-slate-200 rounded-full text-slate-900 hover:bg-slate-900 hover:text-white transition-all font-semibold shadow-sm">
                                    View Case Study
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
