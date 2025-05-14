
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hello, I'm <span className="text-primary">Kanz Abiyu Alkautsar</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cream-600">
              Web Developer
            </p>
            <p className="text-lg mb-8 max-w-md text-cream-500">
              I am a student of SMKN 1 Cibinong with an interest in web development. I am currently learning about web development, especially in the field of front-end and back-end development.
            </p>
            {/* <div className="flex space-x-4">
              <Link to="/portfolio" className="btn-primary">
                View My Work
              </Link>
              <Link to="/about" className="btn-outline">
                About Me
              </Link>
            </div> */}
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white shadow-xl overflow-hidden">
                <img
                  src="/img/kanz.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">My Skills</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Here are some technologies and tools that I specialize in
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { name: "HTML", level: 95 },
              { name: "CSS", level: 90 },
              { name: "JavaScript", level: 65 },
              { name: "PHP Laravel", level: 90 },
              { name: "MySQL", level: 90 },
              { name: "Bootstrap", level: 80 },
            ].map((skill, index) => (
              <div key={index} className="card" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-bold mb-2">{skill.name}</h3>
                <div className="w-full bg-cream-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-cream-500 mt-1">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Featured Projects</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Check out some of my recent work
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                id: 1,
                title: "Catering Product Page",
                category: "Web Development",
                image: "/img/Catering_Product.png"
              },
              {
                id: 2,
                title: "Catering Admin Management Page",
                category: "Web Development",
                image: "/img/Catering_Admin.png"
              },
              {
                id: 3,
                title: "Kredit Motor Landing Page",
                category: "Web Development",
                image: "/img/Kredit_Motor_Landing_Page.png"
              },
              {
                id: 4,
                title: "Kredit Motor Pengajuan Page",
                category: "Web Development",
                image: "/img/Kredit_Motor_Pengajuan.png"
              },
              {
                id: 5,
                title: "Kredit Motor Admin Management Page",
                category: "Web Development",
                image: "/img/Kredit_Motor_Admin.png"
              }
            ].map((project) => (
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
                <p className="text-cream-500 mb-4">{project.category}</p>
                <p className="inline-flex items-center text-primary font-medium">
                  View Project <ArrowRight size={16} className="ml-2" />
                </p>
              </Link>
            ))}
          </div>
          
          {/* <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              View All Projects
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
