'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from "@/lib/utils"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { BodyPreview } from '../utils/body';

export function TourPackageGrid({ items }: { items: Array<{ id: string; src: string; alt: string; title: string; body:string}> }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {items.map((item) => (
            <AlertDialog key={item.id}>
              <AlertDialogTrigger asChild>
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
              </AlertDialogTrigger>
              <AlertDialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
                <AlertDialogHeader>
                  <AlertDialogTitle>{item.title}</AlertDialogTitle>
                  <AlertDialogDescription>
                    <BodyPreview body={item?.body ? item.body : "Tidak ada deskripsi."}/>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        ))}
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
