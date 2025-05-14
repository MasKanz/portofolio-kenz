
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout."
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    description: "A modern mobile banking application with intuitive user interface and secure transaction features."
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    description: "A personal portfolio website designed to showcase creative work with a clean and minimal aesthetic."
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    description: "A fitness application that tracks workouts, nutrition, and progress with data visualization."
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "An online reservation system for restaurants with table management and customer notifications."
  },
  {
    id: 6,
    title: "Travel Blog",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "A vibrant travel blog with content management system, image galleries, and interactive maps."
  }
];

// Get all unique categories
const categories = ["All", ...new Set(projectsData.map(project => project.category))];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter projects based on the active category
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">My Portfolio</h1>
          <p className="text-xl text-cream-600 max-w-3xl mx-auto text-center">
            Explore my recent projects and see how I can help bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category 
                    ? "bg-primary text-white"
                    : "bg-cream-100 text-cream-700 hover:bg-cream-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link 
                to={`/portfolio/${project.id}`} 
                key={project.id}
                className="card group overflow-hidden"
              >
                <div className="relative h-64 mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-cream-500 mb-3">{project.category}</p>
                <p className="text-cream-700 mb-4 line-clamp-2">{project.description}</p>
                <p className="inline-flex items-center text-primary font-medium">
                  View Project <ArrowRight size={16} className="ml-2" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl text-cream-700 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and creative ideas. Let's create something amazing together.
          </p>
          <a 
            href="mailto:contact@example.com" 
            className="btn-primary inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
