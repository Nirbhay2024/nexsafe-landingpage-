import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-black text-white mb-8"
                >
                    Let's Build the <span className="text-primary">Future</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                        { icon: MapPin, title: "Headquarters", text: "New Delhi, India" },
                        { icon: Mail, title: "Email", text: "contact@nexsafe.in" },
                        { icon: Phone, title: "Phone", text: "+91 98765 43210" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/5 p-8 rounded-2xl"
                        >
                            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-white font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
