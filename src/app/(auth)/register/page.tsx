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
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { formState, registerformSchema, RegisterSchema } from './../../../schema/register.schema';
import { handleRegister } from "@/services/register.service"
import { useActionState, useEffect } from "react"


export default function RegisterPage() {
   const [action , formAction] = useActionState(handleRegister, formState)
const router = useRouter()
const form =  useForm<RegisterSchema>({resolver:zodResolver(registerformSchema) , defaultValues:{name:"", email: "" , password: "",rePassword: "", phone: "",}});


useEffect(() => {
  if(action){
if(!action.success && action.message){
toast.error(action.message, {
  position: "top-center",
});
}

if(action.success && action.message){
toast.success(action.message, {
  position: "top-center",
});
router.push("/login")
}
  }
},[action, router]);

  return (
<section className="pt-20">
  <div className="max-w-2xl mx-auto text-center">
    <h1 className="text-6xl font-bold mb-8 text-center animate-pulse">Register</h1>
        <Form {...form}>
      <form action={formAction} className="space-y-8">



{/* >>>>>>>>>>>>>>> name field >>>>>>>>>>>>>>>>> */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John doe" {...field} />
              </FormControl>
              <FormMessage>{action.error?.name?.[0]}</FormMessage>
            </FormItem>
          )}
        />







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
              <FormMessage>{action.error?.email?.[0]}</FormMessage>
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
                <Input placeholder="**************" {...field} type="password" autoComplete="off" />
              </FormControl>
              <FormMessage>{action.error?.password?.[0]}</FormMessage>
            </FormItem>
          )}
        />

        {/* >>>>>>>>>>>>>>> RePassword field >>>>>>>>>>>>>>>>> */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="**************" {...field} type="password" autoComplete="off" />
              </FormControl>
              <FormMessage>{action.error?.rePassword?.[0]}</FormMessage>
            </FormItem>
          )}
        />


        {/* >>>>>>>>>>>>>>> Phone field >>>>>>>>>>>>>>>>> */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="**************" {...field} type="tel"/>
              </FormControl>
              <FormMessage>{action.error?.phone?.[0]}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-70 py-6 cursor-pointer">Submit</Button>
      </form>
    </Form>
  </div>
</section>
  );
}