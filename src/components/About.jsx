const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 relative bg-brutalist-darkgray">
      <div className="grain absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="mb-12">
          <span className="text-brutalist-purple font-mono text-sm border-2 border-brutalist-purple px-4 py-2">
            [01] /// ABOUT ME
          </span>
        </div>

        {/* Title */}
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black brutalist-text mb-16 text-white leading-none">
          WHO I<br />
          <span className="text-brutalist-neon">AM</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-32">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-2xl font-bold text-white brutalist-text leading-tight">
                PASSIONATE <span className="text-brutalist-neon">DEVELOPER</span> FOCUSED ON
                CREATING <span className="text-brutalist-purple">UNIQUE</span> DIGITAL EXPERIENCES.
              </p>

              <div className="h-1 w-full bg-brutalist-neon"></div>

              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hi! My name is Matias. I'm a full-stack developer.
                  My interest in programming started in 2020, when I began working as a community manager on a FiveM server. <br />
                  I was always thinking of ways to keep people engaged in the game by creating events and encouraging interaction within the community. <br />
                  Because of this, I decided to start studying software development so I could add new features to the game on my own. <br />
                  My current focus is to continue learning and create creative and engaging web designs.
                </p>
              </div>
            </div>

            {/* Stats  */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="border-4 border-brutalist-purple p-6 text-center bg-brutalist-gray">
                <div className="text-5xl font-black text-brutalist-purple brutalist-text mb-2">02+</div>
                <div className="text-xs font-black text-white brutalist-text">YEARS EXP</div>
              </div>
              <div className="border-4 border-brutalist-neon p-6 text-center bg-brutalist-gray">
                <div className="text-5xl font-black text-brutalist-neon brutalist-text mb-2">3+</div>
                <div className="text-xs font-black text-white brutalist-text">PROJECTS</div>
              </div>
              <div className="border-4 border-white p-6 text-center bg-brutalist-gray">
                <div className="text-5xl font-black text-white brutalist-text mb-2">∞</div>
                <div className="text-xs font-black text-white brutalist-text">LINES CODE</div>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative -mt-80">
            <div className="relative aspect-square image-border-distorted">
              <img
                src={`${import.meta.env.BASE_URL}ABOUT_ME_oscura.jpg`}
                alt="About Me"
                className="w-full h-full object-cover"
              />

              {/* Decorative elements */}
              {/* Cuadrado verde neón */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-brutalist-neon z-10">
                <div className="grain-intense absolute inset-0"></div>
              </div>
            </div>

            {/* Rotated text */}
            <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 rotate-90 text-6xl font-black brutalist-text text-brutalist-purple/20 hidden lg:block">
              ABOUT
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About