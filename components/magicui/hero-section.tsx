'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Plane, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { NumberTicker } from '../ui/number-ticker'
import Link from 'next/link'

interface Slide {
  id: number
  image: string
  eyebrow: string
  title: string
  titleHighlight: string
  subtitle: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/hero-1.JPG',
    eyebrow: 'Explore the World',
    title: 'Menjelajahi Keajaiban di Bawah',
    titleHighlight: 'Langit Biru Banyuwangi.',
    subtitle:
      'Dari pancaran api biru Kawah Ijen hingga savana eksotis Baluran yang menawan. Kami membawa Anda lebih dekat dengan alam, menyusuri setiap sudut keajaiban Sunrise of Java dengan pelayanan yang tulus dan pengalaman yang autentik. Mari lukis cerita perjalanan Anda sendiri bersama kami.',
  },
  {
    id: 2,
    image: '/hero-2.JPG',
    eyebrow: 'Adventure Awaits',
    title: 'Liburan Tanpa Beban,',
    titleHighlight: 'Cerita Tanpa Batas.',
    subtitle:
      'Percayakan petualangan Anda di Banyuwangi kepada ahli lokal yang berpengalaman. Dengan paket wisata yang fleksibel, akomodasi pilihan, dan pemandu ramah, kami memastikan setiap detik perjalanan Anda berjalan sempurna tanpa rasa khawatir. Cukup bawa semangat Anda, sisanya biarkan kami yang urus.',
  },
  {
    id: 3,
    image: '/hero-3.jpg',
    eyebrow: 'Immerse Yourself',
    title: 'Satu Langit,',
    titleHighlight: 'Berjuta Petualangan di Ujung Timur Jawa',
    subtitle:
      'Siap menembus batas? Jelajahi destinasi paling ikonik hingga surga tersembunyi yang jarang tersentuh di Banyuwangi. Bersama Langit Biru, temukan paket trip seru dengan harga kompetitif yang dirancang khusus untuk Anda para pencari adrenalin dan keindahan alam sejati.',
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextSlideIdx, setNextSlideIdx] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 800)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    if (index === currentSlide) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 800)
  }

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 800)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 800)
  }

  const slide = slides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 lg:py-28">
      {/* Background Images Container - Sliding Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Slides Container with Horizontal Scroll Animation */}
        <div
          className="absolute inset-0 flex transition-transform duration-800 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((s) => (
            <div
              key={s.id}
              className="relative min-w-full h-full bg-cover bg-center bg-no-repeat flex-shrink-0"
              style={{
                backgroundImage: `url(${s.image})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Black Layer for Text Readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl">
          {/* Eyebrow Text - Animated */}
          <div
            className="flex items-center gap-2 mb-6 transition-all duration-700 opacity-0 animate-in"
            style={{
              animation: `fadeInUp 0.8s ease-out 0.2s forwards`,
            }}
          >
            <Plane className="w-5 h-5 text-[#EBEB15]" />
            <p className="text-sm font-medium text-[#EBEB15] uppercase tracking-widest">
              {slide.eyebrow}
            </p>
          </div>

          {/* Main Headline - Animated */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-balance drop-shadow-lg transition-all duration-700"
            style={{
              animation: `fadeInUp 0.8s ease-out 0.3s forwards`,
              opacity: 0,
            }}
          >
            {slide.title}
            <span className="block text-[#EBEB15]">{slide.titleHighlight}</span>
          </h1>

          {/* Subheadline - Animated */}
          <p
            className="text-md sm:text-lg text-white/90 leading-relaxed mb-10 text-pretty drop-shadow-md transition-all duration-700"
            style={{
              animation: `fadeInUp 0.8s ease-out 0.4s forwards`,
              opacity: 0,
            }}
          >
            {slide.subtitle}
          </p>

          {/* CTA Buttons - Animated */}
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-700"
            style={{
              animation: `fadeInUp 0.8s ease-out 0.5s forwards`,
              opacity: 0,
            }}
          >
            <Link href="https://wa.me/6281321116569" className="group inline-flex h-12 items-center justify-center rounded-md bg-[#EBEB15] text-[#164E8A] hover:bg-[#164E8A] hover:text-[#EBEB15] px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
              Plan Your Trip
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/tourpackage" className="group inline-flex h-12 items-center justify-center rounded-md border-[1px] border-white/50 hover:border-white text-white hover:text-white hover:bg-background/30 px-8 text-sm font-semibold sm:px-10 backdrop-blur-sm bg-background/20" prefetch={false}>
              <MapPin className="mr-2 h-5 w-5" />
              Browse Destinations
            </Link>
          </div>

          {/* Stats or Trust Indicators - Animated */}
          <div
            className="mt-14 pt-10 border-t border-white/30 flex flex-col sm:flex-row gap-8 sm:gap-10 transition-all duration-700"
            style={{
              animation: `fadeInUp 0.8s ease-out 0.6s forwards`,
              opacity: 0,
            }}
          >
            <div>
              <NumberTicker value={500} className="text-3xl font-bold text-[#EBEB15] mb-2" />
              <p className="text-sm text-white/80">Destinations</p>
            </div>
            <div>
              <NumberTicker value={50} className="text-3xl font-bold text-[#EBEB15] mb-2" />
              <p className="text-sm text-white/80">Happy Travelers</p>
            </div>
            <div>
              <NumberTicker value={20} className="text-3xl font-bold text-[#EBEB15] mb-2" />
              <p className="text-sm text-white/80">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-secondary'
                : 'w-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
