import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Updated projects
  const projects = [
    {
      id: '1',
      title: 'Flame Out',
      summary: 'An interactive strategy game based on the Vertex Cover problem, where players place the minimum number of water tanks (nodes) on mountains to extinguish fires and protect all forest paths.',
      techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      image: '/flameout1.jpeg',
      fullDescription: 'Flame Out transforms the classic Vertex Cover problem into a strategic, interactive puzzle. Players must place the minimum number of water tanks on mountain nodes such that every forest path (edge) is protected, extinguishing fires efficiently while balancing constraints and trade-offs.',
      contributions: [
        'Modeled gameplay mechanics around the Vertex Cover optimization problem',
        'Implemented intuitive drag-and-drop interactions and accessible UI',
        'Designed level progression with increasing graph complexity and constraints',
        'Added visual feedback and animations for clear state transitions'
      ],
      images: ['/flameout1.jpeg', '/flameout2.jpeg'],
      githubUrl: 'https://github.com/pooja2006git/Flame_Out.ai.git',
      liveUrl: 'https://ia4vp3bkee99bbn7hcg0difiq.bolt.host/'
    },
    {
      id: '2',
      title: 'Insight Ledger',
      summary: 'A smarter Progressive Web App for offline transaction visibility.',
      techStack: ['React', 'TypeScript', 'PWA', 'IndexedDB', 'Workbox'],
      image: '/insight1.jpeg',
      fullDescription: 'Insight Ledger is a PWA that keeps transaction data available and actionable even without connectivity. It uses offline-first storage, background sync, and intelligent conflict handling to provide a smooth bookkeeping experience on the go.',
      contributions: [
        'Implemented offline-first data layer with IndexedDB and background sync',
        'Built installable PWA with caching strategies using Workbox',
        'Added reconciliation views and conflict resolution UX for resync events',
        'Integrated charts and filters for quick visibility into spending patterns'
      ],
      images: ['/insight1.jpeg', '/insight2.jpeg'],
      githubUrl: 'https://github.com/pooja2006git/Insight_Ledger_PWA.git',
      liveUrl: 'https://mellow-gecko-0879d3.netlify.app/'
    },
    {
      id: '3',
      title: 'Node Hunt',
      summary: 'A strategy game based on the Vertex Cover problem on a Sierpinski graph, where players select key nodes across three recursive levels to cover all paths efficiently.',
      techStack: ['React', 'TypeScript', 'Graph Algorithms', 'Tailwind CSS'],
      image: '/node0.jpeg',
      fullDescription: 'Node Hunt challenges players to solve the Vertex Cover problem on a Sierpinski graph. Through three recursive levels, players pick strategic nodes to cover every path while minimizing selections, learning combinatorial optimization through play.',
      contributions: [
        'Implemented Sierpinski graph generator for three recursive levels',
        'Built heuristics to guide players toward minimal vertex covers',
        'Added progressive difficulty and hints based on player moves',
        'Created responsive UI with clear edge coverage visualization'
      ],
      images: ['/node0.jpeg', '/nodehunt1.jpeg', '/nodehunt2.jpeg'],
      githubUrl: '',
      liveUrl: 'https://node-hunt-react-game-wqm4.bolt.host/'
    }
  ];

  const handleViewDetails = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-teal-900 
                       relative overflow-hidden py-20">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on, exploring modern web technologies, 
            AI, and problem-solving challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectsSection;