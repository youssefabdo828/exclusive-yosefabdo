"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginFormPaylod, loginformSchema } from "@/schema/login.schema"
import {signIn} from 'next-auth/react'
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import { useWishlist } from "@/context/WishlistContext"

export default function LoginForm() {
              const { getWishlistDetails } = useWishlist();
            const { getCartDetails}  = useCart()

const router = useRouter()


const form =  useForm<LoginFormPaylod>({resolver:zodResolver(loginformSchema) , defaultValues:{email: "" , password: ""}});

async function onSubmit(values:LoginFormPaylod) {

  try {
    const res = await signIn('credentials' , {
      email:values.email,
      password: values.password,
      redirect: false,
      callbackUrl:"/",
    });


    if(res?.ok){
      // home
      toast.success("Login Successfully",{
        position:"top-center"})
        router.push("/")
        getCartDetails();
          getWishlistDetails();
    }else{
      // show error
      toast.error(res?.error || "Somthing went wrong" ,{
        position:"top-center"
      })
    }
    
  } catch (error) {
    console.log(error);
    
  }
}

  return (
<section className="pt-60">
  <div className="max-w-2xl mx-auto text-center">
    <h1 className="text-6xl font-bold mb-8 text-center animate-pulse">Login</h1>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">





        {/* >>>>>>>>>>>>>>> email field >>>>>>>>>>>>>>>>> */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="username@domain.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        {/* >>>>>>>>>>>>>>> Password field >>>>>>>>>>>>>>>>> */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="**************" {...field} type="password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-70 py-6 cursor-pointer">Submit</Button>
      </form>
    </Form>
  </div>
</section>
  )
}