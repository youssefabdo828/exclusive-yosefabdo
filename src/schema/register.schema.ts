import { z } from "zod"


export const registerformSchema = z.object({
  name: z.string().nonempty({message:"Name is required"}).min(3,"Name must ba at least 3 characters long"),
  email: z.email({message:"Please enter a valid email address."}),
  password : z.string().nonempty({message:"Password is required"}).min(6,"Password must be at least 6 characters long"),
  rePassword : z.string().nonempty({message:"Confirm Password is required"}).min(6,"Password must be at least 6 characters long"),
  phone : z.string().nonempty({message:"Phone is required"}).regex(/^(002|\+2)?01[0-25][0-9]{8}$/, {message:"Invalid phone number"}),
}).refine((data) => data.password === data.rePassword , {
message:"Passwords do not match",
path:["rePassword"],
})


export type RegisterSchema =  z.infer<typeof registerformSchema>



export const formState = {
success:false,
error:{},
message:null,
};



export type formStateType = {
success:boolean,
error:{
  name?: string[],
  email?: string[],
  password?: string[],
  rePassword?: string[],
  phone?: string[],
},
message:string | null,
};

