import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, X } from 'lucide-react';

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    category: string;
    tech: string[];
    features: string[];
    challenges: string;
    solution: string;
    icon: React.ComponentType<any>;
    image?: string;
  };
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const IconComponent = project.icon;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-lg border-0">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
              <IconComponent size={24} className="text-slate-700" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
                {project.title}
              </DialogTitle>
              <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                {project.category}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div className="aspect-[2/1] bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden">
            {project.image ? (
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <IconComponent size={48} className="text-slate-400" />
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Overview</h3>
            <p className="text-slate-600 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Challenge</h3>
              <p className="text-slate-600 leading-relaxed">
                {project.challenges}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Solution</h3>
              <p className="text-slate-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-white/50">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">
              <ExternalLink size={16} className="mr-2" />
              View Live
            </Button>
            <Button variant="outline" className="border-slate-300 hover:bg-slate-50">
              <Github size={16} className="mr-2" />
              View Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
