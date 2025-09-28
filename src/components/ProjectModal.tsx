import React from 'react';
import { X, Github, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    summary: string;
    techStack: string[];
    image: string;
    fullDescription: string;
    contributions: string[];
    images: string[];
    githubUrl: string;
    liveUrl: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-gradient-to-br from-slate-800 to-slate-900 
                     rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto
                     border border-slate-700/50 shadow-2xl transform transition-all 
                     duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-98 opacity-0'}`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-700/50 hover:bg-slate-600/50 
                   rounded-full transition-colors duration-200"
        >
          <X size={20} className="text-slate-300" />
        </button>

        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-100">{project.title}</h2>
            <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden flex items-center justify-center bg-slate-700/40">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {project.images.length > 1 && (
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                <button
                  onClick={prevImage}
                  className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
                >
                  <ArrowLeft size={20} className="text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
                >
                  <ArrowRight size={20} className="text-white" />
                </button>
              </div>
            )}
            
            {/* Image Indicators */}
            {project.images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? 'bg-cyan-400' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Contributions */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-100">Key Contributions</h3>
            <ul className="space-y-2">
              {project.contributions.map((contribution, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-100">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 
                           text-cyan-300 text-sm font-medium rounded-full border 
                           border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 
                         bg-gradient-to-r from-slate-700 to-slate-600 
                         hover:from-slate-600 hover:to-slate-500
                         text-white font-medium rounded-xl transition-all duration-300 
                         hover:scale-105 hover:shadow-lg"
              >
                <Github size={20} />
                View Code
              </a>
            )}
            
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 
                       bg-gradient-to-r from-cyan-500 to-cyan-600 
                       hover:from-cyan-400 hover:to-cyan-500
                       text-white font-medium rounded-xl transition-all duration-300 
                       hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;