import { useEffect, useState } from 'react';
import { ArrowRight, Eye, Youtube } from 'lucide-react';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import GlobalBackground from './components/GlobalBackground';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <GlobalBackground />
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-teal-900 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-violet-500/15 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-indigo-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              
              {/* Name */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight">
                Pooja
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto lg:mx-0 rounded-full"></div>
              </div>

              {/* Tagline */}
              <p className="text-xl sm:text-2xl text-cyan-300 font-medium max-w-2xl mx-auto lg:mx-0">
              Problem-Solver | Content Creator | Reliance Foundation Scholar | Business Systems (CSBS) Student
              </p>

              {/* Introduction */}
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build real-time projects using Generative AI and love solving problems through code.

I run a knowledge-sharing initiative through my YouTube channel ‘UpNext’, where I simplify tech concepts and offer career-focused resources. 
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="#projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 
                           text-white font-semibold rounded-xl transition-all duration-300 
                           hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 
                           flex items-center justify-center gap-2"
                >
                  <Eye size={20} />
                  View Projects
                  <ArrowRight 
                    size={20} 
                    className="transition-transform duration-300 group-hover:translate-x-1" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 
                                rounded-xl opacity-0 group-hover:opacity-100 transition-opacity 
                                duration-300 -z-10 blur-xl"></div>
                </a>

                <a 
                  href="https://youtube.com/@learnwithupnext?si=tuOKzgokeJWb_IJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-violet-600 
                           text-white font-semibold rounded-xl transition-all duration-300 
                           hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25 
                           flex items-center justify-center gap-2"
                >
                  <Youtube size={20} />
                  YouTube
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-violet-500 
                                rounded-xl opacity-0 group-hover:opacity-100 transition-opacity 
                                duration-300 -z-10 blur-xl"></div>
                </a>
              </div>
            </div>

            {/* Right Side - Portrait Image */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className="relative group">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-teal-400 
                              rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 
                              blur-lg animate-pulse"></div>
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-3xl">
                  <div className="w-80 h-96 sm:w-96 sm:h-112 bg-gradient-to-br from-slate-700 to-slate-800 
                                rounded-2xl flex items-center justify-center relative overflow-hidden">
                    
                    {/* Portrait Image */}
                    <img
                      src="/photo1.jpeg"
                      alt="Pooja portrait"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="eager"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400">
        <div className="animate-bounce">
          <ArrowRight className="rotate-90" size={24} />
        </div>
      </div>
      </div>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Resume Section */}
      <ResumeSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

export default App;


