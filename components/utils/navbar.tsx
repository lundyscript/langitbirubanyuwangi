"use client"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { FaInstagram, FaRegEnvelope, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import ShinyButton from "@/components/magicui/shiny-button";
import Image from "next/image"
import { NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState, useEffect, useRef } from "react"
import { cn } from '@/lib/utils'
import { usePathname } from "next/navigation"

interface MenuItem {
  label: string
  href?: string
  submenu?: SubMenuItem[]
}
interface SubMenuItem {
  label: string
  href: string
  submenu?: SubMenuItem[]
}

const menuItems: MenuItem[] = [
  {
    label: 'Tentang Kami',
    href: '/aboutus'
  },
  {
    label: 'Paket Wisata',
    href: '/tourpackage',
    submenu: [
      { label: '3 Hari 2 Malam', 
        href: '/tourpackage?page=1&query=3%20Hari%202%20Malam',
        submenu: [
          { label: 'Opsi A', href: '/tourpackage?read=cmlkhiokl0001o33lo842d476' },
          { label: 'Opsi B', href: '/tourpackage?read=cmlkhpsx90000nhyrh839zzi2' },
          { label: 'Opsi C', href: '/tourpackage?read=cmlkhqqtl0001nhyrxbs9xt2h' },
        ]
      },
      { label: '2 Hari 1 Malam', 
        href: '/tourpackage?page=1&query=2%20Hari%201%20Malam',
        submenu: [
          { label: 'Opsi A', href: '/tourpackage?read=cmlkhr8u80002nhyrg39u9ila' },
          { label: 'Opsi B', href: '/tourpackage?read=cmlkhufrt0003nhyrvz6qv1k4' },
          { label: 'Opsi C', href: '/tourpackage?read=cmlkhvoh10004nhyrssq20e09' },
        ]
      },
      { label: 'One Day One Trip',
        href: '/tourpackage?page=1&query=One%20Day%20One%20Trip',
        submenu: [
          { label: 'Kawah Ijen', href: '/tourpackage?read=cmm4ef83b0005k2teu5nefq7t' },
          { label: 'Taman Nasional Baluran', href: '/tourpackage?read=cmm4ej9lw0008k2texzwwjn3m' },
          { label: 'Kawah Wurung', href: '/tourpackage?read=cmm4ei4g00007k2tef0fm7bdp' },
          { label: 'Kawah Ijen - Taman Nasional Baluran', href: '/tourpackage?read=cmm4e9ii00004k2tesf86i7d6' },
          { label: 'Djawatan - Taman Nasional Baluran', href: '/tourpackage?read=cmm4e4nhj0001k2teihr08nse' },
          { label: 'Kawah Ijen - Kawah Wurung', href: '/tourpackage?read=cmm4e8goz0003k2tepiuus27w' },
          { label: 'Kawah Wurung - Taman Nasional Baluran', href: '/tourpackage?read=cmm4eghpw0006k2te477mlxdo' },
          { label: 'Djawatan - Wedi Ireng - Pulau Merah', href: '/tourpackage?read=cmm4e64hx0002k2tezdqefgh9' },
          { label: 'Djawatan - Taman Nasioanal Alas Purwo - Pulau Merah', href: '/tourpackage?read=cmm4e0xl40000k2te9nroxrg7' },
        ]
      },
      { label: 'Open Trip',
        href: '/tourpackage?page=1&query=Open%20Trip',
        submenu: [
          { label: 'Kawah Ijen - Taman Nasional Baluran (Start Surabaya)', href: '/tourpackage?read=cmm4el5ln0009k2tec943qjkk' },
          { label: 'Kawah Ijen (Start Surabaya)', href: '/tourpackage?read=cmm4emhf1000ak2te9sgfuq9p' },
        ]
      },
    ],
  },
  {
    label: 'Galeri Kami',
    href: '/galleries'
  },
  {
    label: 'Artikel',
    href: '/articles'
  },
]

export default function NavbarComponent() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Check if page has scrolled more than 10 pixels
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (menuLabel: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredMenu(menuLabel)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null)
    }, 150)
  }
  return (
    <header className={cn("flex h-16 w-full shrink-0 items-center px-4 md:px-6 fixed z-50 text-[15px] tracking-tight transition-all duration-300 ",
      isScrolled
          ? 'bg-[#164E8A] shadow-md text-white'
          : isHomePage ? 'backdrop-blur-sm bg-background/20 text-white' : 'bg-[#164E8A] shadow-md text-white'
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
        {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href || '#'}
                className={cn(
                  'flex items-center gap-1 transition-colors hover:opacity-75 py-4'
                )}
              >
                {item.label}
                {item.submenu && (
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-300',
                      hoveredMenu === item.label && 'rotate-180'
                    )}
                  />
                )}
              </a>

              {item.submenu && hoveredMenu === item.label && (
                <>
                  {/* Invisible hover extender to prevent gap between menu and submenu */}
                  <div className="absolute left-0 right-0 top-full h-3" />
                  
                  <div
                    className={cn(
                      'absolute left-0 top-full mt-0 rounded-md shadow-xl min-w-max border-t-4',
                      isScrolled 
                        ? 'bg-[#164E8A] text-[#EBEB15] border-blue-700' 
                        : 'bg-[#EBEB15] text-[#164E8A] border-yellow-400'
                    )}
                  >
                    <div className="px-2 py-2 flex flex-col gap-1">
                      {item.submenu.map((subitem) => (
                        <div
                          key={subitem.label}
                          className="relative group"
                          onMouseEnter={() => setHoveredSubmenu(subitem.label)}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <a
                            href={subitem.href}
                            className={cn(
                              'flex items-center gap-2 px-4 py-2 text-sm hover:rounded transition-all whitespace-nowrap',
                              isScrolled 
                                ? 'text-white hover:bg-[#EBEB15] hover:text-[#164E8A]' 
                                : 'text-[#164E8A] hover:bg-[#164E8A] hover:text-[#EBEB15]'
                            )}
                          >
                            {subitem.label}
                            {subitem.submenu && (
                              <ChevronDown
                                className={cn(
                                  'w-3 h-3 transition-transform duration-300',
                                  hoveredSubmenu === subitem.label && '-rotate-90'
                                )}
                              />
                            )}
                          </a>

                          {subitem.submenu && hoveredSubmenu === subitem.label && (
                            <div
                              className={cn(
                                'absolute left-full top-0 ml-0 rounded-md shadow-xl min-w-max border-l-4',
                                isScrolled 
                                  ? 'bg-[#164E8A] text-[#EBEB15] border-blue-700' 
                                  : 'bg-[#EBEB15] text-[#164E8A] border-yellow-400'
                              )}
                            >
                              <div className="px-2 py-2 flex flex-col gap-1">
                                {subitem.submenu.map((subsubitem) => (
                                  <a
                                    key={subsubitem.label}
                                    href={subsubitem.href}
                                    className={cn(
                                      'px-4 py-2 text-sm hover:rounded transition-all whitespace-nowrap',
                                      isScrolled 
                                        ? 'text-white hover:bg-[#EBEB15] hover:text-[#164E8A]' 
                                        : 'text-[#164E8A] hover:bg-[#164E8A] hover:text-[#EBEB15]'
                                    )}
                                  >
                                    {subsubitem.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
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
        <SheetContent side="left" className="bg-[#164E8A] text-white border-0">
          <div className="flex flex-col h-full justify-between">
            <div className="grid gap-6 py-8">
              <div className="inline-flex gap-4">
                <Image
                  src="/langit biru banyuwangi.png"
                  width={80}
                  height={40}
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
                      <Link href="https://www.tiktok.com/@langitbiru.banyuwangi" target="_blank" className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
                        <FaTiktok size={18}/>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tiktok</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
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
                      <Link href="https://wa.me/6281321116965?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20paket%20wisata%20di%20Langit%20Biru%20Banyuwangi." target="_blank" className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
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
        <p className="pr-2 text-sm leading-tight font-medium">Temukan Kami :</p>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://www.tiktok.com/@langitbiru.banyuwangi" target="_blank" className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
                <FaTiktok size={18}/>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tiktok</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
              <Link href="https://wa.me/6281321116965?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20paket%20wisata%20di%20Langit%20Biru%20Banyuwangi." target="_blank" className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
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