import { z } from "zod"


export const loginformSchema = z.object({
  email: z.email({message:"Please enter a valid email address."}),
  password : z.string().nonempty({message:"Password is required"}).min(6,"Password must be at least 6 characters long"),
})


export type LoginFormPaylod =  z.infer<typeof loginformSchema>