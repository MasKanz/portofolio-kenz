
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Sample project data (same as in Portfolio.tsx)
const projectsData = [
  {
    id: 1,
    title: "Catering Website Product Page",
    category: "Web Development",
    image: "/img/Catering_Product.png",
    description: "A product page for a catering website showcasing various catering packages with an easy-to-use booking system.",
    services: [],
    challenge: "Deciding how to display the products",
    solution: "I created a product page that displays the catering packages in a grid format with clear images and descriptions. The booking system is integrated with a calendar for easy selection of dates.",
    tools: [],
    testimonial: {
    }
  },
  {
    id: 2,
    title: "Catering Admin Management Page",
    category: "Web Development",
    image: "/img/Catering_Admin.png",
    description: " An admin management page for a catering website that allows staff to manage bookings, view customer details, and update product information.",
    client: "",
    date: "",
    services: [],
    challenge: "The admin management page needed to be user-friendly and allow staff to easily manage bookings and customer information.",
    solution: "I designed a dashboard that provides an overview of bookings, customer details, and product information. The interface is intuitive, allowing staff to quickly navigate through different sections.",
    tools: [],
    testimonial: {
      text: "",
      author: ""
    }
  },
  {
    id: 3,
    title: "Kredit Motor Landing Page",
    category: "Web Development",
    image: "/img/Kredit_Motor_Landing_Page.png",
    description: "A landing page for a motorcycle financing service that highlights the benefits of financing options and includes a contact form.",
    client: "",
    date: "",
    services: [],
    challenge: "The landing page needed to effectively communicate the benefits of motorcycle financing and encourage users to fill out the contact form.",
    solution: "I created a visually appealing landing page with clear calls to action. The design includes sections that highlight the benefits of financing, customer testimonials, and a simple contact form for inquiries.",
    tools: [],
    testimonial: {
      text: "",
      author: ""
    }
  },
  {
    id: 4,
    title: "Kredit Motor Pengajuan Page",
    category: "Web Development",
    image: "/img/Kredit_Motor_Pengajuan.png",
    description: "A submission page for motorcycle financing applications that allows users to fill out their details and submit their application.",
    client: "",
    date: "",
    services: [],
    challenge: "The submission page needed to be user-friendly and secure, ensuring that users could easily fill out their details without confusion.",
    solution: "I designed a step-by-step form that guides users through the application process. Each step includes clear instructions and validation to ensure that all required information is collected accurately.",
    tools: [],
    testimonial: {
      text: "",
      author: ""
    }
  },
  {
    id: 5,
    title: "Kredit Motor Admin Management Page",
    category: "Web Development",
    image: "/img/Kredit_Motor_Admin.png",
    description: "An admin management page for motorcycle financing that allows staff to manage applications, view customer details, and update financing options.",
    client: "",
    date: "",
    services: [],
    challenge: "The admin management page needed to be user-friendly and allow staff to easily manage applications, customer details, and update financing options.",
    solution: "I designed a dashboard that provides an overview of applications, customer details, and financing options. The interface is intuitive, allowing staff to quickly navigate through different sections.",
    tools: [],
    testimonial: {
      text: "",
      author: ""
    }
  },
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
