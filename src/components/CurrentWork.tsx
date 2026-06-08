import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const CurrentWork = () => {
  const gitCortex = projects.find((project) => project.id === 'gitcortex');

  if (!gitCortex) {
    return null;
  }

  return (
    <section id="current-work" className="py-16 px-4 md:px-6 relative">
      <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm border border-white/40 shadow-2xl rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-semibold">
                Currently building
              </span>
              <span className="inline-flex rounded-full bg-white/80 text-slate-700 border border-white/70 px-3 py-1 text-xs font-semibold">
                Rust + MCP
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-styrene mb-4">
              GitCortex
            </h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-6">
              A local-first, branch-aware code knowledge graph for Git repositories. It indexes code with
              tree-sitter, stores graph relationships locally, and lets AI coding assistants query the
              repo through MCP instead of repeatedly scanning files.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Rust', 'tree-sitter', 'KuzuDB', 'MCP', 'Git hooks'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/80 text-slate-700 text-xs rounded-full font-medium border border-white/70">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-slate-900 hover:bg-slate-800 text-white"
                onClick={() => window.open(gitCortex.github, '_blank', 'noopener,noreferrer')}
              >
                <Github size={16} className="mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 bg-white/80 hover:bg-white"
                onClick={() => window.open(gitCortex.liveUrl, '_blank', 'noopener,noreferrer')}
              >
                <ExternalLink size={16} className="mr-2" />
                Benchmark Report
              </Button>
            </div>
          </div>

          <div className="min-h-[280px] lg:min-h-full bg-slate-950 relative overflow-hidden">
            <img
              src={gitCortex.image}
              alt="GitCortex code knowledge graph visual"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;
