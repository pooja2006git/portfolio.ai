import React, { useState, useEffect, useRef } from 'react';
import { 
  Download,
  Code2, 
  Trophy, 
  FolderOpen, 
  Award, 
  Users, 
  Star
} from 'lucide-react';

interface StatCard {
  icon: React.ReactNode;
  number: number;
  label: string;
  color: string;
  suffix?: string;
}

const ResumeSection: React.FC = () => {
  const [visibleStats, setVisibleStats] = useState<Set<number>>(new Set());
  const [animatedNumbers, setAnimatedNumbers] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  // Stats data - easily replaceable
  const stats: StatCard[] = [
    {
      icon: <Code2 size={28} />,
      number: 60,
      label: 'DSA Problems Solved',
      color: 'from-cyan-400 to-blue-500',
      suffix: '+'
    },
    {
      icon: <Trophy size={28} />,
      number: 10,
      label: 'Hackathons Participated',
      color: 'from-violet-400 to-purple-500'

    },
    {
      icon: <FolderOpen size={28} />,
      number: 5,
      label: 'Projects Completed',
      color: 'from-teal-400 to-green-500',
      suffix: '+'
    },
    {
      icon: <Award size={28} />,
      number: 5,
      label: 'Certifications Earned',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: <Users size={28} />,
      number: 5,
      label: 'Team Collaborations',
      color: 'from-indigo-400 to-blue-600'
    },
    {
      icon: <Star size={28} />,
      number: 92,
      label: 'Average Project Score',
      color: 'from-pink-400 to-rose-500',
      suffix: '%'
    }
  ];

  // Animate numbers when cards become visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statIndex = parseInt(entry.target.getAttribute('data-stat-index') || '0');
            if (!visibleStats.has(statIndex)) {
              setVisibleStats(prev => new Set([...prev, statIndex]));
              
              // Animate number counting
              const targetNumber = stats[statIndex].number;
              const duration = 2000; // 2 seconds
              const steps = 60;
              const increment = targetNumber / steps;
              let currentNumber = 0;
              
              const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= targetNumber) {
                  currentNumber = targetNumber;
                  clearInterval(timer);
                }
                setAnimatedNumbers(prev => ({
                  ...prev,
                  [statIndex]: Math.floor(currentNumber)
                }));
              }, duration / steps);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const statElements = sectionRef.current?.querySelectorAll('[data-stat-index]');
    statElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [stats]);

  const StatCard: React.FC<{ stat: StatCard; index: number }> = ({ stat, index }) => {
    const isVisible = visibleStats.has(index);
    const animatedNumber = animatedNumbers[index] || 0;

    return (
      <div
        data-stat-index={index}
        className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 
                   backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50
                   transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                   hover:shadow-cyan-500/20 transform opacity-0 translate-y-8
                   animate-fade-up cursor-pointer`}
        style={{ 
          animationDelay: `${index * 150}ms`,
          animationFillMode: 'forwards'
        }}
      >
        {/* Icon */}
        <div className={`inline-flex p-4 bg-gradient-to-r ${stat.color} rounded-xl text-white mb-4
                        group-hover:scale-110 transition-transform duration-300`}>
          {stat.icon}
        </div>

        {/* Number */}
        <div className="space-y-2">
          <div className="text-3xl sm:text-4xl font-bold text-slate-100 group-hover:text-cyan-300 
                         transition-colors duration-300">
            {isVisible ? animatedNumber : 0}{stat.suffix || ''}
          </div>
          
          {/* Label */}
          <p className="text-slate-300 font-medium leading-tight">
            {stat.label}
          </p>
        </div>

        {/* Subtle Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 
                       group-hover:opacity-5 transition-opacity duration-300 
                       pointer-events-none rounded-2xl`}></div>
      </div>
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
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/15 to-indigo-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100">
            Resume & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Here's a snapshot of my journey , including key milestones, 
            achievements, and the skills I've developed along the way. Download my full 
            resume to know more about my experience and projects.
          </p>

          {/* View Resume Link */}
          <div className="pt-4">
            <a
              href="/resume.png"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 
                       text-white font-semibold rounded-xl transition-all duration-300 
                       hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 
                       flex items-center justify-center gap-3 mx-auto"
            >
              <Download size={20} />
              Resume
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 
                            rounded-xl opacity-0 group-hover:opacity-100 transition-opacity 
                            duration-300 -z-10 blur-xl"></div>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 max-w-2xl mx-auto">
            These numbers represent my commitment to continuous learning and growth in 
            software development. Each achievement has contributed to my journey as a 
            well-rounded developer.
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

export default ResumeSection;