import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Search, User } from 'lucide-react'

export const FarenHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const megaMenuContent = {
    projects: [
      { title: 'Luxury Villas', image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=400', count: '24 Properties' },
      { title: 'Modern Apartments', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400', count: '18 Properties' },
      { title: 'Commercial Spaces', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400', count: '12 Properties' },
      { title: 'Residential Homes', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', count: '32 Properties' }
    ],
    services: [
      'Property Management', 'Real Estate Consulting', 'Investment Advisory',
      'Property Valuation', 'Legal Services', 'Interior Design'
    ]
  }

  return (
    <>
      <div className="bg-gray-900 text-gray-300 py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +1 234 567 890
              </span>
              <span className="hidden md:flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@faren.com
              </span>
              <span className="hidden lg:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                New York, USA
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-white transition-colors">Login</button>
              <span>/</span>
              <button className="hover:text-white transition-colors">Register</button>
            </div>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <div className="container-custom">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-12">
              <div className="text-2xl font-bold tracking-tight">
                FAREN<span className="text-gray-500">.</span>
              </div>

              <div className="hidden lg:flex items-center space-x-8">
                <div className="relative group">
                  <button
                    className="flex items-center gap-1 py-2 font-medium hover:text-gray-600 transition-colors"
                    onMouseEnter={() => setActiveDropdown('home')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Home <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === 'home' && (
                    <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-gray-100 py-2 mt-2">
                      <a href="#" className="block px-4 py-2 hover:bg-gray-50">Home Style 1</a>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-50">Home Style 2</a>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-50">Home Style 3</a>
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <button
                    className="flex items-center gap-1 py-2 font-medium hover:text-gray-600 transition-colors"
                    onMouseEnter={() => setActiveDropdown('projects')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Projects <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                <a href="#about" className="py-2 font-medium hover:text-gray-600 transition-colors">
                  About
                </a>

                <div className="relative group">
                  <button
                    className="flex items-center gap-1 py-2 font-medium hover:text-gray-600 transition-colors"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Services <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                <a href="#blog" className="py-2 font-medium hover:text-gray-600 transition-colors">
                  Blog
                </a>

                <a href="#contact" className="py-2 font-medium hover:text-gray-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {activeDropdown === 'projects' && (
          <div
            className="absolute left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-8"
            onMouseEnter={() => setActiveDropdown('projects')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="container-custom">
              <div className="grid grid-cols-4 gap-6">
                {megaMenuContent.projects.map((project, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-lg mb-3">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.count}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeDropdown === 'services' && (
          <div
            className="absolute left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-8"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="container-custom">
              <div className="grid grid-cols-3 gap-4">
                {megaMenuContent.services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-600">{index + 1}</span>
                    </div>
                    <span className="font-medium">{service}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="py-2 font-medium">Home</a>
                <a href="#" className="py-2 font-medium">Projects</a>
                <a href="#" className="py-2 font-medium">About</a>
                <a href="#" className="py-2 font-medium">Services</a>
                <a href="#" className="py-2 font-medium">Blog</a>
                <a href="#" className="py-2 font-medium">Contact</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}