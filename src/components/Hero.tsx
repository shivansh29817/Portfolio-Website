import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contactRef = useRef(null);
  const beamRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate beam light first
    gsap.fromTo(beamRef.current,
      { scaleY: 0, opacity: 0 },
      { scaleY: 1, opacity: 1, duration: 2, ease: "power2.out" }
    );
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0, rotationX: -45 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0, rotationX: -25 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(contactRef.current,
      { y: 30, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.4"
    );
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl floating card-3d"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-accent/15 blur-2xl floating-slow"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 rounded-full bg-primary/10 blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl floating-slow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 rounded-full bg-primary/25 blur-xl floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-36 h-36 rounded-full bg-accent/10 blur-2xl floating-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative inline-block mb-6">
            <h1 
              ref={titleRef} 
              className="text-5xl md:text-7xl lg:text-8xl font-bold hero-title"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              Shivansh Mishra
            </h1>
            {/* Beam light underline */}
            <div ref={beamRef} className="beam-light"></div>
          </div>
          
          <p 
            ref={subtitleRef} 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 pt-3 font-light"
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
          >
            ML & IoT Geek | MERN Stack Developer | GenAI Enthusiast
          </p>
          
          <div ref={contactRef} className="space-y-6">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a 
                href="https://leetcode.com/u/shivansh29817/" 
                target="_blank"
                rel="noopener noreferrer"
                className="card-3d p-4 rounded-2xl glow-effect group"
              >
                <div className="card-3d-inner">
                  <Code className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shivansh29817@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="card-3d p-4 rounded-2xl glow-effect group"
              >
                <div className="card-3d-inner">
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a 
                href="https://github.com/shivansh29817" 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-3d p-4 rounded-2xl glow-effect group"
              >
                <div className="card-3d-inner">
                  <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a 
                href="https://linkedin.com/in/shivansh-mishra-knp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-3d p-4 rounded-2xl glow-effect group"
              >
                <div className="card-3d-inner">
                  <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="glass-button text-lg px-8 py-4 card-3d"
              >
                <span className="card-3d-inner">View My Work</span>
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="glass-card border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-4 card-3d"
              >
                <span className="card-3d-inner">Get In Touch</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;