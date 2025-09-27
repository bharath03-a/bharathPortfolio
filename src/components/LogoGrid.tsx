
import { getAssetPath } from '@/utils/pathUtils';

const LogoGrid = () => {
  const logos = [
    {
      name: "HSBC",
      src: getAssetPath("/hsbc.png"),
      alt: "HSBC Logo"
    },
    {
      name: "Indian Institute of Technology Patna",
      src: getAssetPath("/iitp.png"),
      alt: "IIT Patna Logo"
    },
    {
      name: "Mayo Clinic", 
      src: getAssetPath("/MC.jpeg"),
      alt: "Mayo Clinic Logo"
    },
    {
      name: "SpringML",
      src: getAssetPath("/springML.png"), 
      alt: "SpringML Logo"
    },
    {
      name: "The University of Arizona",
      src: getAssetPath("/uofa.png"),
      alt: "University of Arizona Logo"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-slate-500 mb-3 tracking-wider uppercase">
            Trusted By
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Organizations I've Worked With
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
