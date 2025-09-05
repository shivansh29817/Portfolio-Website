import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "IntelliBot Builder",
      year: "2025",
      description: "A Full-Stack AI chatbot builder enabling users to create and manage personalized chatbot personas with secure authentication and dynamic frontend.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth", "GenAI", "Bcrypt", "Render"],
      achievements: [
        "Engineered a No-Code Solution for Custom Chatbot Development",
        "Integrated Gemini API for Tone & Persona Specific responses",
        "Implemented Firebase Authentication for Secure SignUp and SignIn",
        "Achieved 100% deployment success rate on Render",
        "Implemented hashed API key storage using bcryptjs in MongoDB"
      ],
      type: "Web Application",
      status: "Live",
      githubUrl: "https://github.com/shivansh29817/AI-CHATBOT_BUILDER",
      liveUrls: ["https://ai-chatbot-builder-f-e.onrender.com/", "https://ai-chatbot-builder-1.onrender.com/"]
    },
    {
      title: "Autonomous Warehouse System",
      year: "2024",
      description: "An IoT-powered warehouse management system with AI-driven freshness detection and automated inventory management.",
      technologies: ["YOLOv8", "Python", "OCR", "IoT", "Arduino", "TensorFlow", "OpenCV","Machine Learning","Pandas","PyTorch"],
      achievements: [
        "Shortlisted for Final Round in Flipkart GRID Robotics Challenge 6.0",
        "Built a freshness detection system for Produce, improving inventory quality by 35%",
        "Trained YOLOv8 models for product identification, achieving 90% accuracy in real-time detection",
        "Used EasyOCR to automate label extraction for pricing and labels",
        "Enhanced warehouse efficiency via IoT devices and Arduino systems"
      ],
      type: "AI/IoT System",
      status: "Award Winner",
      githubUrl: "https://github.com/shivansh29817/Flipkart_GRID_6.0_Smart_Vision",
      liveUrls: ["https://youtu.be/g_eb28oBMWM"]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const projectCards = projectsRef.current?.children;

    gsap.fromTo(title,
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(projectCards,
      { y: 100, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Featured Projects
        </h2>
        
        <div ref={projectsRef} className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card p-8 md:p-12 rounded-3xl hover:scale-[1.02] transition-all duration-500 glow-effect"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">
                      {project.title}
                    </h3>
                    <span className="glass-card px-3 py-1 rounded-full text-sm text-accent border border-accent/20">
                      {project.year}
                    </span>
                    {project.status === "Award Winner" && (
                      <Award className="w-6 h-6 text-yellow-400" />
                    )}
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    <span className="glass-card px-3 py-1 rounded-full text-xs text-muted-foreground border border-muted/20">
                      {project.type}
                    </span>
                    <span className={`glass-card px-3 py-1 rounded-full text-xs border ${
                      project.status === "Live" 
                        ? "text-green-400 border-green-400/20" 
                        : "text-yellow-400 border-yellow-400/20"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="glass-card px-3 py-1 rounded-full text-sm text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      className="glass-button"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    {project.liveUrls && (
                       <Button 
                         variant="outline" 
                         className="glass-card border-accent/30 text-accent hover:bg-accent/10"
                         onClick={() => {
                           if (project.liveUrls) {
                             project.liveUrls.forEach(url => window.open(url, '_blank'));
                           }
                         }}
                       >
                         <ExternalLink className="w-4 h-4 mr-2" />
                         Live Demo
                       </Button>
                     )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-accent mb-4">
                    Key Outcomes 
                  </h4>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, achIndex) => (
                      <div 
                        key={achIndex}
                        className="glass-card p-4 rounded-xl flex items-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;