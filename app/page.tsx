"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const caseStudies = [
  {
    id: "loomis-pet-waste",
    title: "Loomis Pet Waste",
    description: "Full-stack platform for pet waste removal services in Central Valley",
    category: "Full-Stack Development",
    year: "2025",
    tags: ["Next.js 15", "TypeScript", "Material-UI", "Figma", "TailW\wind CSS"],
    image: "/loomis-preview.png",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "dashboard-analytics",
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard for business intelligence",
    category: "Frontend Development",
    year: "2025",
    tags: ["React", "D3.js", "Chart.js", "Tailwind CSS"],
    image: "/dashboard-preview.png",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "ecommerce-redesign",
    title: "E-commerce Redesign",
    description: "Modern redesign of online retail platform with improved UX",
    category: "UI/UX Design",
    year: "2024",
    tags: ["Figma", "React", "SCSS", "Mobile-First"],
    image: "/ecommerce-preview.png",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "fitness-mobile-app",
    title: "FitTracker Mobile App",
    description: "Cross-platform fitness tracking app with social features",
    category: "Mobile Development",
    year: "2024",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    image: "/fitness-preview.png",
    color: "from-orange-500 to-red-600"
  },
  {
    id: "real-estate-platform",
    title: "PropertyHub Platform",
    description: "Modern real estate platform with virtual tours and CRM",
    category: "Full-Stack Development",
    year: "2024",
    tags: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    image: "/realestate-preview.png",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "design-system",
    title: "Component Design System",
    description: "Comprehensive design system and component library",
    category: "Design Engineering",
    year: "2024",
    tags: ["Storybook", "TypeScript", "Styled Components", "Jest"],
    image: "/designsystem-preview.png",
    color: "from-teal-500 to-blue-600"
  }
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-black dark:to-gray-900 relative overflow-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .gradient-text {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse animate-float"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-2000 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Mouse Follow Gradient */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <main className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        {/* Hero Section */}
        <header className="text-center mb-24 sm:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-200/50 dark:border-blue-800/50 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for projects</span>
          </div>

          <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up delay-100">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Jerry Duran
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up delay-200">
            Full-Stack & Design Engineer crafting{" "}
            <span className="gradient-text font-semibold">
              digital experiences
            </span>{" "}
            with modern web technologies
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>React & Next.js</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>UI/UX Design</span>
            </div>
          </div>
        </header>

        {/* Case Studies Section */}
        <section className="mb-24 animate-fade-in-up delay-400">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my recent projects showcasing modern web development and design solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`animate-fade-in-scale delay-${(index + 1) * 100}`}
              >
                <Link
                  href={`/case-studies/${study.id}`}
                  className="group block"
                >
                  <div className="relative rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 overflow-hidden card-hover">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${study.color}`}></div>
                        {study.year}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={study.image}
                        alt={`${study.title} project preview`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {study.tags.length > 3 && (
                          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50">
                            +{study.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-8 h-8 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center animate-fade-in-up delay-500">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('gduranjerry@gmail.com');
                  // Optional: Add toast notification or temporary feedback
                  const button = document.activeElement as HTMLButtonElement;
                  const originalText = button.textContent;
                  button.innerHTML = '<span class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Email Copied!</span>';
                  setTimeout(() => {
                    button.innerHTML = originalText || '';
                  }, 2000);
                }}
                className="group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                <span className="relative text-white flex items-center justify-center gap-2">
                  Get in Touch
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <a
                href="https://github.com/jerryduran"
                className="group px-8 py-4 rounded-full font-semibold border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-600">
                <div className="flex items-center gap-2 hover:text-green-600 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Open to remote opportunities</span>
                </div>
                <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Based in California</span>
                </div>
                <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>5+ years experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}