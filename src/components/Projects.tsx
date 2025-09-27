import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Database, Brain, BarChart3, Zap, TrendingUp, Building2, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '@/utils/pathUtils';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: 'crime-data-analysis',
      title: "Crime Data Analysis",
      description: "Predictive modeling for U.S. gun violence pattern analysis",
      icon: BarChart3,
      category: "Data Analytics",
      tech: ["Python", "ML", "Spark", "Statistical Analysis", "Pattern Recognition"],
      fullDescription: "Analyzed large-scale crime datasets to identify patterns in gun violence across the United States, developing predictive models to forecast crime hotspots and trends using advanced statistical methods.",
      features: ["Big data processing", "Predictive modeling", "Geographic analysis", "Pattern recognition", "Statistical forecasting", "Crime hotspot identification"],
      challenges: "Processing massive datasets with complex relationships while ensuring model accuracy and interpretability for law enforcement applications.",
      solution: "Utilized Apache Spark for distributed processing and ensemble methods for robust predictive modeling with comprehensive feature engineering and geographic clustering.",
      image: getAssetPath("/Large-Scale Crime Data Analysis and Predictive Modeling.png")
    },
    {
      id: 'testcase-ai',
      title: "TestCase AI",
      description: "AI-powered healthcare test case generation using LangGraph and Google Gemini",
      icon: Brain,
      category: "AI",
      tech: ["Python", "LangGraph", "Google Gemini", "Healthcare Compliance", "FDA", "HIPAA"],
      fullDescription: "An AI-powered system that automatically converts healthcare software requirements into compliant, traceable test cases using LangGraph and Google Gemini models. Features AI-powered requirement extraction, compliance mapping to healthcare standards, and comprehensive test generation.",
      features: ["AI-powered requirement extraction", "Compliance mapping", "Comprehensive test generation", "Quality validation", "Session memory", "LangGraph workflow", "Healthcare domain knowledge"],
      challenges: "Converting complex healthcare requirements into compliant test cases while ensuring traceability and meeting regulatory standards.",
      solution: "Implemented a multi-step LangGraph workflow with conditional routing, error handling, and specialized healthcare domain knowledge to generate comprehensive, compliant test cases.",
      image: getAssetPath("/placeholder.svg")
    },
    {
      id: 'image-recognition',
      title: "Image Recognition",
      description: "Multi-label face attribute prediction using deep learning",
      icon: Brain,
      category: "AI",
      tech: ["TensorFlow", "Computer Vision", "Deep Learning", "CNN", "Multi-label Classification"],
      fullDescription: "Implemented a deep learning project for face attribute prediction using convolutional neural networks with multi-label classification capabilities for accurate facial feature detection.",
      features: ["Multi-label classification", "CNN architecture", "Face attribute detection", "High accuracy prediction", "Feature extraction", "Model optimization"],
      challenges: "Achieving high accuracy in multi-label classification while managing computational complexity and preventing overfitting in facial recognition tasks.",
      solution: "Developed a custom CNN architecture with attention mechanisms and data augmentation techniques for improved performance and robust feature learning.",
      image: getAssetPath("/Multi-Label Image Recognition and Attribute Prediction.png")
    },
    {
      id: 'real-time-analytics',
      title: "Real-time Analytics Pipeline",
      description: "Real-time Spotify data processing and visualization platform",
      icon: Zap,
      category: "Data Engineering",
      tech: ["Kafka", "Spark", "API", "Real-time Processing", "Music Analytics"],
      fullDescription: "Leveraged the Spotify Web API to extract, process, and warehouse music data for real-time analytics and visualization, providing insights into music trends and user behavior.",
      features: ["Real-time data streaming", "API integration", "Interactive dashboards", "Music analytics", "Trend analysis", "Performance monitoring"],
      challenges: "Managing real-time data streams while providing interactive analytics and maintaining system performance under high-throughput conditions.",
      solution: "Built a streaming architecture using Kafka and Spark Streaming with real-time dashboard updates and efficient data processing pipelines.",
      image: getAssetPath("/Streaming Data Analytics and Visualization.png")
    }
  ];

  const handleProjectClick = (project) => {
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
              A showcase of data engineering, machine learning, and analytics projects
            </p>
          </div>

          {/* Enhanced project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleProjectClick(project)}
                  className="block cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="group-hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 cursor-pointer h-full bg-white/70 backdrop-blur-md border border-white/50">
                    {/* Enhanced project image/icon area */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50/90 to-slate-100/90 relative overflow-hidden flex items-center justify-center p-8">
                      {project.image && (
                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                      )}
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg border border-white/60 mb-4">
                          <IconComponent size={28} className="text-slate-700" />
                        </div>
                        <div className="text-center">
                          <span className="inline-block px-3 py-1 bg-white/70 text-slate-600 text-xs rounded-full font-medium border border-white/50">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      {/* Animated background elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
