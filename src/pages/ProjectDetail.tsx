
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Sample project data (same as in Portfolio.tsx)
const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
    client: "Fashion Boutique",
    date: "March 2023",
    services: ["UX Research", "UI Design", "Frontend Development", "Backend Integration"],
    challenge: "The client needed a modern, user-friendly e-commerce platform that would showcase their products and provide a seamless shopping experience for their customers. The platform needed to be responsive, fast, and secure.",
    solution: "I created a custom e-commerce platform that focuses on product presentation and user experience. The platform includes advanced filtering options, a streamlined checkout process, and integration with secure payment processors. The responsive design ensures a consistent experience across all devices.",
    tools: ["Figma", "React", "Node.js", "MongoDB", "Stripe API"],
    testimonial: {
      text: "Working with John was an absolute pleasure. He understood our needs perfectly and delivered a website that exceeded our expectations. Our sales have increased by 30% since the launch!",
      author: "Sarah Johnson, Owner of Fashion Boutique"
    }
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    description: "A modern mobile banking application with intuitive user interface and secure transaction features.",
    client: "NextGen Bank",
    date: "November 2022",
    services: ["UX Research", "UI Design", "Prototyping", "Usability Testing"],
    challenge: "NextGen Bank needed a complete redesign of their mobile banking application to improve user experience, increase feature adoption, and align with their new brand identity.",
    solution: "I conducted extensive user research and created a new design system that focuses on clarity and ease of use. The new interface makes common banking tasks more accessible while maintaining robust security features. Interactive prototypes were used for multiple rounds of usability testing before finalizing the design.",
    tools: ["Figma", "Adobe XD", "InVision", "UserTesting.com"],
    testimonial: {
      text: "The redesigned app has received overwhelmingly positive feedback from our customers. User engagement has increased by 45%, and we've seen a significant reduction in support calls related to app navigation.",
      author: "Michael Chen, Digital Product Manager at NextGen Bank"
    }
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    description: "A personal portfolio website designed to showcase creative work with a clean and minimal aesthetic.",
    client: "Emma Parker, Photographer",
    date: "January 2023",
    services: ["Web Design", "Frontend Development", "SEO Optimization", "Content Strategy"],
    challenge: "Emma needed a portfolio website that would showcase her photography work in a clean, minimal design that wouldn't distract from her images. The website needed to be easy to update with new work and optimized for search engines.",
    solution: "I designed a minimalist portfolio with a focus on image presentation. The layout adapts to different image orientations and sizes, and includes a content management system that makes it easy for Emma to update her portfolio. The site is optimized for fast loading even with high-resolution images.",
    tools: ["Figma", "React", "Next.js", "Sanity CMS", "Framer Motion"],
    testimonial: {
      text: "My new portfolio perfectly captures my aesthetic while making my work shine. The site is incredibly easy to update, and I've received numerous compliments from clients about how professional and beautiful it is.",
      author: "Emma Parker, Photographer"
    }
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    description: "A fitness application that tracks workouts, nutrition, and progress with data visualization.",
    client: "FitLife Gym Chain",
    date: "August 2022",
    services: ["Mobile App Design", "UX Research", "Frontend Development", "Backend Development"],
    challenge: "FitLife wanted to develop a fitness tracking app for their members that would help them track workouts, monitor progress, and stay motivated. The app needed to integrate with existing health platforms and wearable devices.",
    solution: "I designed and developed a comprehensive fitness tracking app that allows users to create custom workout plans, log their activities, track nutrition, and visualize their progress over time. The app integrates with popular fitness wearables and provides personalized recommendations based on user goals.",
    tools: ["React Native", "Firebase", "HealthKit", "Google Fit API", "Chart.js"],
    testimonial: {
      text: "The fitness app has become an essential part of our member experience. Our members love the intuitive interface and the ability to track their progress. Member retention has improved by 25% since introducing the app.",
      author: "Robert Thompson, CEO of FitLife Gyms"
    }
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "An online reservation system for restaurants with table management and customer notifications.",
    client: "Sapore Restaurant Group",
    date: "May 2022",
    services: ["Web Development", "UI/UX Design", "System Integration", "Staff Training"],
    challenge: "The restaurant group needed to replace their outdated phone-based reservation system with a modern online booking platform that would integrate with their existing POS system and reduce no-shows.",
    solution: "I developed a custom reservation system that allows customers to book tables online, receive automated confirmations and reminders, and easily modify their bookings. The staff interface provides a visual table management system and customer database. The system has reduced no-shows by 40% through automated reminders.",
    tools: ["React", "Node.js", "PostgreSQL", "Twilio API", "Square POS Integration"],
    testimonial: {
      text: "The new booking system has revolutionized our operations. Our staff loves how easy it is to manage reservations, and our customers appreciate the convenience. The reduction in no-shows has had a significant impact on our bottom line.",
      author: "Isabella Romano, Operations Manager at Sapore Restaurant Group"
    }
  },
  {
    id: 6,
    title: "Travel Blog",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "A vibrant travel blog with content management system, image galleries, and interactive maps.",
    client: "Wanderlust Explorers",
    date: "February 2022",
    services: ["Web Design", "Content Strategy", "CMS Implementation", "SEO Optimization"],
    challenge: "Wanderlust Explorers needed a visually engaging blog platform that would showcase their travel stories, photography, and recommendations while being easy to update from anywhere in the world.",
    solution: "I designed and developed a custom travel blog with a robust content management system, interactive maps showing travel routes, image galleries, and category filtering. The site is optimized for SEO and includes social sharing features to increase reach. The responsive design ensures a great experience on all devices.",
    tools: ["WordPress", "Custom Theme Development", "Advanced Custom Fields", "MapBox Integration", "Yoast SEO"],
    testimonial: {
      text: "Our new travel blog perfectly captures the essence of our adventures. The interactive maps are a huge hit with our readers, and we love how easy it is to update the site even when we're traveling with limited internet access.",
      author: "Alex and Maya, Founders of Wanderlust Explorers"
    }
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || '0');
  
  // Find the project by ID
  const project = projectsData.find(p => p.id === projectId);
  
  // If project not found, redirect to portfolio page
  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }
  
  // Find next and previous projects for navigation
  const currentIndex = projectsData.findIndex(p => p.id === projectId);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream-50 py-20">
        <div className="container mx-auto px-4">
          <Link to="/portfolio" className="flex items-center text-cream-700 hover:text-primary mb-8">
            <ArrowLeft size={20} className="mr-2" /> Back to Portfolio
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-cream-600">{project.category}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block bg-cream-200 text-cream-700 px-4 py-2 rounded-full">
                {project.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-cream-700 mb-8">
                {project.description}
              </p>
              
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-lg text-cream-700 mb-8">
                {project.challenge}
              </p>
              
              <h3 className="text-2xl font-bold mb-4">The Solution</h3>
              <p className="text-lg text-cream-700 mb-8">
                {project.solution}
              </p>
              
              {project.testimonial && (
                <div className="bg-cream-100 p-8 rounded-lg mb-8">
                  <p className="text-lg italic mb-4">"{project.testimonial.text}"</p>
                  <p className="font-bold">— {project.testimonial.author}</p>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Client</h3>
                  <p className="text-cream-700">{project.client}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Services</h3>
                  <ul className="space-y-2">
                    {project.services.map((service, index) => (
                      <li key={index} className="text-cream-700">• {service}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="bg-cream-100 text-cream-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Navigation */}
      <section className="py-12 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            {prevProject ? (
              <Link 
                to={`/portfolio/${prevProject.id}`}
                className="p-6 bg-white rounded-lg shadow-md flex flex-col md:w-5/12 mb-4 md:mb-0 hover:shadow-lg transition-shadow"
              >
                <span className="text-cream-500 mb-2">Previous Project</span>
                <h3 className="text-xl font-bold">{prevProject.title}</h3>
              </Link>
            ) : (
              <div className="md:w-5/12"></div>
            )}
            
            {nextProject ? (
              <Link 
                to={`/portfolio/${nextProject.id}`}
                className="p-6 bg-white rounded-lg shadow-md flex flex-col items-end text-right md:w-5/12 hover:shadow-lg transition-shadow"
              >
                <span className="text-cream-500 mb-2">Next Project</span>
                <h3 className="text-xl font-bold">{nextProject.title}</h3>
              </Link>
            ) : (
              <div className="md:w-5/12"></div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
