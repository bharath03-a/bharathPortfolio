
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
    details: string;
    technologies: string[];
    achievements: string[];
  };
}

const ExperienceModal = ({ isOpen, onClose, experience }: ExperienceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[50vw] h-[50vh] bg-white/90 backdrop-blur-md border border-gray-200 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-black font-styrene">
            {experience.role} at {experience.company}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <div>
            <p className="text-black font-medium">{experience.period}</p>
            <p className="text-black mt-2">{experience.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-black mb-2">Additional Details</h4>
            <p className="text-black">{experience.details}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-black mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-black mb-2">Key Achievements</h4>
            <ul className="list-disc list-inside space-y-1 text-black">
              {experience.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceModal;
