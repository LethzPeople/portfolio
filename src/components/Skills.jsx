const Skills = () => {
  const skillCategories = [
    {
      title: 'FRONTEND',
      skills: [
        'HTML5',
        'CSS3',
        'JAVASCRIPT',
        'REACT',
        'TYPESCRIPT',
        'TAILWIND',
        'NEXT.JS',
        'REACT ROUTER',
        'VITE',
        'AXIOS'
      ]
    },
    {
      title: 'BACKEND',
      skills: [
        'NODE.JS',
        'EXPRESS',
        'APIS REST',
        'MONGODB',
        'MONGOOSE',
        'MYSQL',
        'HEIDISQL',
        'SQL/NOSQL',
        'JWT',
        'BCRYPTJS'
      ]
    },
    {
      title: 'TOOLS',
      skills: [
        'GIT',
        'DOCKER',
        'VS CODE',
        'FIGMA',
        'Photoshop',
        'UNITY'
      ]
    }
  ]

  return (
    <section id="skills" className="py-32 px-6 lg:px-12 relative bg-brutalist-darkgray overflow-hidden">
      <div className="grain absolute inset-0" />
      
      {/* Decorative barcode */}
      <div className="absolute top-20 left-0 w-full h-48 barcode opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="mb-12">
          <span className="text-brutalist-neon font-mono text-sm border-2 border-brutalist-neon px-4 py-2">
            [02] /// SKILLS
          </span>
        </div>

        {/* Title */}
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black brutalist-text mb-20 text-brutalist-neon leading-none">
          WHAT I<br/>
          <span className="text-white">KNOW</span>
        </h2>

        {/* Skills grid  */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="border-4 border-brutalist-purple bg-brutalist-gray p-8 pt-12 relative"
            >
              {/* Decorative square */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-brutalist-neon border-4 border-brutalist-darkgray"></div>

              <h3 className="text-3xl font-black mb-8 text-brutalist-neon brutalist-text">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="text-white font-black brutalist-text text-lg border-l-4 border-brutalist-neon pl-4 py-2"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-4 border-brutalist-purple"></div>
            </div>
          ))}
        </div>

        {/* Additional tech stack */}
        <div className="mt-24">
          <h3 className="text-4xl font-black text-white brutalist-text mb-8">
            /// ALSO <span className="text-brutalist-purple">WORKING</span> WITH
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['LUA', 'C#'].map((tech) => (
              <div 
                key={tech}
                className="relative p-6 border-4 border-brutalist-purple text-center group hover:bg-brutalist-neon hover:border-brutalist-neon transition-all duration-100 bg-brutalist-gray"
              >
                <span className="font-black text-lg brutalist-text text-white group-hover:text-black">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
