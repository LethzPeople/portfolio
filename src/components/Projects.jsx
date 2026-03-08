const Projects = () => {
  const projects = [
    {
      title: 'RICK & MORTY EXPLORER',
      description: 'Fullstack web application to explore Rick and Morty characters, create user profiles, and manage custom characters with authentication system and favorites.',
      tags: ['REACT', 'VITE', 'TAILWIND', 'NODE.JS', 'EXPRESS', 'MONGODB', 'JWT'],
      number: '01',
      github: 'https://github.com/LethzPeople/RickandMorty',
      demo: 'https://ram404.netlify.app/',
    },
    {
      title: 'SUPERHERO SERVICE',
      description: 'Fullstack web application for complete management of a superhero collection with CRUD operations, persistent database storage and layered architecture.',
      tags: ['NODE.JS', 'EXPRESS', 'MONGODB', 'MONGOOSE', 'EJS', 'MVC'],
      number: '02',
      github: 'https://github.com/LethzPeople/S4_Practico_01',
      demo: 'https://superheroservice.onrender.com/',
    }
  ]

  return (
    <section id="projects" className="py-32 px-6 lg:px-12 relative bg-brutalist-darkgray">
      <div className="grain absolute inset-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="mb-12">
          <span className="text-brutalist-purple font-mono text-sm border-2 border-brutalist-purple px-4 py-2">
            [03] /// PROJECTS
          </span>
        </div>

        {/* Title */}
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black brutalist-text mb-20 text-white leading-none">
          SELECTED<br/>
          <span className="text-brutalist-purple">WORK</span>
        </h2>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={project.title}
              className="relative border-4 border-brutalist-neon bg-brutalist-gray p-8 group hover:bg-brutalist-neon hover:border-brutalist-neon transition-all duration-200"
            >
              {/* Project number */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-brutalist-neon border-4 border-brutalist-darkgray flex items-center justify-center group-hover:bg-black group-hover:border-brutalist-neon transition-all duration-200">
                <span className="text-black group-hover:text-brutalist-neon font-black text-2xl brutalist-text">
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-brutalist-neon group-hover:text-black brutalist-text transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white group-hover:text-black mb-6 font-mono leading-relaxed transition-colors text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs bg-brutalist-darkgray border-2 border-brutalist-purple text-brutalist-neon font-black brutalist-text group-hover:bg-brutalist-purple group-hover:text-black group-hover:border-black transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center bg-brutalist-darkgray border-4 border-brutalist-purple text-brutalist-purple font-black brutalist-text hover:bg-brutalist-purple hover:text-black transition-all duration-100"
                >
                  GITHUB
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center bg-brutalist-purple text-black border-4 border-brutalist-purple font-black brutalist-text hover:bg-brutalist-darkgray hover:text-brutalist-purple transition-all duration-100"
                >
                  DEMO
                </a>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-brutalist-neon group-hover:border-black transition-all"></div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-24">
          <a 
            href="https://github.com/LethzPeople"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-6 bg-brutalist-neon text-black border-4 border-brutalist-neon font-black text-2xl brutalist-text hover:bg-transparent hover:text-brutalist-neon transition-all duration-100 group relative"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            MORE ON GITHUB
            <span className="absolute -bottom-2 -right-2 w-full h-full border-4 border-brutalist-neon -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-100"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
