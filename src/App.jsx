import { useState, useEffect } from "react"
import MyImage from "./assets/Mypic.jpg";
import prj1 from "./assets/ss3.png";
import prj2 from "./assets/ss2.png";
import prj3 from "./assets/ss1.png";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  ExternalLink,
  Download,
  Code,
  Database,
  Palette,
  Languages,
  Server,
  Star,
  Eye,
  MonitorSmartphone,
  CheckCircle,
  ArrowRight,
  Send,
  Heart,
  Coffee,
  Zap,
} from "lucide-react"

export default function PortfolioOne() {
  const [isLoaded, setIsLoaded] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [activeProject, setActiveProject] = useState(0)
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend")

  // User Data Variables - Easily customizable
  const userData = {
    name: "Avinash Kumar",
    title: "Front-End Developer",
    tagline: "The future of frontend is not just responsive—it’s intelligent.",
    location: "Bihar,India",
    email: "avinashk14730@gmail.com",
    phone: "+91 9693762626",
    resumeUrl: "/resume.pdf",
    avatar: MyImage || "/placeholder.svg",
    
    // Availability
    availableForHire: true,
    availabilityText: "Available For Work/Freelance..🙋‍♂️",

    // Bio
    bio: "Frontend Developer specializing in modern JavaScript (ES6+), TypeScript, and responsive UI design using ReactJS,React-Native. I enjoy creating clean, responsive, and user-friendly websites & mobile apps. I’m always curious to learn new technologies and improve my skills, and I love solving problems by turning ideas into functional, visually appealing designs. In my free time, I explore modern tech trends and work on personal projects to sharpen my craft.",
    // Social Links
    social: {
      github: "https://github.com/avinashkr147",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
    },

    // Experience Stats
    techstack: {
      js: "JAVASCRIPT",
      reactjs: "REACT.JS",
      ts: "TYPESCRIPT",
      reactnative: "ReactNative",
    },
  }

  const projects = [
    {
      id: 1,
      title: "Musix Academy",
      description:
        "A modern UI , built in next.JS with the help of modern component library AccernityUI, Typescript , TailwindCSS and mobile-responsive design.",
      image: prj1,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "UI Component Libraries"],
      liveUrl: "https://musix-academy.vercel.app/",
      githubUrl: "https://github.com/avinashkr147/MusixNext1.git",
      featured: true,
      category: "Web Development",
    },
    {
      id: 2,
      title: "Mini Gemini",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image:prj3,
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://ai-chat-app-ashen.vercel.app/",
      githubUrl: "https://github.com/avinashkr147/AI-Chat-App.git",
      featured: true,
      category: "Frontend Web development",
    },
    
    {
      id: 3,
      title: "GenUI",
      description:
        "An intelligent chatbot powered by OpenAI's GPT, featuring natural language processing and context-aware conversations.",
      image:prj2,
      technologies: [ "TailwindCSS", "React.js"],
      liveUrl: "https://gen-ui-omega.vercel.app/",
      githubUrl: "https://github.com/avinashkr147/GenUI.git",
      featured: true,
      category: "Frontend",
    },
  ]

  const skills = {
    frontend: [
      { name: "React.js", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "ReactNative", level: 90, icon: "▲" },
      { name: "TypeScript", level: 88, icon: "📘" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "CSS3", level: 95, icon: "🪄" },
      { name: "Redux-Toolkit", level: 95, icon: "⚙️" },
      { name: "React Query", level: 95, icon: "🔗" },
    ],
     backend: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "SQL", level: 88, icon: "   " },
      
    ],
    tools: [
      { name: "Git/Github", level: 95, icon: "📝" },
      { name: "React Hook Form", level: 85, icon: "📩" },
      { name: "NextAuth", level: 90, icon: "▲" },
      { name: "VS Code", level: 98, icon: "💙" },
    ],
  }



  useEffect(() => {
    setIsLoaded(true)

    // Auto-rotate projects
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [projects.length])

  const skillCategories = [
    { id: "frontend", name: "Frontend", icon: Palette },
    { id: "backend", name: "Backend", icon: Database },
    { id: "tools", name: "Tools", icon: Code },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/6 to-cyan-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-orange-400/20 text-4xl font-mono animate-bounce delay-300">
          {"<>"}
         
        </div>
        <div className="absolute top-40 right-20 text-blue-400/20 text-3xl font-mono animate-bounce delay-700">
          {"{}"}
        </div>
        <div className="absolute bottom-40 left-20 text-green-400/20 text-5xl font-mono animate-bounce delay-1000">
          {"[]"}
        </div>
        <div className="absolute bottom-20 right-40 text-purple-400/20 text-2xl font-mono animate-bounce delay-1500">
          {"()"}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div
            className={
              "text-center transition-all duration-1000 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            {/* Avatar */}
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-500 to-red-500 p-1 bg-gradient-to-r from-orange-500 to-red-500">
                <img
                  src={userData.avatar || "/placeholder.svg"}
                  alt={userData.name}
                  className="w-full h-full object-cover rounded-full bg-neutral-800"
                />
              </div>

              {/* Availability Badge */}
              {userData.availableForHire && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-nowrap">{userData.availabilityText}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Name & Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              {userData.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
              {userData.title}
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">{userData.tagline}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-black text-yellow-300 mb-1">{userData.techstack.js}</div>

              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-blue-300 mb-1">{userData.techstack.reactjs}</div>

              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-green-400 mb-1">{userData.techstack.ts}</div>

              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-purple-400 mb-1">{userData.techstack.reactnative}</div>

              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a target="_blank"
                href={`mailto:${userData.email}`}
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-[45px] py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Get In Touch</span>
              </a>

              <a
                href={userData.resumeUrl}
                download
                className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-5 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{userData.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{userData.phone}</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-300 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Me</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-lg text-neutral-300 leading-relaxed">{userData.bio}</p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                    <MonitorSmartphone className="w-5 h-5 text-orange-400" />
                    <span className="text-neutral-300">UI/UX Enthusiast</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span className="text-neutral-300">Learning & Building</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="text-neutral-300">Exploring New Tech</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 pt-6">
                  <a
                    href={userData.social.github}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={userData.social.linkedin}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={userData.social.twitter}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-sky-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href={userData.social.website}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-green-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-neutral-400 ml-4 font-mono text-sm">developer.js</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-purple-400">
                      const <span className="text-blue-400">developer</span> = {"{"}
                    </div>
                    <div className="text-neutral-400 ml-4">
                      name: <span className="text-green-400">{userData.name}</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      title: <span className="text-green-400">'{userData.title}'</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      location: <span className="text-green-400">'{userData.location}'</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      available: <span className="text-orange-400">{userData.availableForHire.toString()}</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      skills: [<span className="text-green-400">'React.js'</span>,{" "}
                      <span className="text-green-400">'Next.js'</span>,{" "}
                      <span className="text-green-400">'JavaScript','TypeScript'</span>],
                    </div>
                    <div className="text-neutral-400 ml-4">
                      passion: <span className="text-green-400">' Learn.  Code.  Repeat.'</span>
                    </div>
                    <div className="text-purple-400">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-500 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            {/* Skill Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveSkillCategory(category.id)}
                  className={
                    "flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 " +
                    (activeSkillCategory === category.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400")
                  }
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills[activeSkillCategory].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-white font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-orange-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-700 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                A showcase of my recent work and creative solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-neutral-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a target="_blank"
                        href={project.liveUrl}
                        className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-3 py-1  md:px-4 md:py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        target="_blank"
                        href={project.githubUrl}
                        className="flex items-center space-x-2 border border-neutral-600 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-3 py-1 md:px-4 md:py-2 rounded-lg font-semibold transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                target="_blank"
                href={userData.social.github}
                className="group inline-flex items-center space-x-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-1100 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Work Together
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
                Ready to bring your ideas to life? Let's discuss your next project and create something amazing
                together.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">Ready to Start a Project?</h3>
                <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                  I'm currently {userData.availableForHire ? "available" : "not available"} for new projects. Let's
                  discuss how we can work together to achieve your goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <a target="_blank"
                    href={`mailto:${userData.email}`}
                    className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </a>


                </div>

                <div className="flex justify-center items-center space-x-4.5 text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Quick Response</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Flexible Rates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className=" p-2  m-2 justify-center flex text-neutral-400 text-xl">Made With 🪄 By     : )</footer>
      </div>
    </div>
  )
}


