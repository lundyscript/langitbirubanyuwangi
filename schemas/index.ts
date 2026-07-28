import * as z from "zod"
import { UserRole } from "@prisma/client"

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
  image: z.optional(z.string())
})
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false
    }
    return true
  }, {
    message: "New password is required!",
    path: ["newPassword"]
  })
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false
    }
    return true
  }, {
    message: "Password is required!",
    path: ["password"]
  })

export const LoginSchema = z.object({
  email: z.string().email({
    message:"Email is required."
  }),
  password: z.string().min(1,{
    message:"Password is required."
  }),
  code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message:"Email is required."
  }),
  password: z.string().min(6,{
    message:"Minimum 6 character required."
  }),
  name: z.string().min(1,{
    message: "Name is required."
  })
})

export const ResetSchema = z.object({
  email: z.string().email({
    message:"Email is required."
  }),
})

export const NewPasswordSchema = z.object({
  password: z.string().min(6,{
    message:"Minimum 6 character required."
  }),
})

export const ProfilesSchema = z.object({
  section: z.string(),
  title: z.string(),
  subtitle: z.string(),
  body: z.string(),
  image: z.instanceof(File)
  .refine((file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type), {message: "File format must be either jpg, jpeg or png.",})
  .refine((file) => file.size < 3000000, {message: "Image must less than 3MB"})
  .optional()
})

export const PostsSchema = z.object({
  category: z.string(),
  title: z.string(),
  body: z.string(),
  image: z.instanceof(File)
  .refine((file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type), {message: "File format must be either jpg, jpeg or png.",})
  .refine((file) => file.size < 3000000, {message: "Image must less than 3MB"})
  .optional()
})