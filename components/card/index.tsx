import { getAllGalleries, getAllPosts, getAllTour, getFourPosts, getSixGalleries } from "@/data/posts"
import { ArticlesGrid, GalleryGrid, TourPackageGrid, TwoTourPackage } from "../magicui/gallery-grid"

export const BentoForHomePage = async () => {
    const tourpackage = await getFourPosts()
    return (
      <TwoTourPackage items={tourpackage.map((tour) => ({
        id: tour.id,
        src: tour.image ? `${tour.image}` : "/placeholder.svg",
        alt: tour.title,
        title: tour.title,
        body: tour.body,
      }))} />
    );
  }

export const BentoForArticlesPage = async ({query, currentPage}:{query: string, currentPage: number}) => {
  const articles = await getAllPosts(query, currentPage)
  return (
    <ArticlesGrid items={articles.map((article) => ({
        id: article.id,
        src: article.image ? `${article.image}` : "/placeholder.svg",
        alt: article.title,
        title: article.title,
        body: article.body,
      }))} />
  );
}
export const BentoForTourPackagePage = async ({query, currentPage}:{query: string, currentPage: number}) => {
  const tourpackage = await getAllTour(query, currentPage)
  return (
    <TourPackageGrid items={tourpackage.map((tour) => ({
        id: tour.id,
        src: tour.image ? `${tour.image}` : "/placeholder.svg",
        alt: tour.title,
        title: tour.title,
        body: tour.body,
      }))} />
  );
}
export const BentoForGalleryPage = async ({query, currentPage}:{query: string, currentPage: number}) => {
  const galleries = await getAllGalleries(query, currentPage)
  return (
    <GalleryGrid items={galleries.map((gallery) => ({
        id: gallery.id,
        src: gallery.image ? `${gallery.image}` : "/placeholder.svg",
        alt: gallery.title,
        title: gallery.title,
      }))} />
  );
}
export const GalleryForHomePage = async () => {
  const galleries = await getSixGalleries()
  return (
    <GalleryGrid items={galleries.map((gallery) => ({
        id: gallery.id,
        src: gallery.image ? `${gallery.image}` : "/placeholder.svg",
        alt: gallery.title,
        title: gallery.title,
      }))} />
  );
}
