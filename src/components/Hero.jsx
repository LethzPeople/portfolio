const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-brutalist-darkgray">
      {/* Grain texture */}
      <div className="grain absolute inset-0" />
      
      {/* Scan line */}
      <div className="scanline absolute inset-0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-left px-8 md:px-16 lg:px-32 max-w-7xl mx-auto w-full">
        {/* Greeting line - code style */}
        <div className="mb-4 font-black text-white text-lg md:text-xl">
          <span className="text-brutalist-neon">Hello, I'm</span>
        </div>

        {/* Name */}
        <h1 className="mb-6">
          <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none brutalist-text">
            <span className="text-brutalist-purple">Matias Seco</span>
            <span className="text-white">.</span>
          </div>
        </h1>

        {/* Main statement */}
        <div className="mb-8 text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white brutalist-text">
          Full-Stack <span className="text-brutalist-neon">Developer</span>
          <br />
        </div>

        {/* Description */}
        <div className="mb-12 max-w-2xl">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
            Building{" "}
            <span className="text-brutalist-neon font-bold">digital experiences</span>.
            I'm passionate about designing{" "}
            <span className="text-brutalist-purple font-bold"> engaging interfaces</span>
            , writing clean code, and crafting intuitive interactions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-start mb-16">
          <a
            href="#contact"
            className="relative px-10 py-4 bg-brutalist-neon text-black font-black text-lg brutalist-text border-4 border-brutalist-neon hover:bg-transparent hover:text-brutalist-neon transition-all duration-100 group"
          >
            LET'S TALK!
            <span className="absolute -bottom-2 -right-2 w-full h-full border-4 border-brutalist-neon -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-100"></span>
          </a>
        </div>
      </div>

      {/* Rotated text decoration */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 text-brutalist-purple font-black text-2xl brutalist-text opacity-20 hidden lg:block">
        PORTFOLIO
      </div>

      {/* Arrow down indicator - Triple Chevron */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-1 animate-bounce">
          <svg className="w-10 h-3 text-brutalist-neon" fill="currentColor" viewBox="0 0 24 8">
            <path d="M12 8L0 0h4l8 5.5L20 0h4z" />
          </svg>
          <svg className="w-10 h-3 text-brutalist-neon" fill="currentColor" viewBox="0 0 24 8">
            <path d="M12 8L0 0h4l8 5.5L20 0h4z" />
          </svg>
          <svg className="w-10 h-3 text-brutalist-neon" fill="currentColor" viewBox="0 0 24 8">
            <path d="M12 8L0 0h4l8 5.5L20 0h4z" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
