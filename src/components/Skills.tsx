import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "Python", "SQL", "JavaScript", "TypeScript"],
      color: "primary"
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Socket.io", "Flask"],
      color: "accent"
    },
    {
      title: "AI/ML Frameworks",
      skills: ["GenAI", "TensorFlow", "OpenCV", "Pandas", "Ultralytics", "Scikit-Learn"],
      color: "primary"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Firebase", "Supabase"],
      color: "accent"
    },
    {
      title: "Tools & Platforms",
      skills: ["Trae-AI", "VS Code", "GitHub", "Postman", "Jupyter", "Arduino IDE"],
      color: "primary"
    },
    {
      title: "Deployment",
      skills: ["Vercel", "Render", "Netlify", "Firebase Hosting"],
      color: "accent"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const skills = skillsRef.current;

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

    gsap.fromTo(skills?.children,
      { y: 100, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Technical Skills
        </h2>
        
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
              <h3 className={`text-xl font-semibold mb-4 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`glass-card px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-110 ${
                      category.color === 'primary' 
                        ? 'text-primary border border-primary/20 hover:bg-primary/10' 
                        : 'text-accent border border-accent/20 hover:bg-accent/10'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding Platforms Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient">
            Coding Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">550+</div>
              <div className="text-lg text-muted-foreground mb-2">LeetCode Problems</div>
              <div className="text-sm text-accent">15+ Badges Earned</div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-accent mb-2">40+</div>
              <div className="text-lg text-muted-foreground mb-2">Salesforce Badges</div>
              <div className="text-sm text-primary">Platform Expert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;