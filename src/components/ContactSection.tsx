import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  CheckCircle
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-teal-900 
                       relative overflow-hidden py-20">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/15 to-indigo-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat about technology? 
            I'd love to hear from you. Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Let's Connect</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                I'm always interested in new opportunities, collaborations, and interesting projects. 
                Whether you have a question about my work or want to discuss potential opportunities, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Email</p>
                  <p className="text-slate-100 font-medium">idpooja1406@gmail.com
                  </p>
                </div>
              </div>

              

              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-colors duration-300">
                <div className="p-3 bg-gradient-to-r from-teal-400 to-green-500 rounded-lg">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Location</p>
                  <p className="text-slate-100 font-medium">Chennai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-slate-100 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/pooja2006git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 
                           hover:border-cyan-500/50 hover:bg-cyan-500/10 
                           transition-all duration-300 group"
                >
                  <Github size={20} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/poojasri2006/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 
                           hover:border-blue-500/50 hover:bg-blue-500/10 
                           transition-all duration-300 group"
                >
                  <Linkedin size={20} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>
                <a 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 
                           hover:border-sky-500/50 hover:bg-sky-500/10 
                           transition-all duration-300 group"
                >
                  <Twitter size={20} className="text-slate-400 group-hover:text-sky-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-slate-100 mb-2">Message Sent!</h4>
                  <p className="text-slate-300">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 
                               rounded-lg text-slate-100 placeholder-slate-400 
                               focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 
                               transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 
                               rounded-lg text-slate-100 placeholder-slate-400 
                               focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 
                               transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 
                             rounded-lg text-slate-100 placeholder-slate-400 
                             focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 
                             transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 
                             rounded-lg text-slate-100 placeholder-slate-400 
                             focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 
                             transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 
                           text-white font-semibold rounded-xl transition-all duration-300 
                           hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 
                           flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 
                                rounded-xl opacity-0 group-hover:opacity-100 transition-opacity 
                                duration-300 -z-10 blur-xl"></div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;