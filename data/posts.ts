import { db } from "@/lib/db"

export const getFourPosts = async () => {
  try {
    const posts = await db.posts.findMany({
      take: 2,
      where:{
        title:{ contains: "Opsi A", mode: "insensitive" },
      },
      orderBy: [
        {createdAt: 'asc'}
      ]
    })
    return posts
  } catch (error) {
    throw new Error("Failed to fetch data.")
  }
}

const ITEMS_PER_PAGE = 8
export const getAllPostsForAdmin = async (query: string, currentPage: number) => {
  const offset = (currentPage-1) * ITEMS_PER_PAGE
  try {
    const posts = await db.posts.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where:{
        OR:[
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      },
      orderBy: [
        {createdAt: 'desc'}
      ]
    })
    return posts
  } catch (error) {
    throw new Error("Failed to fetch data.")
  }
}
export const getAllPosts = async (query: string, currentPage: number) => {
  const offset = (currentPage-1) * ITEMS_PER_PAGE
  try {
    const posts = await db.posts.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where:{
        category: "Artikel",
        OR:[
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      },
      orderBy: [
        {createdAt: 'desc'}
      ]
    })
    return posts
  } catch (error) {
    throw new Error("Failed to fetch data.")
  }
}
const TOUR_PER_PAGE = 6
export const getAllTour = async (query: string, currentPage: number) => {
  const offset = (currentPage-1) * TOUR_PER_PAGE
  try {
    const posts = await db.posts.findMany({
      skip: offset,
      take: TOUR_PER_PAGE,
      where:{
        category: "Paket Wisata",
        OR:[
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      },
      orderBy: [
        {createdAt: 'asc'}
      ]
    })
    return posts
  } catch (error) {
    throw new Error("Failed to fetch data.")
  }
}
const GALLERY_PER_PAGE = 6
export const getAllGalleries = async (query: string, currentPage: number) => {
  const offset = (currentPage-1) * GALLERY_PER_PAGE
  try {
    const posts = await db.posts.findMany({
      skip: offset,
      take: GALLERY_PER_PAGE,
      where:{
        category: "Galeri",
        OR:[
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      },
      orderBy: [
        {createdAt: 'desc'}
      ]
    })
    return posts
  } catch (error) {
    throw new Error("Failed to fetch data.")
  }
}
export const getSixGalleries = async () => {
  try {
    const posts = await db.posts.findMany({
      take: 6,
      where:{
        category: "Galeri",
      },
      orderBy: [
        {createdAt: 'desc'}
      ]
    })
    return posts
  } catch (error) {
    throw new Error("Failed to fetch data.")
  }
}
export const getPostsPagesForAdmin = async (query: string) => {
  try {
    const posts = await db.posts.count({
      where:{
        OR:[
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      }
    })
    const totalPages = Math.ceil(Number(posts)/ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    throw new Error("Failed to fetch data.")
  }
}
export const getPostsPages = async (query: string) => {
  try {
    const posts = await db.posts.count({
      where:{
        category: "Artikel",
        OR:[
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      }
    })
    const totalPages = Math.ceil(Number(posts)/ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    throw new Error("Failed to fetch data.")
  }
}
export const getTourPages = async (query: string) => {
  try {
    const posts = await db.posts.count({
      where:{
        category: "Paket Wisata",
        OR:[
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      }
    })
    const totalPages = Math.ceil(Number(posts)/TOUR_PER_PAGE)
    return totalPages
  } catch (error) {
    throw new Error("Failed to fetch data.")
  }
}
export const getGalleriesPages = async (query: string) => {
  try {
    const posts = await db.posts.count({
      where:{
        category: "Galeri",
        OR:[
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      }
    })
    const totalPages = Math.ceil(Number(posts)/GALLERY_PER_PAGE)
    return totalPages
  } catch (error) {
    throw new Error("Failed to fetch data.")
  }
}
export const getPostsDataForAdmin = async (query: string, currentPage: number) => {
  const offset = (currentPage-1) * ITEMS_PER_PAGE
  try {
    const data = await db.posts.count({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where:{
        OR:[
          {
            category:{ contains: query, mode: "insensitive" },
          },
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      },
      orderBy: [
        {createdAt: 'desc'}
      ]
    })
    return Number(data)
  } catch {
    return 0
  }
}
export const getPostsData = async (query: string, currentPage: number) => {
  const offset = (currentPage-1) * ITEMS_PER_PAGE
  try {
    const data = await db.posts.count({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where:{
        category: "Artikel",
        OR:[
          {
            category:{ contains: query, mode: "insensitive" },
          },
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      },
      orderBy: [
        {createdAt: 'desc'}
      ]
    })
    return Number(data)
  } catch {
    return 0
  }
}
export const getTourData = async (query: string, currentPage: number) => {
  const offset = (currentPage-1) * TOUR_PER_PAGE
  try {
    const data = await db.posts.count({
      skip: offset,
      take: TOUR_PER_PAGE,
      where:{
        category: "Paket Wisata",
        OR:[
          {
            category:{ contains: query, mode: "insensitive" },
          },
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      },
      orderBy: [
        {createdAt: 'desc'}
      ]
    })
    return Number(data)
  } catch {
    return 0
  }
}
export const getGalleriesData = async (query: string, currentPage: number) => {
  const offset = (currentPage-1) * GALLERY_PER_PAGE
  try {
    const data = await db.posts.count({
      skip: offset,
      take: GALLERY_PER_PAGE,
      where:{
        category: "Galeri",
        OR:[
          {
            category:{ contains: query, mode: "insensitive" },
          },
          {
            title:{ contains: query, mode: "insensitive" },
          },
          {
            body:{ contains: query, mode: "insensitive" },
          }
        ]
      },
      orderBy: [
        {createdAt: 'desc'}
      ]
    })
    return Number(data)
  } catch {
    return 0
  }
}
export const getPostsAllDataForAdmin = async () => {
  try {
    const totalData = await db.posts.count()
    return Number(totalData)
  } catch {
    return 0
  }
}
export const getPostsAllData = async () => {
  try {
    const totalData = await db.posts.count({
      where:{
        category: "Artikel",
      },
    })
    return Number(totalData)
  } catch {
    return 0
  }
}
export const getTourAllData = async () => {
  try {
    const totalData = await db.posts.count({
      where:{
        category: "Paket Wisata",
      },
    })
    return Number(totalData)
  } catch {
    return 0
  }
}
export const getGalleriesAllData = async () => {
  try {
    const totalData = await db.posts.count({
      where:{
        category: "Galeri",
      },
    })
    return Number(totalData)
  } catch {
    return 0
  }
}

export const getPostById = async (id: string | undefined) => {
  try {
    const post = await db.posts.findUnique({
      where: {id},
    })
    return post
  } catch {
    return null
  }
}