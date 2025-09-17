import { motion } from 'framer-motion'
import {
  Home, Building2, Briefcase, TrendingUp,
  Shield, Palette
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Creating beautiful homes that reflect your lifestyle and personality',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Building2,
    title: 'Commercial Spaces',
    description: 'Designing functional and aesthetic commercial properties',
    color: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: Briefcase,
    title: 'Property Management',
    description: 'Complete management solutions for your real estate portfolio',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description: 'Expert guidance for profitable real estate investments',
    color: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    icon: Shield,
    title: 'Legal Services',
    description: 'Comprehensive legal support for all property transactions',
    color: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Transform spaces with our professional interior design services',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  }
]

const processSteps = [
  { number: '01', title: 'Consultation', description: 'Initial meeting to understand your requirements' },
  { number: '02', title: 'Planning', description: 'Detailed planning and design phase' },
  { number: '03', title: 'Execution', description: 'Professional implementation of the project' },
  { number: '04', title: 'Delivery', description: 'Final handover with complete documentation' }
]

export const Services = () => {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gray-500 text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Services</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer comprehensive real estate solutions tailored to meet your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gray-400 text-sm uppercase tracking-wider">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Our Process</h2>
              <p className="text-gray-300 mb-8">
                We follow a systematic approach to ensure every project is delivered with excellence
                and meets our clients' expectations.
              </p>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="text-3xl font-bold text-gray-700">{step.number}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
                  alt="Process 1"
                  className="rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600"
                  alt="Process 2"
                  className="rounded-lg mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600"
                  alt="Process 3"
                  className="rounded-lg -mt-4"
                />
                <img
                  src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600"
                  alt="Process 4"
                  className="rounded-lg mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}