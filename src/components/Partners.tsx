import { motion } from 'framer-motion';

export default function Partners() {
    const brands = [
        "SolarOne", "InfraBuild", "GovTech India", "EcoPower Systems", "UrbanGrid", "FutureEnergy",
        "SolarOne", "InfraBuild", "GovTech India", "EcoPower Systems", "UrbanGrid", "FutureEnergy"
    ];

    return (
        <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
            <div className="max-w-full">

                <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">Trusted by Industry Leaders</p>

                <div className="flex whitespace-nowrap">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="flex gap-20"
                    >
                        {[...brands, ...brands].map((brand, index) => (
                            <span
                                key={index}
                                className="text-3xl font-black text-slate-200 uppercase hover:text-slate-400 transition-colors"
                            >
                                {brand}
                            </span>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
