import Link from "next/link"
import BlurFade from "@/components/magicui/blur-fade"
import NavbarComponent from "@/components/utils/navbar"
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import { ChevronRightIcon } from "lucide-react"
import { getAllProfiles } from "@/data/profiles"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { BentoForHomePage, GalleryForHomePage } from "@/components/card"
import { HeroSection } from "@/components/magicui/hero-section"
import WhyChooseUs from "@/components/magicui/why-choose-us"
import { HyperText } from "@/components/ui/hyper-text"


const HomePage = async () => {
  const sejarah = await getAllProfiles("tentang kami", 1)
  return (
    <>
      { !sejarah.length ?
        <div className="h-screen flex items-center justify-center">
          <p className="text-sm text-center">Tidak ada data.</p>
        </div>
      :
        <>
          <NavbarComponent/>
          <HeroSection/>
          <section className="w-full py-20 lg:py-28">
            <div className="container flex flex-col items-center px-4 md:px-6 text-center space-y-10">
              <BlurFade delay={0.25} inView>
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Eksplorasi Seru bersama Langit Biru Banyuwangi!
                </h1>
                <p className="max-w-4xl text-muted-foreground md:text-sm/relaxed lg:text-md/relaxed xl:text-lg/relaxed">
                  Temukan paket wisata lengkap dan terjangkau yang membawa Anda menjelajahi keindahan alam, budaya, dan petualangan tak terlupakan di Banyuwangi. Mulai dari pantai eksotis hingga pegunungan menawan, kami hadir untuk mewujudkan liburan impian Anda dengan layanan terbaik dan harga bersahabat.
                </p>
              </BlurFade>
              <div className="container text-center px-4 md:px-6 space-y-6">
                <BlurFade delay={0.35} inView >
                  <BentoForHomePage />
                </BlurFade>
              </div>
            </div>
          </section>
          <AnimatedGridPattern
            numSquares={50}
            maxOpacity={0.1}
            duration={1}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -z-10",
            )}
          />
          <WhyChooseUs/>
          <section className="w-full py-20 lg:py-28 space-y-10">
            <div className="container flex flex-col items-center px-4 md:px-6 text-center space-y-10">
              <BlurFade delay={0.25} inView>
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Visualisasi Karya Kami.
                </h1>
                <p className="max-w-4xl text-muted-foreground md:text-sm/relaxed lg:text-md/relaxed xl:text-lg/relaxed">
                  Jelajahi kumpulan momen dan proyek terbaik kami. Setiap gambar bercerita tentang dedikasi, kreativitas, dan standar kualitas yang kami jaga.
                </p>
              </BlurFade>
            </div>
            <div className="container text-center px-4 md:px-6 space-y-6">
              <BlurFade delay={0.35} inView >
                <GalleryForHomePage />
                <Link href="/galleries" className="group inline-flex h-10 items-center justify-center rounded-md bg-[#EBEB15] text-[#164E8A] hover:bg-[#164E8A] hover:text-[#EBEB15] px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                  Selengkapnya
                  <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </BlurFade>
            </div>
          </section>
          <section className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="container flex flex-col items-center max-w-5xl px-4 md:px-6 text-center space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Hubungi Kami</h2>
                  <p className="max-w-4xl text-muted-foreground md:text-sm/relaxed lg:text-md/relaxed xl:text-lg/relaxed">
                    Jangan sungkan bertanya maupun untuk menyampaikan saran dan kritik dengan menghubungi kami. Kami dengan senang hati akan menerima dan merespon kebutuhan Anda.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                    <div>
                      <h3 className="text-lg font-semibold">Maps</h3>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.7317032012716!2d114.34971627500975!3d-8.229712441803152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15ba6c1195da7%3A0x78e3dc1ca28860a7!2sBunga%20Residence!5e0!3m2!1sen!2sid!4v1770612302762!5m2!1sen!2sid" width="420" height="260" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border rounded-md"></iframe>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">Alamat</h3>
                        <p className="text-muted-foreground">Perum Bunga Residence Blok G2 Kel. kebalenan<br/>Banyuwangi, Jawa Timur 68417</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Telepon</h3>
                        <p className="text-muted-foreground">0813 2111 6569</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-muted-foreground">langitbirubanyuwangi@gmail.com</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Media Sosial</h3>
                        <div className="flex space-x-2">
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
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </section>
          <section>
            <div className="w-full h-10 bg-secondary flex items-center justify-center text-center text-sm">© 2026 - All Right Reserved - Langit Biru Banyuwangi: Teman Setia Liburanmu - Carved by&nbsp;<a href="https://www.lundyscript.site/"><HyperText as={"p"} startOnView={true} className="text-[13px]">lundyscript</HyperText></a></div>
          </section>
        </>
      }
    </>
  );
}

export default HomePage
