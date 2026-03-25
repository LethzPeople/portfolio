const Contact = () => {
  const socialLinks = [
    {
      name: 'GITHUB',
      url: 'https://github.com/LethzPeople',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LINKEDIN',
      url: 'https://linkedin.com/in/matias-ignacio-seco-uriarte-98bb59333/',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'EMAIL',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=ignacioma2010@gmail.com&su=Contacto desde Portfolio',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'RESUME',
      url: '${import.meta.env.BASE_URL}resume.pdf',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm2-8h8v2H8v-2zm0 4h8v2H8v-2zm0-8h5v2H8V8z" />
        </svg>
      )
    },
  ]

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 relative bg-brutalist-darkgray min-h-screen">
      <div className="grain absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="mb-12">
          <span className="text-brutalist-neon font-mono text-sm border-2 border-brutalist-neon px-4 py-2">
            [04] /// CONTACT
          </span>
        </div>

        {/* Title */}
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black brutalist-text mb-20 text-brutalist-purple leading-none">
          LET'S<br />
          <span className="text-brutalist-neon">TALK</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Links - Left side */}
          <div className="border-4 border-brutalist-neon bg-brutalist-gray p-8">
            <h3 className="text-3xl font-black text-brutalist-purple brutalist-text mb-8">
              FIND ME
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative p-6 flex items-center gap-4 border-4 ${idx % 2 === 0 ? 'border-brutalist-purple hover:bg-brutalist-purple hover:border-brutalist-purple' : 'border-brutalist-neon hover:bg-brutalist-neon hover:border-brutalist-neon'
                    } bg-brutalist-darkgray group transition-all duration-100`}
                >
                  <div className={`flex-shrink-0 ${idx % 2 === 0 ? 'text-brutalist-purple' : 'text-brutalist-neon'
                    } group-hover:text-black transition-colors`}>
                    {social.icon}
                  </div>
                  <div className="text-white group-hover:text-black font-black brutalist-text text-lg transition-colors">
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Status and Location */}
          <div className="space-y-8">
            {/* Status Info */}
            <div className="border-4 border-brutalist-purple bg-brutalist-gray p-8">
              <h3 className="text-3xl font-black text-brutalist-purple brutalist-text mb-6">
                STATUS
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-brutalist-neon"></div>
                  <span className="text-white font-black brutalist-text text-sm">AVAILABLE FOR WORK</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-brutalist-neon"></div>
                  <span className="text-white font-black brutalist-text text-sm">RESPONSE: 24-48H</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-brutalist-neon"></div>
                  <span className="text-white font-black brutalist-text text-sm">REMOTE WORLDWIDE</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="image-border-distorted border-4 border-white bg-brutalist-darkgray p-8 relative">
              <div className="grain absolute inset-0" />
              <div className="font-mono text-white text-sm space-y-2 relative z-10">
                <p>TIME ZONE: UTC-3</p>
                <p>LANG: ES(NATIVE) / EN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact