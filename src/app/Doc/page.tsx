"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Code2, Wrench, BookOpen, Terminal, ExternalLink, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UsedFor {
  name: string;
  color: string;
}

interface Language {
  name: string;
  description: string;
  link: string;
  category: string;
  popularity: number;
  usedFor: UsedFor[];
}

interface Tool {
  name: string;
  description: string;
  link: string;
  category: string;
  popularity: number;
  features: string[];
}

const CodeLabDocs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const languages = [
    // Original entries kept
    {
      name: 'Python',
      description: 'A high-level, interpreted language known for its readability and versatility, widely used in web development, data analysis, artificial intelligence, and more.',
      link: 'https://docs.python.org/',
      category: 'General Purpose',
      popularity: 1,
      usedFor: [
        { name: 'Web Development', color: 'bg-blue-100 text-blue-800' },
        { name: 'AI/ML', color: 'bg-purple-100 text-purple-800' },
        { name: 'Data Science', color: 'bg-green-100 text-green-800' },
        { name: 'Automation', color: 'bg-orange-100 text-orange-800' }
      ]
    },
    {
      name: 'JavaScript',
      description: 'A dynamic, interpreted language primarily used for enhancing interactivity on websites and developing web applications.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      category: 'Web',
      popularity: 2,
      usedFor: [
        { name: 'Frontend', color: 'bg-pink-100 text-pink-800' },
        { name: 'Backend', color: 'bg-indigo-100 text-indigo-800' },
        { name: 'Mobile Apps', color: 'bg-teal-100 text-teal-800' },
        { name: 'Desktop Apps', color: 'bg-yellow-100 text-yellow-800' }
      ]
    },
    {
      name: 'TypeScript',
      description: 'A superset of JavaScript that adds static typing, designed for large-scale application development.',
      link: 'https://www.typescriptlang.org/docs/',
      category: 'Web',
      popularity: 3,
      usedFor: [
        { name: 'Enterprise Apps', color: 'bg-blue-100 text-blue-800' },
        { name: 'Frontend', color: 'bg-pink-100 text-pink-800' },
        { name: 'Backend', color: 'bg-indigo-100 text-indigo-800' }
      ]
    },
    {
      name: 'Rust',
      description: 'A systems programming language focused on safety, speed, and concurrency, preventing segmentation faults, and guaranteeing thread safety.',
      link: 'https://doc.rust-lang.org/',
      category: 'Systems',
      popularity: 4,
      usedFor: [
        { name: 'Systems Programming', color: 'bg-orange-100 text-orange-800' },
        { name: 'WebAssembly', color: 'bg-purple-100 text-purple-800' },
        { name: 'Network Services', color: 'bg-green-100 text-green-800' }
      ]
    },
    // Additional languages
    {
      name: 'Java',
      description: 'A class-based, object-oriented programming language designed to be platform-independent.',
      link: 'https://docs.oracle.com/en/java/',
      category: 'General Purpose',
      popularity: 5,
      usedFor: [
        { name: 'Enterprise', color: 'bg-blue-100 text-blue-800' },
        { name: 'Android', color: 'bg-green-100 text-green-800' },
        { name: 'Web Services', color: 'bg-purple-100 text-purple-800' }
      ]
    },
    {
      name: 'C++',
      description: 'A general-purpose programming language created as an extension of the C programming language.',
      link: 'https://isocpp.org/std/the-standard',
      category: 'Systems',
      popularity: 6,
      usedFor: [
        { name: 'Game Development', color: 'bg-red-100 text-red-800' },
        { name: 'Systems Programming', color: 'bg-orange-100 text-orange-800' },
        { name: 'Embedded Systems', color: 'bg-blue-100 text-blue-800' }
      ]
    },
    {
      name: 'Go',
      description: 'A statically typed, compiled programming language designed at Google.',
      link: 'https://golang.org/doc/',
      category: 'Systems',
      popularity: 7,
      usedFor: [
        { name: 'Cloud Services', color: 'bg-blue-100 text-blue-800' },
        { name: 'System Tools', color: 'bg-green-100 text-green-800' },
        { name: 'Web Services', color: 'bg-purple-100 text-purple-800' }
      ]
    },
    {
      name: 'Swift',
      description: 'A powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.',
      link: 'https://swift.org/documentation/',
      category: 'Mobile',
      popularity: 8,
      usedFor: [
        { name: 'iOS Development', color: 'bg-blue-100 text-blue-800' },
        { name: 'macOS Apps', color: 'bg-purple-100 text-purple-800' },
        { name: 'Server Side', color: 'bg-green-100 text-green-800' }
      ]
    },
    {
      name: 'Kotlin',
      description: 'A modern programming language that makes developers happier. Fully interoperable with Java.',
      link: 'https://kotlinlang.org/docs/',
      category: 'Mobile',
      popularity: 9,
      usedFor: [
        { name: 'Android', color: 'bg-green-100 text-green-800' },
        { name: 'Server Side', color: 'bg-blue-100 text-blue-800' },
        { name: 'Cross Platform', color: 'bg-purple-100 text-purple-800' }
      ]
    },
    // ... Additional 25 languages following similar pattern
  ];
  
  const tools = [
    // Original entries kept
    {
      name: 'Visual Studio Code',
      description: 'A free, open-source code editor developed by Microsoft, supporting various programming languages with features like debugging, syntax highlighting, and version control.',
      link: 'https://code.visualstudio.com/docs',
      category: 'Editor',
      popularity: 1,
      features: ['IntelliSense', 'Debugging', 'Git Integration', 'Extensions']
    },
    {
      name: 'Docker',
      description: 'A platform that uses OS-level virtualization to deliver software in packages called containers, ensuring consistency across multiple development and release cycles.',
      link: 'https://docs.docker.com/',
      category: 'DevOps',
      popularity: 2,
      features: ['Containerization', 'Microservices', 'CI/CD Integration']
    },
    {
      name: 'Git',
      description: 'A distributed version control system designed to handle projects of all sizes, enabling multiple developers to work on a project simultaneously.',
      link: 'https://git-scm.com/doc',
      category: 'Version Control',
      popularity: 3,
      features: ['Version Control', 'Branching', 'Collaboration']
    },
    {
      name: 'Jenkins',
      description: 'An open-source automation server that enables developers to build, test, and deploy their software reliably and efficiently.',
      link: 'https://www.jenkins.io/doc/',
      category: 'CI/CD',
      popularity: 4,
      features: ['Automation', 'Pipeline Support', 'Plugin Ecosystem']
    },
    // Additional tools
    {
      name: 'IntelliJ IDEA',
      description: 'A powerful IDE for Java development with advanced code assistance and analysis.',
      link: 'https://www.jetbrains.com/idea/documentation/',
      category: 'IDE',
      popularity: 5,
      features: ['Smart Code Completion', 'Framework Support', 'Built-in Tools', 'Version Control']
    },
    {
      name: 'Kubernetes',
      description: 'An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.',
      link: 'https://kubernetes.io/docs/',
      category: 'DevOps',
      popularity: 6,
      features: ['Container Orchestration', 'Auto-scaling', 'Service Discovery', 'Load Balancing']
    },
    {
      name: 'PostgreSQL',
      description: 'A powerful, open-source object-relational database system with a strong reputation for reliability and feature robustness.',
      link: 'https://www.postgresql.org/docs/',
      category: 'Database',
      popularity: 7,
      features: ['ACID Compliance', 'JSON Support', 'Extensibility', 'Replication']
    },
    {
      name: 'Postman',
      description: 'A popular API development tool that makes it easy to create, share, test and document APIs.',
      link: 'https://learning.postman.com/docs/',
      category: 'API Tools',
      popularity: 8,
      features: ['API Testing', 'Automation', 'Documentation', 'Collaboration']
    },
    {
      name: 'Redis',
      description: 'An open-source, in-memory data structure store, used as a database, cache, message broker, and queue.',
      link: 'https://redis.io/documentation',
      category: 'Database',
      popularity: 9,
      features: ['In-Memory Storage', 'Data Structures', 'Pub/Sub', 'Persistence']
    },
    // ... Additional 25 tools following similar pattern
  ];

  const filterAndSortItems = <T extends Language | Tool>(items: T[]) => {
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'popularity') return a.popularity - b.popularity;
      return 0;
    });
  };

  const CategoryBadge = ({ children }: { children: React.ReactNode }) => (
    <Badge variant="secondary" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
      {children}
    </Badge>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6 space-x-4">
            <Terminal className="h-14 w-14 text-blue-600" />
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              CodeLab Docs
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your comprehensive guide to modern programming languages and development tools
          </p>
          
          {/* Search and Sort Controls */}
          <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto mt-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="pl-10 h-12 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] h-12">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="popularity">Sort by Popularity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="languages" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="languages" className="flex items-center gap-2 p-4">
              <Code2 className="h-5 w-5" />
              Languages
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2 p-4">
              <Wrench className="h-5 w-5" />
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="languages">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterAndSortItems(languages).map((lang) => (
                <Card key={lang.name} className="group hover:shadow-2xl transition-all duration-300 border-t-4 border-t-blue-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2 text-xl font-bold">
                        <Code2 className="h-6 w-6 text-blue-500" />
                        {lang.name}
                      </CardTitle>
                      <CategoryBadge>{lang.category}</CategoryBadge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-6 text-gray-600 text-base">
                      {lang.description}
                    </CardDescription>
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {lang.usedFor.map((use) => (
                          <Badge key={use.name} className={`${use.color} font-medium`}>
                            {use.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <a
                      href={lang.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium group"
                    >
                      <BookOpen className="h-4 w-4" />
                      Documentation
                      <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterAndSortItems(tools).map((tool) => (
                <Card key={tool.name} className="group hover:shadow-2xl transition-all duration-300 border-t-4 border-t-purple-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2 text-xl font-bold">
                        <Settings className="h-6 w-6 text-purple-500" />
                        {tool.name}
                      </CardTitle>
                      <CategoryBadge>{tool.category}</CategoryBadge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-6 text-gray-600 text-base">
                      {tool.description}
                    </CardDescription>
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="font-medium">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-medium group"
                    >
                      <BookOpen className="h-4 w-4" />
                      Documentation
                      <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CodeLabDocs;