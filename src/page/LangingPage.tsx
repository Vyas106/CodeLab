import React, { useState, useEffect } from 'react';
import {
  Code, BookOpen, Users, Calendar, Cpu, Award,
  ChevronRight, Github, ExternalLink, Terminal,
  FileCode, MessageSquare, Brackets, ArrowUp,
  Database, Cloud, Brain, Menu, X
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
  const [activeTab, setActiveTab] = useState('all');

  // Scroll to top functionality
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
  const navItems = ["Home", "Courses", "Community", "Events", "About"];

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
                  <NavigationMenuItem key={item}>
                    <Button 
                      variant="ghost" 
                      className="text-gray-700 hover:text-blue-600"
                    >
                      {item}
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button className="bg-blue-600 hover:bg-blue-700">
              Join Us
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Button 
                  key={item}
                  variant="ghost" 
                  className="w-full text-left text-gray-700"
                >
                  {item}
                </Button>
              ))}
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
          <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-8 text-lg">
            Start Learning
          </Button>
          <Button variant="outline" className="h-12 px-8 text-lg border-blue-600 text-blue-600">
            View Courses
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
            <Card key={index} className="border border-blue-100">
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
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Documentation</li>
              <li>Tutorials</li>
              <li>Blog</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Community</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Discord</li>
              <li>Forums</li>
              <li>Events</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Connect</h3>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
                <ExternalLink className="w-5 h-5" />
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
      <LearningPaths />
      <Footer />
      
      {/* Scroll to Top Button */}
      {showScroll && (
        <Button
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 rounded-full p-3"
          onClick={scrollToTop}
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default CodeLabCommunity;