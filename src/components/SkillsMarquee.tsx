
import React from 'react';

const SkillsMarquee = () => {
  const skills = [
    "Python", "R", "SQL", "Apache Spark", "Kafka", "Docker", "Kubernetes", 
    "AWS", "Azure", "GCP", "TensorFlow", "PyTorch", "Pandas", "NumPy", 
    "Scikit-learn", "Apache Beam", "Airflow", "dbt", "Snowflake", "BigQuery",
    "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Tableau", "Power BI",
    "Jupyter", "Git", "CI/CD", "MLOps", "NLP", "Computer Vision", "Statistics"
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white/40 backdrop-blur-sm relative border-y border-white/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/50">
            {/* <h2 className="text-sm font-semibold text-gray-600 mb-2 tracking-wider uppercase">
              Technical Skills
            </h2> */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-styrene">
              Technologies & Tools
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
          </div>
        </div>

        {/* Enhanced scrolling container */}
        <div className="relative">
          <div className="flex animate-skills-scroll">
            {/* First set */}
            <div className="flex space-x-6 px-3 flex-shrink-0">
              {skills.map((skill, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                >
                  <span className="text-gray-800 font-medium text-lg whitespace-nowrap group-hover:text-blue-600 transition-colors duration-300 font-styrene">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-6 px-3 flex-shrink-0">
              {skills.map((skill, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                >
                  <span className="text-gray-800 font-medium text-lg whitespace-nowrap group-hover:text-blue-600 transition-colors duration-300 font-styrene">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="font-medium">Continuously Learning & Growing</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
