import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
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
  };
  onViewDetails: (project: any) => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails, index }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 
                 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50
                 transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                 hover:shadow-cyan-500/20 cursor-pointer transform
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      onClick={() => onViewDetails(project)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} cover`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent 
                       to-transparent opacity-0 group-hover:opacity-100 transition-opacity 
                       duration-300 flex items-end justify-center pb-4">
          <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium
                           flex items-center gap-2 transform translate-y-4 
                           group-hover:translate-y-0 transition-transform duration-300">
            <ArrowRight size={16} />
            View Details
          </button>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 
                      transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 
                       text-cyan-300 text-xs font-medium rounded-full border 
                       border-cyan-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                     pointer-events-none rounded-2xl"></div>
    </div>
  );
};

export default ProjectCard;