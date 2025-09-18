import { z } from "zod"


export const addressformSchema = z.object({
  cartId: z.string().nonempty({message:"cartId is required"}),
  details: z.string().nonempty({message:"Address is required"}).min(3,"Address must ba at least 3 characters long"),
  city: z.string().nonempty({message:"city is required"}).min(3,"city must ba at least 3 characters long"),
  phone : z.string().nonempty({message:"Phone is required"}).regex(/^(002|\+2)?01[0-25][0-9]{8}$/, {message:"Invalid phone number"}),
paymentMethod : z.enum(["cash", "card"],{
  message:"Payment method is required",
}),

});


export type addressFormType =  z.infer<typeof addressformSchema>



export const addressFormState = {
success:false,
error:{
  cartId: [],
  details:[],
  city:[],
  phone:[],
  paymentMethod: [],
},
message:null,
callbackUrl: "",
};



export type addressFormStateType = {
success:boolean,
error:{
  cartId?: string[],
  details?: string[],
  city?: string[],
  phone?: string[],
  paymentMethod?: string[],
},
message:string | null,
callbackUrl?: string,
};

