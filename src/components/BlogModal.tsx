import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

interface BlogModalProps {
  blog: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    content: string;
    tags: string[];
  };
  onClose: () => void;
}

const BlogModal = ({ blog, onClose }: BlogModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-lg border-0">
        <DialogHeader className="space-y-4">
          <div className="space-y-4">
            <DialogTitle className="text-3xl font-bold text-slate-900 leading-tight">
              {blog.title}
            </DialogTitle>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>
                  {new Date(blog.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{blog.readTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-8">
          <div className="aspect-[2/1] bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto">
                <span className="text-xl">📝</span>
              </div>
              <p className="text-slate-500 text-sm">Blog post featured image</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              {blog.excerpt}
            </p>
            
            <div className="text-slate-700 leading-relaxed space-y-4">
              {blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-slate-500 text-center">
              Thanks for reading! Share your thoughts and feedback.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogModal;
