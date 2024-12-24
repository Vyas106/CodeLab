"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Code, BookOpen, Users, Calendar, Cpu, Award,
  ChevronRight, Github, ExternalLink, Terminal,
  FileCode, MessageSquare, Brackets, ArrowUp,
  Database, Cloud, Brain, Menu, X, Globe, 
  Video, Shield, Sparkles, GraduationCap,
  Rocket, 
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CodeLabCommunity = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation items
  // const navItems = ["Home", "Documentation", "Community", "Events", "About"];
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Documentation", path: "/Doc" },
    { name: "Community", path: "/community" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
  ];



  // Interactive Labs data
  const labsData = [
    {
      icon: <Terminal className="w-12 h-12 text-blue-600" />,
      title: "FormLab",
      description: "Interactive form building with real-time validation",
      features: ["Live Preview", "Validation Rules", "Export Options"]
    },
    {
      icon: <Brackets className="w-12 h-12 text-blue-600" />,
      title: "CodeCompiler",
      description: "Multi-language code compilation environment",
      features: ["20+ Languages", "Code Sharing", "Auto-completion"]
    },
    {
      icon: <FileCode className="w-12 h-12 text-blue-600" />,
      title: "ProjectLab",
      description: "Guided project-based learning experience",
      features: ["Industry Projects", "Mentor Support", "Portfolio Building"]
    }
  ];

  // Learning paths data
  const learningPaths = [
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: "MERN Stack",
      description: "Complete MongoDB, Express, React, Node.js pathway",
      level: "Intermediate"
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      title: "Cloud DevOps",
      description: "Master modern DevOps practices and tools",
      level: "Advanced"
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "AI & ML",
      description: "Practical machine learning and AI development",
      level: "Advanced"
    }
  ];

  // Offerings data
  const offerings = [
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: "Structured Learning Tracks",
      description: "Carefully curated learning paths for different expertise levels",
      features: ["Frontend Development", "Backend Engineering", "DevOps & Cloud", "Mobile Development"]
    },
    {
      icon: <Video className="w-12 h-12 text-blue-600" />,
      title: "Live Workshops",
      description: "Interactive sessions with industry experts",
      features: ["Weekly Tech Talks", "Code Reviews", "System Design Sessions", "Career Guidance"]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Practice Projects",
      description: "Real-world projects with comprehensive feedback",
      features: ["Industry Standard Tools", "Code Review System", "Portfolio Building", "Deployment Training"]
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: "Premium Resources",
      description: "Exclusive learning materials and tools",
      features: ["E-Books Library", "Video Tutorials", "Coding Challenges", "Interview Prep"]
    }
  ];

  // Navbar Component
  const Navbar = () => (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">CodeLab</span>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
  <NavigationMenuItem key={item.name}>
    <a href={item.path}>
      <Button
        variant="ghost"
        className="text-gray-700 hover:text-blue-600"
      >
        {item.name}
      </Button>
    </a>
  </NavigationMenuItem>
))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button 
              variant="ghost"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => window.open('https://github.com/yourusername', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            
            <Button className="bg-blue-600 hover:bg-blue-700">
              Join Us
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navItems.map(({item} : any) => (
                <Button 
                  key={item}
                  variant="ghost" 
                  className="w-full text-left text-gray-700"
                >
                  {item}
                </Button>
              ))}
              <Button 
                variant="ghost"
                className="w-full text-left text-gray-700"
                onClick={() => window.open('https://github.com/yourusername', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Hero Section
  const Hero = () => (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto text-center">
        <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
          Introducing CodeLab Community • Beta V0.3
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Level Up Your Coding Journey
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Join a thriving community of developers and accelerate your growth through collaborative learning
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-8 text-lg flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Start Learning
          </Button>
          <Button 
            variant="outline" 
            className="h-12 px-8 text-lg border-green-600 text-green-600 hover:bg-green-50 flex items-center gap-2"
            onClick={() => window.open('https://whatsapp.com/group/yourgroup', '_blank')}
          >
            <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-5 h-5"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    d="M20.52 3.48A11.92 11.92 0 0 0 12 0a11.92 11.92 0 0 0-8.49 3.51 11.91 11.91 0 0 0-3.49 8.47 11.86 11.86 0 0 0 1.62 6.02L0 24l5.1-1.35a11.84 11.84 0 0 0 6.9 2.1h.01a11.92 11.92 0 0 0 8.49-3.51A11.91 11.91 0 0 0 24 12a11.88 11.88 0 0 0-3.48-8.52ZM12 21.55a10.18 10.18 0 0 1-5.5-1.62l-.4-.25-3.27.87.88-3.19-.26-.41a10.12 10.12 0 1 1 8.54 4.6Zm5.61-7.91c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.23-.65.08a8.43 8.43 0 0 1-2.47-1.53 9.34 9.34 0 0 1-1.73-2.14c-.15-.26 0-.4.11-.55s.26-.3.38-.46c.12-.15.15-.26.23-.44.08-.15.04-.34-.02-.49s-.67-1.63-.92-2.23c-.24-.58-.48-.5-.67-.5h-.56c-.19 0-.5.07-.76.34s-1 .97-1 2.36 1.02 2.74 1.16 2.93 2 3.05 4.89 4.28c.68.3 1.21.47 1.63.6.69.22 1.32.19 1.82.11.55-.08 1.76-.72 2-1.42.24-.71.24-1.31.17-1.42s-.3-.26-.61-.4Z"
  />
</svg>

            
            Join WhatsApp Group
          </Button>
        </div>
      </div>
    </section>
  );

  // Labs Section
  const Labs = () => (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Interactive Learning Labs
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Hands-on practice with real-world technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labsData.map((lab, index) => (
            <Card 
              key={index} 
              className="border-2 border-blue-100 hover:border-blue-300 transition-all"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {lab.icon}
                </div>
                <CardTitle className="text-gray-900">{lab.title}</CardTitle>
                <CardDescription>{lab.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {lab.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Lab
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Offerings Section
  const Offerings = () => (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            Everything You Need
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive resources and tools to accelerate your tech career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <Card 
              key={index} 
              className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {offering.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      {offering.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {offering.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {offering.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">10k+ Active Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Global Community</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Weekly Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Learning Paths Section
  const LearningPaths = () => (
    <section className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Structured Learning Paths
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Follow curated paths to master modern technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <Card key={index} className="border border-blue-100 hover:border-blue-300 transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {path.icon}
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    {path.level}
                  </Badge>
                </div>
                <CardTitle className="text-gray-900">{path.title}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <Button className="w-full bg-blue-600 hover:bg- */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  View Path
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-bold text-gray-900">CodeLab</span>
            </div>
            <p className="text-gray-600">
              Empowering developers through community and hands-on learning.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                Beta V0.3
              </Badge>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'Tutorials', 'Blog', 'Roadmaps'].map((item) => (
                <li key={item}>
                  <Button 
                    variant="ghost" 
                    className="text-gray-600 hover:text-blue-600 p-0 h-auto"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Community</h3>
            <ul className="space-y-2">
              {['Discord', 'WhatsApp', 'Forums', 'Events'].map((item) => (
                <li key={item}>
                  <Button 
                    variant="ghost" 
                    className="text-gray-600 hover:text-blue-600 p-0 h-auto"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Connect</h3>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-blue-600"
                onClick={() => window.open('https://github.com/yourusername', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-green-600"
                onClick={() => window.open('https://whatsapp.com/group/yourgroup', '_blank')}
              >
                           <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-5 h-5"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    d="M20.52 3.48A11.92 11.92 0 0 0 12 0a11.92 11.92 0 0 0-8.49 3.51 11.91 11.91 0 0 0-3.49 8.47 11.86 11.86 0 0 0 1.62 6.02L0 24l5.1-1.35a11.84 11.84 0 0 0 6.9 2.1h.01a11.92 11.92 0 0 0 8.49-3.51A11.91 11.91 0 0 0 24 12a11.88 11.88 0 0 0-3.48-8.52ZM12 21.55a10.18 10.18 0 0 1-5.5-1.62l-.4-.25-3.27.87.88-3.19-.26-.41a10.12 10.12 0 1 1 8.54 4.6Zm5.61-7.91c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.23-.65.08a8.43 8.43 0 0 1-2.47-1.53 9.34 9.34 0 0 1-1.73-2.14c-.15-.26 0-.4.11-.55s.26-.3.38-.46c.12-.15.15-.26.23-.44.08-.15.04-.34-.02-.49s-.67-1.63-.92-2.23c-.24-.58-.48-.5-.67-.5h-.56c-.19 0-.5.07-.76.34s-1 .97-1 2.36 1.02 2.74 1.16 2.93 2 3.05 4.89 4.28c.68.3 1.21.47 1.63.6.69.22 1.32.19 1.82.11.55-.08 1.76-.72 2-1.42.24-.71.24-1.31.17-1.42s-.3-.26-.61-.4Z"
  />
</svg>

              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-blue-600"
                onClick={() => window.open('https://discord.gg/yourserver', '_blank')}
              >
                <MessageSquare className="w-5 h-5" />
              </Button>
            </div>
            <div className="mt-4 text-gray-600">
              <p>© 2024 CodeLab</p>
              <p>Built with ❤️ by the community</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Labs />
      <Offerings />
      <LearningPaths />
      <Footer />
      
      {/* Scroll to Top Button */}
      {showScroll && (
        <Button
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default CodeLabCommunity;