import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import DirectorProfile from '@/components/DirectorProfile';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import NexsafeSPA from '@/components/NexsafeSPA';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundParticles from '@/components/BackgroundParticles';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background font-sans relative">
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <DirectorProfile />
        <Services />
        <NexsafeSPA />
        <Projects />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
