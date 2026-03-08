import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 relative ${
        isScrolled ? 'bg-brutalist-darkgray' : 'bg-transparent'
      }`}
    >
      <div className="max-w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="text-3xl font-black brutalist-text">
          </div>
          
          <div className="hidden md:flex space-x-1">
            {['</HOME>', '</ABOUTME>', '</SKILLS>', '</PROJECTS>', '</CONTACT>'].map((item, i) => (
              <button
                key={item}
                onClick={() => scrollToSection(['hero', 'about', 'skills', 'projects', 'contact'][i])}
                className="px-6 py-3 text-white hover:bg-brutalist-neon hover:text-black transition-all duration-100 font-black text-sm border-2 border-transparent hover:border-brutalist-neon brutalist-text"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-brutalist-neon border-4 border-brutalist-neon p-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar