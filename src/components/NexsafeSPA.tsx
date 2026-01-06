import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, Zap, FileText, Globe, ArrowRight, X, ChevronRight, ChevronLeft, Eye } from 'lucide-react';

const features = [
    {
        icon: Eye,
        title: "Real-Time Visibility",
        desc: "Capture progress directly from the field through geo-tagged visual updates. Get a clear picture of what's completed, in-progress, and remaining."
    },
    {
        icon: ShieldCheck,
        title: "Verified Proof",
        desc: "Every update is supported by location-verified evidence. Progress is not just reported, but validated, reducing ambiguity and increasing confidence."
    },
    {
        icon: Zap,
        title: "Faster Decisions",
        desc: "Structured updates make it easier to review progress and identify gaps early, reducing delays caused by late-stage corrections."
    },
    {
        icon: FileText,
        title: "Continuous Documentation",
        desc: "All activity is automatically recorded, creating a comprehensive digital record that simplifies audits, reviews, and historical data access."
    },
    {
        icon: Globe,
        title: "Business at Scale",
        desc: "Built to support large, distributed projects. Reduces manual coordination and improves transparency between clients, internal teams, and partners."
    }
];

export default function NexsafeSPA() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    return (
        <section id="spa" className="py-24 relative overflow-hidden bg-slate-50">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Clean Layout */}
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

                        <h2 className="text-5xl font-black text-slate-900 mb-2">
                            Nexsafe <span className="text-secondary">SPA</span>
                        </h2>
                        <h3 className="text-2xl font-bold text-slate-700 mb-6">
                            Instant Access to Project Status
                        </h3>

                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Clients are provided secure access to a live project view that reflects actual on-ground progress. Without relying on periodic reports, stakeholders can see the current status of their projects at any time.
                        </p>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="group px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-primary transition-colors flex items-center gap-2 shadow-lg"
                        >
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
                        {/* Simplified Dashboard Visual for Landing */}
                        <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl ring-4 ring-slate-50 rotate-2 hover:rotate-0 transition-transform duration-500">
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
                            <div className="space-y-6 opacity-80">
                                <div className="h-32 bg-slate-100 rounded-xl relative overflow-hidden">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400 font-bold">Interactive Dashboard</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>

            {/* Modal Popup with Carousel */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                            >
                                <X size={24} className="text-slate-600" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] md:h-[400px]">

                                {/* Left Side: Visual/Color */}
                                <div className="bg-slate-900 p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative z-10 p-6 bg-white/10 rounded-2xl backdrop-blur-sm mb-6"
                                    >
                                        {(() => {
                                            const Icon = features[currentIndex].icon;
                                            return <Icon size={64} className="text-white" />;
                                        })()}
                                    </motion.div>
                                    <div className="relative z-10 text-slate-400 text-sm font-bold uppercase tracking-widest">
                                        Feature {currentIndex + 1} / {features.length}
                                    </div>
                                </div>

                                {/* Right Side: Text & Controls */}
                                <div className="p-8 md:p-12 flex flex-col justify-center relative">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -20, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-3xl font-black text-slate-900 mb-4">
                                            {features[currentIndex].title}
                                        </h3>
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            {features[currentIndex].desc}
                                        </p>
                                    </motion.div>

                                    <div className="flex gap-4 mt-8">
                                        <button
                                            onClick={prevSlide}
                                            className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all"
                                        >
                                            <ChevronLeft size={24} className="text-slate-700" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all shadow-md"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>

                                </div>

                            </div>

                            {/* Progress Bar */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${((currentIndex + 1) / features.length) * 100}%` }}
                                    className="h-full bg-primary"
                                />
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
