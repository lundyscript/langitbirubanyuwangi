"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import ShinyButton from "@/components/magicui/shiny-button";
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState, useEffect } from "react"
import { cn } from '@/lib/utils'
import { usePathname } from "next/navigation"

export default function NavbarComponent() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check if page has scrolled more than 10 pixels
      // ma, iso akses folderku? bu kuni njaluk tulung cekno nomor serdik mahasiswa ppg, njaluk tulung awakmu cekno nomor serdik ndek kolom F, aku tak ngecek data ndek pddiktine, suwun yo ma, nek wes mari kabari lewat sso ae
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className={cn("flex h-16 w-full shrink-0 items-center px-4 md:px-6 fixed z-50 text-[15px] tracking-tight transition-all duration-300 ",
      isScrolled
          ? 'bg-[#164E8A] shadow-md text-white'
          : isHomePage ? 'backdrop-blur-sm bg-background/20 text-white' : 'bg-[#EBEB15] shadow-md text-[#164E8A]'
    )}>
      <div className="mr-6 hidden lg:flex space-x-6 items-center">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src="/langit biru banyuwangi.png"
            width={100}
            height={100}
            alt="Logo"
            loading="lazy"
          />
        </Link>
        <Link href="/aboutus" className={cn("font-medium p-2 rounded-md",isScrolled ? 'hover:bg-[#EBEB15] hover:text-slate-900' : 'hover:bg-[#164E8A] hover:text-[#EBEB15]')}>TENTANG KAMI</Link>
        <Link href="/tourpackage" className={cn("font-medium p-2 rounded-md",isScrolled ? 'hover:bg-[#EBEB15] hover:text-slate-900' : 'hover:bg-[#164E8A] hover:text-[#EBEB15]')}>PAKET WISATA</Link>
        <Link href="/galleries" className={cn("font-medium p-2 rounded-md",isScrolled ? 'hover:bg-[#EBEB15] hover:text-slate-900' : 'hover:bg-[#164E8A] hover:text-[#EBEB15]')}>GALERI</Link>
        <Link href="/articles" className={cn("font-medium p-2 rounded-md",isScrolled ? 'hover:bg-[#EBEB15] hover:text-slate-900' : 'hover:bg-[#164E8A] hover:text-[#EBEB15]')}>ARTIKEL</Link>
      </div>
      <Sheet>
        <div className="lg:hidden w-full flex gap-4 justify-between">
          <SheetTrigger asChild>
            <div className="inline-flex gap-4 items-center">
              <Button size="icon" variant="lbb">
                <Menu/>
              </Button>
              <Link href="/" className="inline-flex items-center">
                <div className="font-medium text-base leading-4 tracking-tighter">
                  <p>LANGIT BIRU</p>
                  <p>BANYUWANGI</p>
                </div>
              </Link>
            </div>
          </SheetTrigger>
          <Link href="/tourpackage"><ShinyButton text="PAKET WISATA"/></Link>
        </div>
        <SheetContent side="left">
          <div className="flex flex-col h-full justify-between">
            <div className="grid gap-6 py-8">
              <div className="inline-flex gap-4">
                <Image
                  src="/langit biru banyuwangi.png"
                  width={60}
                  height={44}
                  alt="Logo"
                  loading="lazy"
                />
                <Link href="/" className="inline-flex items-center">
                  <div className="font-medium text-base leading-4 tracking-tighter">
                    <p>LANGIT BIRU</p>
                    <p>BANYUWANGI</p>
                  </div>
                </Link>
              </div>
              <Link href="/aboutus" className="font-medium hover:underline hover:underline-offset-4">TENTANG KAMI</Link>
              <Link href="/tourpackage" className="font-medium hover:underline hover:underline-offset-4">PAKET WISATA</Link>
              <Link href="/galleries" className="font-medium hover:underline hover:underline-offset-4">GALERI</Link>
              <Link href="/articles" className="font-medium hover:underline hover:underline-offset-4">ARTIKEL</Link>
            </div>
            <div>
              <p className="py-4">Temukan Kami :</p>
              <div className="flex items-center justify-between">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href="https://www.instagram.com/langitbiru.banyuwangi" target="_blank" className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
                        <FaInstagram size={20}/>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href="https://wa.me/6281321116569" target="_blank" className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
                        <FaWhatsapp size={20}/>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Whatsapp</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=langitbirubanyuwangi@gmail.com" target="_blank" className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
                        <FaRegEnvelope size={18}/>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Email</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="ml-auto hidden lg:flex space-x-0 items-center">
        <p className="pr-2">Temukan Kami :</p>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://www.instagram.com/langitbiru.banyuwangi" target="_blank" className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
                <FaInstagram size={20}/>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://wa.me/6281321116569" target="_blank" className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
                <FaWhatsapp size={20}/>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Whatsapp</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=langitbirubanyuwangi@gmail.com" target="_blank" className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
                <FaRegEnvelope size={18}/>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  )
}