"use server"
import { getUserToken } from "@/lib/server-utils";

export async function getUserCart() {
try {
const token = await getUserToken()
        const res = await fetch(
            `${process.env.NEXTAUTH_API_BASE_URL}/api/v1/cart`,{
                
        headers:{
            token:token as string,
        }});

const data = await res.json();

if(!res.ok){
throw new Error(data.message || "Failed to fetch Cart");
}

return data;
    } catch (error) {
        console.log(error);
    }
}


export async function removeUserCart() {
try {
const token = await getUserToken()
        const res = await fetch(
            `${process.env.NEXTAUTH_API_BASE_URL}/api/v1/cart`,{
                method:"DELETE",
        headers:{
            token:token as string,
        }});

const data = await res.json();

if(!res.ok){
throw new Error(data.message || "Failed to fetch Cart");
}

return data;
    } catch (error) {
        console.log(error);
    }
}




export async function addToCart(productId : string) {
try {
const token = await getUserToken()
        const res = await fetch(
            `${process.env.NEXTAUTH_API_BASE_URL}/api/v1/cart`,{
                method:"POST",
        headers:{
            "Content-Type":"application/json",
            token:token as string,
        },
        body:JSON.stringify({productId})
    
    });

const data = await res.json();

if(!res.ok){
return{
    data:null,
    success:false,
message: data.message || "Adding to cart failed"
};
}

return{
    data:data,
    success:true,
message: data.message || "Added to cart successfully"
};
}catch(error){
    console.log(error);
    
return{
data : null,
success:false,
message:(error as string)|| "Somting went wrong"
};
}
}



export async function removeFromCart(productId : string) {
try {
const token = await getUserToken()
        const res = await fetch(
            `${process.env.NEXTAUTH_API_BASE_URL}/api/v1/cart/${productId}`,{
                method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            token:token as string,
        },
        body:JSON.stringify({productId})
    
    });

const data = await res.json();

if(!res.ok){
return{
    data:null,
    success:false,
message: data.message || "Removing From cart failed"
};
}

return{
    data:data,
    success:true,
message: data.message || "Removed From cart successfully"
};
}catch(error){
    console.log(error);
    
return{
data : null,
success:false,
message:(error as string)|| "Somting went wrong"
};
}
}


export async function updateQtyProductCart(productId : string , count:number) {
try {
const token = await getUserToken()
        const res = await fetch(
            `${process.env.NEXTAUTH_API_BASE_URL}/api/v1/cart/${productId}`,{
                method:"PUT",
        headers:{
            "Content-Type":"application/json",
            token:token as string,
        },
        body:JSON.stringify({count}),
    
    });

const data = await res.json();

if(!res.ok){
return{
    data:null,
    success:false,
message: data.message || "Updating Quantity in cart failed"
};
}

return{
    data:data,
    success:true,
message: data.message || "Quantity Updated successfully"
};
}catch(error){
    console.log(error);
    
return{
data : null,
success:false,
message:(error as string)|| "Somting went wrong"
};
}
}