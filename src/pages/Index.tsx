import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Now from '@/components/Now';
import About from '@/components/About';
import WritingTeaser from '@/components/WritingTeaser';
import ContactFooter from '@/components/ContactFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-paper">
      <Navigation />
      <Hero />
      <Projects />
      <Now />
      <About />
      <WritingTeaser />
      <ContactFooter />
    </div>
  );
};

export default Index;
