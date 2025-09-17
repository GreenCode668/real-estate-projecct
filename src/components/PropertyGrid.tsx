import { motion } from 'framer-motion'
import { ArrowUpRight, Maximize2 } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Modern Villa Complex',
    year: '2023',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    size: 'large'
  },
  {
    id: 2,
    title: 'Urban Loft Apartments',
    year: '2023',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1565623006066-82f23c79210b?w=800',
    size: 'small'
  },
  {
    id: 3,
    title: 'Seaside Residence',
    year: '2022',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    size: 'medium'
  },
  {
    id: 4,
    title: 'Mountain Retreat',
    year: '2024',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
    size: 'medium'
  },
  {
    id: 5,
    title: 'City Center Tower',
    year: '2023',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    size: 'small'
  },
  {
    id: 6,
    title: 'Garden Estate',
    year: '2022',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    size: 'large'
  }
]

export const PropertyGrid = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-gray-500 text-sm uppercase tracking-wider">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Latest Projects</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all duration-300">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden bg-white ${
                property.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                property.size === 'medium' ? 'md:row-span-2' : ''
              }`}
            >
              <div className="absolute inset-0">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm opacity-90">{property.category}</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">{property.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{property.year}</span>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">{property.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-gray-900 mb-2">850+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gray-900 mb-2">38</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  )
}