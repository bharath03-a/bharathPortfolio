import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { useNavigate } from 'react-router-dom';
import { featuredProjects, type PortfolioProject } from '@/data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const navigate = useNavigate();

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleViewAll = () => {
    navigate('/projects');
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Enhanced background */}
      {/* <div className="absolute inset-0 bg-white"></div> */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(0,0,0,0.15) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-6 md:px-12 py-12 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">
        <div className="relative z-10">
          {/* Enhanced section header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              {/* <h2 className="text-sm font-semibold text-slate-600 mb-3 tracking-wider uppercase">
                Portfolio
              </h2> */}
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                Featured Projects
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Recent work across data platforms, AI applications, and distributed systems.
            </p>
          </div>

          {/* Enhanced project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleProjectClick(project)}
                  className="block cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="group-hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 cursor-pointer h-full bg-white/70 backdrop-blur-md border border-white/50">
                    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50/90 to-slate-100/90 relative overflow-hidden">
                      {project.image && (
                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                      )}
                      <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
                        <span className="inline-block px-3 py-1 bg-white/85 text-slate-700 text-xs rounded-full font-medium border border-white/70 shadow-sm">
                          {project.category}
                        </span>
                        {project.status && (
                          <span className="inline-block px-3 py-1 bg-emerald-100/90 text-emerald-800 text-xs rounded-full font-semibold border border-emerald-200 shadow-sm">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/5 transition-colors duration-300" />
                    </div>

                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1 pr-2 font-styrene">
                          {project.title}
                        </h4>
                        <ArrowRight
                          size={20}
                          className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-300 flex-shrink-0"
                        />
                      </div>
                      <p className="text-slate-600 mb-4 text-sm line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/80 text-slate-700 text-xs rounded-full font-medium border border-white/60 hover:bg-blue-50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 text-xs rounded-full font-medium border border-blue-200/50">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Enhanced call-to-action */}
          <div className="text-center animate-fade-in delay-700">
            <div className="inline-block bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <p className="text-slate-600 mb-4 text-lg font-medium">
                Interested in seeing more of my work?
              </p>
              <Button
                onClick={handleViewAll}
                className="bg-gradient-to-r from-slate-800 via-zinc-600 to-gray-700 hover:from-slate-900 hover:via-zinc-600 hover:to-gray-800 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-styrene font-medium group"
              >
                View All Projects
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default Projects;
