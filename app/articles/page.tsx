/* eslint-disable @next/next/no-img-element */
import { BentoForArticlesPage } from '@/components/card'
import { SearchInput } from '@/components/input/search'
import BlurFade from '@/components/magicui/blur-fade'
import GridPattern from '@/components/magicui/grid-pattern'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { BodyPreview } from '@/components/utils/body'
import { Heading } from '@/components/utils/heading'
import NavbarComponent from '@/components/utils/navbar'
import Pagination from '@/components/utils/pagination'
import { getPostById, getPostsAllData, getPostsData, getPostsPages } from '@/data/posts'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

const AllNewsPage = async ({searchParams}:{searchParams?:{ query?: string, page?: string, read?: string }}) => {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await getPostsPages(query)
  const data = await getPostsData(query, currentPage)
  const totalData = await getPostsAllData()
  const topic = await getPostById(searchParams?.read)
  return (
    <>
      <NavbarComponent/>
      {topic == null ? 
        <section className="w-full py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="lg:flex lg:flex-row gap-4 pb-10 justify-between">
              <Heading title="Artikel Kami." description="Telusuri referensi perjalanan, wujudkan liburan seru anda bersama kami!"/>
              <Separator orientation="horizontal" className="lg:hidden my-4"/>
              <div className="flex flex-row gap-2">
                <SearchInput label="Cari Informasi"/>
              </div>
            </div>
            {data === 0 ?
              <p className="text-center">Tidak ada data.</p>
            :
              <BlurFade delay={0.25} inView className="space-y-4">
                <BentoForArticlesPage query={query} currentPage={currentPage}/>
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

export default AllNewsPage