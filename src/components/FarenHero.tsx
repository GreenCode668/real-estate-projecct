import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const heroSlides = [
  {
    id: 1,
    title: 'Modern Architecture',
    subtitle: 'Discover Your',
    description: 'Creating spaces that inspire and endure through innovative design',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920',
    stats: { projects: '350+', years: '15', awards: '28' }
  },
  {
    id: 2,
    title: 'Luxury Living',
    subtitle: 'Experience',
    description: 'Exclusive properties in prime locations with world-class amenities',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920',
    stats: { projects: '280+', years: '12', awards: '24' }
  },
  {
    id: 3,
    title: 'Dream Home',
    subtitle: 'Find Your',
    description: 'Transforming visions into reality with exceptional craftsmanship',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920',
    stats: { projects: '420+', years: '18', awards: '32' }
  }
]

export const FarenHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container-custom">
                  <div className="max-w-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <span className="text-white/80 text-lg font-light tracking-wider uppercase mb-4 block">
                        {slide.subtitle}
                      </span>
                      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-xl text-white/90 mb-8 max-w-2xl">
                        {slide.description}
                      </p>

                      <div className="flex items-center gap-6 mb-10">
                        <button className="bg-white text-gray-900 px-8 py-4 font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                          Explore Projects
                          <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 font-medium tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300">
                          Get Started
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-8 max-w-md">
                        <div className="border-l-2 border-white/50 pl-4">
                          <div className="text-3xl font-bold text-white">{slide.stats.projects}</div>
                          <div className="text-white/70 text-sm">Projects</div>
                        </div>
                        <div className="border-l-2 border-white/50 pl-4">
                          <div className="text-3xl font-bold text-white">{slide.stats.years}</div>
                          <div className="text-white/70 text-sm">Years</div>
                        </div>
                        <div className="border-l-2 border-white/50 pl-4">
                          <div className="text-3xl font-bold text-white">{slide.stats.awards}</div>
                          <div className="text-white/70 text-sm">Awards</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm border border-white/20 p-4 hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm border border-white/20 p-4 hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              currentSlide === index
                ? 'w-12 h-1 bg-white'
                : 'w-8 h-1 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-30">
        <div className="text-white font-light">
          <span className="text-4xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span className="text-lg opacity-70">{String(heroSlides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}