import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Globe, 
  Database, 
  Wrench, 
  Cloud, 
  Palette
} from 'lucide-react';

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const SkillsSection: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  // Updated skill categories without percentages/bars
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'Java' },
        { name: 'Python' }
      ]
    },
    {
      title: 'Frontend',
      icon: <Globe size={24} />,
      color: 'from-violet-400 to-purple-500',
      skills: [
        { name: 'React' },
        { name: 'Tailwind CSS' }
      ]
    },
    {
      title: 'Backend',
      icon: <Database size={24} />,
      color: 'from-teal-400 to-green-500',
      skills: [
        { name: 'Django' }
      ]
    },
    {
      title: 'Development Tools',
      icon: <Wrench size={24} />,
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Git & GitHub' },
        { name: 'VS Code' },
        { name: 'Postman' },
        { name: 'Cursor' },
        { name: 'Bolt' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={24} />,
      color: 'from-indigo-400 to-blue-600',
      skills: [
        { name: 'AWS' },
        { name: 'Netlify' }
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: <Palette size={24} />,
      color: 'from-pink-400 to-rose-500',
      skills: [
        { name: 'Tailwind CSS' },
        { name: 'Responsive Design' },
        { name: 'UI/UX Principles' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.getAttribute('data-skill-id');
            if (skillId) {
              setTimeout(() => {
                setVisibleSkills(prev => new Set([...prev, skillId]));
              }, 200);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = sectionRef.current?.querySelectorAll('[data-skill-id]');
    skillElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const SkillBar: React.FC<{ skill: Skill; categoryIndex: number; skillIndex: number }> = ({ 
    skill, 
    categoryIndex, 
    skillIndex 
  }) => {
    const skillId = `${categoryIndex}-${skillIndex}`;
    const isVisible = visibleSkills.has(skillId);

    return (
      <span
        className={`px-3 py-1 bg-slate-700/40 rounded-full text-slate-200 text-sm border border-slate-600/40 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
        data-skill-id={skillId}
        style={{ transitionDelay: `${skillIndex * 80}ms` }}
      >
        {skill.name}
      </span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-teal-900 
                 relative overflow-hidden py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/15 to-indigo-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100">
            My Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            I'm passionate about learning and mastering new technologies. I'm always expanding this 
            toolkit and staying current with industry trends and best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 
                         backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50
                         transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                         hover:shadow-cyan-500/10 transform opacity-0 translate-y-8
                         animate-fade-up`}
              style={{ 
                animationDelay: `${categoryIndex * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 
                              transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    categoryIndex={categoryIndex}
                    skillIndex={skillIndex}
                  />
                ))}
              </div>

              {/* Subtle Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 
                             group-hover:opacity-5 transition-opacity duration-300 
                             pointer-events-none rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 max-w-2xl mx-auto">
            Currently diving deeper into long-chain architectures, building intelligent agents, advanced cloud architectures, and security systems.
          </p>
        </div>
      </div>
            
      {/* Custom Animation Styles */}
      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;