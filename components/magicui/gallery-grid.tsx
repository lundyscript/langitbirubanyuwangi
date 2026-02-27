'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils"
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TwoTourPackage({ items }: { items: Array<{ id: string; src: string; alt: string; title: string; body:string}> }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {items.map((item) => (
          <Link href={`/tourpackage?page=1&query=${item.title.substring(0,14)}`} key={item.id}>
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 h-96 cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-[#ebeb15b9] transition-all duration-300" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8">
              {/* Text Content */}
              <div
                className={`place-items-center space-y-2  text-[#164E8A] transition-all duration-300 transform ${
                  hoveredId === item.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route-icon lucide-route"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
                <h4 className="text-2xl md:text-5xl leading-tight font-bold mb-2">
                  {item.title.substring(0, 14)}
                </h4>
              </div>
            </div>
          {/* Accent Line Animation */}
          <div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/50 transition-all duration-500 ${
              hoveredId === item.id ? 'w-full' : 'w-0'
            }`}
          />
          </div>
          </Link>
      ))}
      </div>
    </div>
  );
}

export function TourPackageGrid({ items }: { items: Array<{ id: string; src: string; alt: string; title: string; body:string}> }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {items.map((item) => (
          <Link href={`/tourpackage?read=${item.id}`}>
              <div
                className="group relative overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 h-96 cursor-pointer"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#ebeb15b9] transition-all duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8">


                  {/* Text Content */}
                  <div
                    className={`place-items-center space-y-2  text-[#164E8A] transition-all duration-300 transform ${
                      hoveredId === item.id
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                    }`}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route-icon lucide-route"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
                    <h4 className="text-2xl md:text-5xl leading-tight font-bold mb-2">{item.title}</h4>
                  </div>
                </div>

                {/* Accent Line Animation */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/50 transition-all duration-500 ${
                    hoveredId === item.id ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            </Link>
        ))}
      </div>
    </div>
  );
}

export function CarouselGallery({ items }: { items: Array<{ id: string; src: string; alt: string; title: string; }> }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Detect screen size and set items per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerView(1); // Mobile
      } else if (width < 1024) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(3); // Desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, items.length - itemsPerView);
        return prev + 1 > maxIndex ? 0 : prev + 1;
      });
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [autoPlay, items.length, itemsPerView]);

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, items.length - itemsPerView);
      return prev + 1 > maxIndex ? 0 : prev + 1;
    });
    setTimeout(() => setAutoPlay(true), 5000); // Resume autoplay after 5 seconds
  };

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, items.length - itemsPerView);
      return prev - 1 < 0 ? maxIndex : prev - 1;
    });
    setTimeout(() => setAutoPlay(true), 5000); // Resume autoplay after 5 seconds
  };

  return (
    <div className="mb-8 text-left">
      {/* Carousel Container */}
      <div 
        className="relative group"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {/* Carousel Wrapper */}
        <div className="overflow-hidden rounded-2xl">
          {/* Carousel Track */}
          <div className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className={`flex-shrink-0 px-3 md:px-4 ${
                  itemsPerView === 1 ? 'w-full' : itemsPerView === 2 ? 'w-1/2' : 'w-1/3'
                }`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="group/card relative overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 cursor-pointer transition-transform duration-300 hover:-translate-y-1 h-full">
                  {/* Image Container */}
                  <div className={`relative w-full h-96 overflow-hidden`}>
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-black/0 hover:bg-[#ebeb154f] transition-all duration-300" /> */}

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-5 md:p-6 hover:bg-[#ebeb154f] transition-all duration-300">
                    {/* Text Content */}
                    <div
                      className={`transition-all duration-300 transform ${
                        hoveredId === item.id
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                    >
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Accent Line Animation */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/50 transition-all duration-500 ${
                      hoveredId === item.id ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute -left-16 md:-left-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#EBEB15] hover:bg-[#164E8A] text-[#164E8A] hover:text-[#EBEB15] transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous items"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-16 md:-right-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#EBEB15] hover:bg-[#164E8A] text-[#164E8A] hover:text-[#EBEB15] transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next items"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.max(0, items.length - itemsPerView + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 5000);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-accent'
                  : 'w-2 h-2 bg-foreground/20 hover:bg-foreground/40'
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function GalleryGrid({ items }: { items: Array<{ id: string; src: string; alt: string; title: string; }> }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={cn(idx === 0 || idx === 3 ? "lg:col-span-2 h-96" : "col-span-1 h-96", idx === 2 ? "lg:row-span-2 h-auto" : "h-96" ,"group relative overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 cursor-pointer")}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-[#ebeb154f] transition-all duration-300" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8">
              {/* Text Content */}
              <div
                className={`transition-all duration-300 transform ${
                  hoveredId === item.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h4>
              </div>
            </div>

            {/* Accent Line Animation */}
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/50 transition-all duration-500 ${
                hoveredId === item.id ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ArticlesGrid({ items }: { items: Array<{ id: string; src: string; alt: string; title: string; body: string;}> }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 h-96 cursor-pointer"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-[#ebeb154f] transition-all duration-300" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8">
              {/* Text Content */}
              <div
                className={`transition-all duration-300 transform ${
                  hoveredId === item.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h4>
                <div className="max-w-lg text-muted" dangerouslySetInnerHTML={{ __html: item.body.substring(0,100) }} />
              </div>
            </div>

            {/* Accent Line Animation */}
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/50 transition-all duration-500 ${
                hoveredId === item.id ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
