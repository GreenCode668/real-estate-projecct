import { motion } from 'framer-motion'

const partners = [
  { name: 'BuildTech', logo: 'BUILDTECH' },
  { name: 'PropertyPro', logo: 'PROPERTYPRO' },
  { name: 'RealEstate+', logo: 'REALESTATE+' },
  { name: 'HomeLux', logo: 'HOMELUX' },
  { name: 'UrbanSpace', logo: 'URBANSPACE' },
  { name: 'DesignCo', logo: 'DESIGNCO' }
]

export const Partners = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="text-gray-500 text-sm uppercase tracking-wider">Trusted By</span>
          <h3 className="text-2xl font-semibold mt-2">Our Partners</h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll hover:pause">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <div className="w-40 h-20 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg cursor-pointer">
                  <span className="text-gray-700 font-bold text-sm tracking-wider">
                    {partner.logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}