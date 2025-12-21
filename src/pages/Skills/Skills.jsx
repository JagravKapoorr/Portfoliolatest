import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layout, Cpu, Cloud, Paintbrush, Server, Brain, Code } from "lucide-react";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      color: "text-blue-400",
      skills: [
        {
          name: "Python",
          icon: <Code2 className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "JavaScript",
          icon: <Code className="w-4 h-4 text-yellow-400" />,
        },
        {
          name: "SQL",
          icon: <Database className="w-4 h-4 text-cyan-400" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "Frontend",
      color: "text-purple-400",
      skills: [
        { name: "React.js", icon: <Layout className="w-4 h-4 text-cyan-400" /> },
        {
          name: "HTML",
          icon: <Code className="w-4 h-4 text-orange-400" />,
        },
        {
          name: "CSS",
          icon: <Paintbrush className="w-4 h-4 text-blue-400" />,
        },
      ],
    },
    {
      icon: Server,
      title: "Backend Frameworks",
      color: "text-green-400",
      skills: [
        {
          name: "Django",
          icon: <Server className="w-4 h-4 text-green-500" />,
        },
        {
          name: "Django REST Framework",
          icon: <Server className="w-4 h-4 text-green-400" />,
        },
        {
          name: "FastAPI",
          icon: <Server className="w-4 h-4 text-teal-400" />,
        },
      ],
    },
    {
      icon: Brain,
      title: "Data & ML Libraries",
      color: "text-pink-400",
      skills: [
        {
          name: "Pandas",
          icon: <Database className="w-4 h-4 text-purple-400" />,
        },
        {
          name: "NumPy",
          icon: <Cpu className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "Matplotlib",
          icon: <Brain className="w-4 h-4 text-blue-500" />,
        },
        {
          name: "Seaborn",
          icon: <Brain className="w-4 h-4 text-cyan-400" />,
        },
        {
          name: "Scikit-learn",
          icon: <Brain className="w-4 h-4 text-orange-400" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-orange-400",
      skills: [
        {
          name: "MySQL",
          icon: <Database className="w-4 h-4 text-blue-500" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      color: "text-yellow-400",
      skills: [
        { name: "AWS", icon: <Cloud className="w-4 h-4 text-orange-400" /> },
        { name: "Vercel", icon: <Cloud className="w-4 h-4 text-gray-300" /> },
      ],
    },
    {
      icon: Brain,
      title: "Currently Learning",
      color: "text-cyan-400",
      skills: [
        {
          name: "LangChain",
          icon: <Brain className="w-4 h-4 text-green-400" />,
        },
        {
          name: "RAG",
          icon: <Database className="w-4 h-4 text-purple-400" />,
        },
        {
          name: "Hugging Face",
          icon: <Brain className="w-4 h-4 text-yellow-400" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-20 lg:pt-24 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;