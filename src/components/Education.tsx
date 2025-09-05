import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

  const education = [
    {
      degree: "B.Tech - Computer Science and Engineering",
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      duration: "2021 - 2025",
      grade: "CGPA - 7.0",
      location: "Kanpur, Uttar Pradesh",
      type: "current"
    },
    {
      degree: "12th Grade",
      institution: "KDMA International",
      duration: "2020 - 2021",
      grade: "Percentage - 85%",
      location: "Kanpur, Uttar Pradesh",
      type: "completed"
    },
    {
      degree: "10th Grade",
      institution: "KDMA International",
      duration: "2018 - 2019",
      grade: "Percentage - 87%",
      location: "Kanpur, Uttar Pradesh",
      type: "completed"
    }
    ,
    {
      degree: "IELTS English Proficiency Test",
      institution: "IDP - International Development Program",
      grade: "Overall Band 7.0",
    }
  ];

  const coursework = [
    "Operating Systems",
    "Web Development",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "System Design",
    "Database Management Systems",
    "Internet of Things",
    "Artificial Intelligence"
  ];

  const certifications = [
    "Salesforce AI App Builder with Einstein Agentforce",
    "AWS Cloud Practitioner",
    "Programming Fundamentals in Python"
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const timeline = timelineRef.current;

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

    gsap.fromTo(timeline?.children,
      { x: -100, opacity: 0 },
      {
        x: 0, 
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
    <section ref={sectionRef} id="education" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Education & Certifications
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
              <GraduationCap className="w-6 h-6 mr-3" />
              Education
            </h3>
            
            <div ref={timelineRef} className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className={`glass-card rounded-2xl transition-all duration-300 hover:scale-105 ${
                    edu.degree === 'IELTS English Proficiency Test' ? 'px-6 py-3' : 'p-6'
                  } ${
                    edu.type === 'current' ? 'border-primary/30 glow-effect' : ''
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      {edu.type === 'current' && (
                        <span className="glass-card px-2 py-1 rounded-full text-xs text-primary border border-primary/20">
                          Current
                        </span>
                      )}
                    </div>

                    
                    <p className="text-accent font-medium mb-2">
                      {edu.institution}
                    </p>
                    
                    {(edu.duration || edu.location) && (
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
                        {edu.duration && (
                          <div className="flex items-center mb-1 sm:mb-0">
                            <Calendar className="w-4 h-4 mr-2" />
                            {edu.duration}
                          </div>
                        )}
                        {edu.location && (
                          <div className="flex items-center mb-1 sm:mb-0">
                            <MapPin className="w-4 h-4 mr-2" />
                            {edu.location}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className={`mt-3 pt-3 ${(edu.duration || edu.location || edu.degree === 'IELTS English Proficiency Test') ? 'border-t border-border' : ''}`}>
                      <span className="text-primary font-semibold">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Coursework & Certifications */}
          <div className="space-y-8">
            {/* Relevant Coursework */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Relevant Coursework
              </h3>
              <div className="glass-card p-6 rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coursework.map((course, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass-card p-4 rounded-xl hover:scale-105 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                      <span className="text-foreground font-medium">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Extracurricular
              </h3>
              <div className="glass-card p-6 rounded-2xl space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Design Head - Entrepreneurship Cell</p>
                    <p className="text-muted-foreground text-sm">Leading design, branding, and promotional campaigns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Rock Band Competitions Winner</p>
                    <p className="text-muted-foreground text-sm">Multiple wins showcasing musical creativity and stage performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Freelance - Video Editing & Production with SEO</p>
                    <p className="text-muted-foreground text-sm">Drove 120K+ Subscribers each for two client YT channels in 3 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;