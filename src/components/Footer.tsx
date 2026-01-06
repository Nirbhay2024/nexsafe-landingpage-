import { Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-200 py-12 relative z-10 border-t border-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">

                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <img src="/nexsafe-logo-icon.png" alt="Nexsafe" className="h-10 w-auto" />
                        <img src="/nexsafe-logo-text.png" alt="Nexsafe Energy" className="h-6 w-auto opacity-100" />
                    </div>

                    <div className="flex space-x-4">
                        {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="text-center text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Nexsafe Energy Infra Pvt Ltd.
                </div>
            </div>
        </footer>
    );
}
