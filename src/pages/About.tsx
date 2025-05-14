
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">About Me</h1>
          <p className="text-xl text-cream-600 max-w-3xl mx-auto text-center">
            Get to know more about me, my background, and what drives me forward.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-lg"></div>
                <img 
                  src="/img/kanz.jpg" 
                  alt="John Doe" 
                  className="w-full h-auto rounded-lg relative z-10"
                />
              </div>
            </div>
            <div className="lg:w-3/5">
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <p className="text-lg mb-4 text-cream-700">
                Hello! I'm John Doe, a passionate UI/UX Designer and Frontend Developer based in New York City. With over 5 years of experience in the industry, I've had the opportunity to work with a diverse range of clients and projects.
              </p>
              <p className="text-lg mb-4 text-cream-700">
                My journey in the digital world began when I was studying Computer Science at the University of Technology. What started as a curiosity quickly turned into a passion as I discovered the perfect blend of creativity and technical problem-solving that web development offers.
              </p>
              <p className="text-lg mb-6 text-cream-700">
                Today, I focus on creating user-centered designs that not only look beautiful but also function flawlessly. I believe that great design is about understanding the needs of users and delivering solutions that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/files/resume.pdf" 
                  className="btn-primary"
                  download
                >
                  Download Resume
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="btn-outline"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Experience & Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="inline-block w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                  W
                </span>
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Senior UI/UX Designer",
                    company: "Creative Solutions Inc.",
                    period: "2020 - Present",
                    description: "Leading the design team in creating user-centered digital experiences across web and mobile platforms. Collaborating with developers to ensure design integrity during implementation."
                  },
                  {
                    title: "Frontend Developer",
                    company: "WebTech Labs",
                    period: "2018 - 2020",
                    description: "Developed responsive websites and web applications using modern JavaScript frameworks. Worked closely with designers to implement pixel-perfect UI components."
                  },
                  {
                    title: "UI Designer",
                    company: "Digital Crafts",
                    period: "2016 - 2018",
                    description: "Created user interfaces for websites and mobile applications. Conducted user research and testing to improve product usability."
                  }
                ].map((job, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-cream-300">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                    <h4 className="text-xl font-bold">{job.title}</h4>
                    <p className="text-cream-600 mb-2">{job.company} | {job.period}</p>
                    <p className="text-cream-700">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="inline-block w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                  E
                </span>
                Education
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    degree: "Master of Computer Science",
                    school: "University of Technology",
                    period: "2014 - 2016",
                    description: "Specialized in Human-Computer Interaction and User Experience Design. Graduated with honors."
                  },
                  {
                    degree: "Bachelor of Computer Science",
                    school: "State University",
                    period: "2010 - 2014",
                    description: "Focused on Web Development and Design Principles. Participated in multiple hackathons and coding competitions."
                  },
                  {
                    degree: "Certified UX Professional",
                    school: "Design Institute",
                    period: "2013",
                    description: "Intensive 6-month program covering all aspects of user experience design, research methods, and usability testing."
                  }
                ].map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-cream-300">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p className="text-cream-600 mb-2">{edu.school} | {edu.period}</p>
                    <p className="text-cream-700">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            I'm currently available for freelance work and exciting opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/portfolio" className="btn-primary bg-white text-primary hover:bg-cream-100">
              View My Portfolio
            </Link>
            <a href="mailto:contact@example.com" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
