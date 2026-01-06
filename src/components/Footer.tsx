import { Zap, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">

                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black font-bold">
                            <Zap size={20} fill="currentColor" />
                        </div>
                        <span className="text-xl font-bold text-white uppercase tracking-wider">Nexsafe</span>
                    </div>

                    <div className="flex space-x-4">
                        {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Nexsafe Energy Infra Pvt Ltd.
                </div>
            </div>
        </footer>
    );
}
