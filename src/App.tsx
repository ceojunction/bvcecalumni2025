import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyAttend } from './components/WhyAttend';
import { EventInfo } from './components/EventInfo';
import { Registration } from './components/Registration';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { SocialShare } from './components/SocialShare';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = (e.target as HTMLAnchorElement).getAttribute('href');
      if (target?.startsWith('#')) {
        const element = document.querySelector(target);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyAttend />
      <EventInfo />
      <Registration />
      <About />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <SocialShare />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
