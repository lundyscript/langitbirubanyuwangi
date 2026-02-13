/* eslint-disable @next/next/no-img-element */
import { BentoForTourPackagePage } from '@/components/card'
import BlurFade from '@/components/magicui/blur-fade'
import GridPattern from '@/components/magicui/grid-pattern'
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern"
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { BodyPreview } from '@/components/utils/body'
import { Heading } from '@/components/utils/heading'
import NavbarComponent from '@/components/utils/navbar'
import Pagination from '@/components/utils/pagination'
import { getPostById, getTourAllData, getTourData, getTourPages } from '@/data/posts'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownToLine } from 'lucide-react'

const AllTourPackagePage = async ({searchParams}:{searchParams?:{ query?: string, page?: string, read?: string }}) => {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await getTourPages(query)
  const data = await getTourData(query, currentPage)
  const totalData = await getTourAllData()
  const topic = await getPostById(searchParams?.read)
  return (
    <>
      <NavbarComponent/>
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
      {topic == null ? 
        <section className="w-full py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="lg:flex lg:flex-row gap-4 pb-10 justify-between">
              <Heading title="Eksplorasi Seru bersama Langit Biru Banyuwangi!" description="Temukan paket wisata lengkap dan terjangkau yang membawa Anda menjelajahi keindahan alam, budaya, dan petualangan tak terlupakan di Banyuwangi. Mulai dari pantai eksotis hingga pegunungan menawan, kami hadir untuk mewujudkan liburan impian Anda dengan layanan terbaik dan harga bersahabat."/>
              <Separator orientation="horizontal" className="lg:hidden my-4"/>
              <div className="flex flex-row gap-2">
                <Link href="/paket wisata langit biru.pdf" target="_blank" className="group inline-flex h-10 items-center justify-center rounded-md bg-[#EBEB15] text-[#164E8A] hover:bg-[#164E8A] hover:text-[#EBEB15] px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                  Dokumen
                  <ArrowDownToLine className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </Link>
              </div>
            </div>
            {data === 0 ?
              <p className="text-center">Tidak ada data.</p>
            :
              <BlurFade delay={0.25} inView className="space-y-4">
                <BentoForTourPackagePage query={query} currentPage={currentPage}/>
                <Pagination totalPages={totalPages} data={data} totalData={totalData}/>
              </BlurFade>
            }
          </div>
        </section>
      :
        <section className="w-full py-20 lg:py-28">
        <div className="container items-center max-w-4xl px-4 md:px-6 space-y-6">
          <div className="text-justify justify-center leading-loose space-y-3 z-50">
            <Link href={{pathname: '/articles'}} className="text-sm font-medium text-muted-foreground transition-all duration-200 ease-out hover:text-primary hover:translate-x-1">← Back to All Articles</Link>
            <BlurFade delay={0.25} inView>
              <div className="relative my-4 h-80 w-full">
                <Image src={topic?.image ? `${topic.image}` : "/placeholder.svg"} alt={topic?.title ? topic.title : "Cover"} layout="fill" sizes="100vw" priority className="rounded-md object-cover" />
              </div>
              <div className="flex flex-row gap-4 items-center pb-2">
                <p className="text-sm text-muted-foreground">{topic?.createdAt ? format(topic.createdAt, "dd/MM/yyyy") : ""}</p>
                <Badge variant={"outline"} className="text-sm">{topic?.category}</Badge>
              </div>
              <h3 className="pb-4 text-2xl font-bold tracking-tight capitalize">{topic?.title}</h3>
              <BodyPreview body={topic?.body ? topic.body : ""}/>
            </BlurFade>
          </div>
        </div>
        <GridPattern
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "-z-10"
          )}
        />
        </section>
      }
      
    </>
  )
}

export default AllTourPackagePage