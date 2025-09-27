
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterAnimation from './TypewriterAnimation';
import { getAssetPath } from '@/utils/pathUtils';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-10 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white/10 backdrop-blur-sm px-6 md:px-12 py-12 md:py-24 rounded-3xl relative overflow-hidden border border-white/20 shadow-2xl">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="w-full relative z-10">
          <div className="space-y-8">
            <div className="text-left relative">
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
                {/* Text content - enhanced typography */}
                <div className="flex-1 min-w-0 order-2 lg:order-1 text-center lg:text-left">
                  <div className="animate-fade-in">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight text-black font-styrene tracking-tight">
                      <span className="inline-block animate-fade-in">Hi,</span>{' '}
                      <span className="inline-block animate-fade-in delay-200">I'm</span>{' '}
                      <span className="inline-block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-fade-in delay-300">
                        Bharath
                      </span>
                    </h1>
                  </div>
                  <div className="mt-6 animate-fade-in delay-500">
                    <TypewriterAnimation />
                  </div>
                  <div className="animate-fade-in delay-700">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl leading-relaxed font-styrene mt-6 mx-auto lg:mx-0 font-light tracking-wide">
                      <span className="font-medium text-gray-900">Data Engineer</span> and{' '}
                      <span className="font-medium text-gray-900">Data Scientist</span> with over{' '}
                      <span className="font-semibold text-black">2 years</span> of experience in data engineering, 
                      advanced analytics, and machine learning model deployment. Specialized in building{' '}
                      <span className="font-medium text-gray-900">scalable ETL pipelines</span>,{' '}
                      <span className="font-medium text-gray-900">NLP solutions</span>, and{' '}
                      <span className="font-medium text-gray-900">cloud-based data architectures</span>.
                    </p>
                  </div>
                </div>
                
                {/* Enhanced image with modern styling */}
                <div className="flex-shrink-0 order-1 lg:order-2 animate-fade-in delay-300">
                  <div className="relative group">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-64 lg:h-80 rounded-3xl overflow-hidden border-3 border-white shadow-2xl mx-auto transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                      <img 
                        src={getAssetPath("/25_0673_COIS_convocation-544.jpg")} 
                        alt="Bharath - Graduation Photo"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Floating decoration */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full shadow-lg animate-bounce delay-1000"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full shadow-lg animate-bounce delay-1500"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced buttons with modern styling */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start animate-fade-in delay-1000">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 w-full sm:w-auto font-styrene font-medium text-lg group shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View My Work
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://drive.google.com/file/d/1Pnl2m432A6jF5PL4x3nZw1TQ2TU7bsEN/view?usp=sharing', '_blank')}
                className="border-2 border-black/20 hover:border-black hover:bg-black hover:text-white text-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 w-full sm:w-auto font-styrene font-medium text-lg group shadow-lg hover:shadow-xl transform hover:scale-105 bg-white/50 backdrop-blur-sm"
              >
                <Download size={20} className="transition-transform duration-300 group-hover:scale-110" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
