import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;

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

    gsap.fromTo(content,
      { y: 80, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          About Me
        </h2>
        
        <div ref={contentRef} className="glass-card p-8 md:p-12 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Building the Future with Code
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a Computer Science graduate from Dr. A.P.J. Abdul Kalam Technical University with a strong foundation in full-stack development, artificial intelligence, and IoT.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                With 550+ problems solved on LeetCode and multiple successful projects, I specialize in creating scalable, efficient, and innovative solutions that bridge the gap between technology and real-world challenges. My expertise spans MERN stack, Python (Flask), cloud technologies, and system-level programming in C and Python.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="glass-card px-3 py-1 rounded-full text-sm text-primary border border-primary/20">
                  Problem Solver
                </span>
                <span className="glass-card px-3 py-1 rounded-full text-sm text-accent border border-accent/20">
                  AI Enthusiast
                </span>
                <span className="glass-card px-3 py-1 rounded-full text-sm text-primary border border-primary/20">
                  Full Stack Developer
                </span>
                <span className="glass-card px-3 py-1 rounded-full text-sm text-accent border border-accent/20">
                  IoT Innovator
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-xl font-semibold mb-3 text-primary">Current Focus</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI/ML Applications</li>
                  <li>• Full Stack Development</li>
                  <li>• System Design</li>
                  <li>• IoT Solutions</li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-xl font-semibold mb-3 text-accent">Achievements</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Flipkart Robotics Challenge Finalist</li>
                  <li>• 550+ LeetCode Problems</li>
                  <li>• Design Head at E-Cell</li>
                  <li>• Multiple Certifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;