"use server"
import { getUserToken } from "@/lib/server-utils";

export async function addToWishlist(productId : string) {
try {
const token = await getUserToken()
        const res = await fetch(
            `${process.env.NEXTAUTH_API_BASE_URL}/api/v1/wishlist`,{
                method:"POST",
        headers:{
            "Content-Type": "application/json",
            token:token as string,
        },
 body: JSON.stringify({
                productId: productId,
            })
        });


const data = await res.json();

if(!res.ok){
          return {
                data: null,
                success: false,
                message: data.message || "adding to wishlist failed"
            }

}

        return {
            data: data,
            success: true,
            message: data.message || "added to wishlist successfully"
        }
    } catch (error) {
        console.log(error);
        return { error: error as string }
    }
}



export async function removeItemFromWishlist(productId : string) {
try {
const token = await getUserToken()
        const res = await fetch(
            `${process.env.NEXTAUTH_API_BASE_URL}/api/v1/wishlist/${productId}`,{
                method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            token:token as string,
        }});

const data = await res.json();

if(!res.ok){
return {
                data: null,
                success: false,
                message: data.message || "removing from  Wishlist failed"
            }
}


        return {
            data: data,
            success: true,
            message: data.message || "removed from Wishlist successfully"
        }

    } catch (error) {
        console.log(error);
        return { error: error as string }
    }
}


export async function getWishlist() {
try {
const token = await getUserToken()
        const res = await fetch(
            `${process.env.NEXTAUTH_API_BASE_URL}/api/v1/wishlist`,{
        headers:{
            "Content-Type":"application/json",
            token:token as string,
        }});

if (!res.ok) throw new Error(res.statusText || "Failed to fetch wishlist");

const data = await res.json();
return data;
}catch(error){
    console.log(error);
    
return{
data : null,
success:false,
message:(error as string)|| "Somting went wrong"
};
}
}