
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  education: {
    institution: string;
    degree: string;
    period: string;
    description: string;
    details: string;
    coursework: string[];
    gpa?: string;
  };
}

const EducationModal = ({ isOpen, onClose, education }: EducationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[50vw] h-[50vh] bg-white/90 backdrop-blur-md border border-gray-200 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-black font-styrene">
            {education.degree}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <div>
            <h4 className="font-semibold text-black">{education.institution}</h4>
            <p className="text-black font-medium">{education.period}</p>
            {education.gpa && (
              <p className="text-black">GPA: {education.gpa}</p>
            )}
            <p className="text-black mt-2">{education.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-black mb-2">Additional Details</h4>
            <p className="text-black">{education.details}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-black mb-2">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, index) => (
                <span key={index} className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationModal;
