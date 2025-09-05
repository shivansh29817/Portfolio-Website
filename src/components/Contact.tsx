import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus({
      loading: true,
      success: false,
      error: false,
      message: ''
    });
    
    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: `From: ${formData.email}\n\nMessage:\n${formData.message}`,
        to_email: 'shivansh29817@gmail.com',
        reply_to: formData.email
      };
      
      await emailjs.send(
         'service_w9a2bxu', // EmailJS Service ID
         'template_lffrbni', // EmailJS Template ID
         templateParams,
         'C37Iau6XfPiNyDAmL' // Your public key
       );
      
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: ''
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again or contact me directly.'
      });
    }
  };

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

    gsap.fromTo(content?.children,
      { y: 80, opacity: 0 },
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

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8317061930",
      href: "tel:+918317061930"
    },
    {
      icon: Mail,
      label: "Email",
      value: "shivansh29817@gmail.com",
      href: "mailto:shivansh29817@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kanpur, Uttar Pradesh",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/shivansh29817",
      color: "text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shivansh-mishra-knp",
      color: "text-blue-400"
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      href: "https://leetcode.com/shivansh29817",
      color: "text-yellow-400"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="px-6 lg:px-16 pt-16 lg:pt-24 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Let's Connect
        </h2>
        
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Get In Touch
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, 
                or just having a chat about technology and innovation. 
                Feel free to reach out!
              </p>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="glass-card p-3 rounded-full mr-4 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-accent">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 glow-effect group"
                    >
                      <social.icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Send a Message
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      First Name *
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`glass-card border-border/50 focus:border-primary/50 bg-background/50 ${
                        errors.firstName ? 'border-red-500' : ''
                      }`}
                      placeholder="Your first name"
                      disabled={formStatus.loading}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Last Name *
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`glass-card border-border/50 focus:border-primary/50 bg-background/50 ${
                        errors.lastName ? 'border-red-500' : ''
                      }`}
                      placeholder="Your last name"
                      disabled={formStatus.loading}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`glass-card border-border/50 focus:border-primary/50 bg-background/50 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="your.email@example.com"
                    disabled={formStatus.loading}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject *
                  </label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`glass-card border-border/50 focus:border-primary/50 bg-background/50 ${
                      errors.subject ? 'border-red-500' : ''
                    }`}
                    placeholder="What's this about?"
                    disabled={formStatus.loading}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`glass-card border-border/50 focus:border-primary/50 bg-background/50 min-h-32 ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Tell me about your project or just say hello!"
                    disabled={formStatus.loading}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                {/* Status Messages */}
                {formStatus.success && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-500">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p className="text-red-500">{formStatus.message || 'Failed to send message. Please try again.'}</p>
                  </div>
                )}
                
                <Button 
                  type="submit"
                  disabled={formStatus.loading}
                  className="glass-button w-full text-lg py-6 disabled:opacity-50"
                >
                  {formStatus.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground">
            © 2025 Shivansh Mishra.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;