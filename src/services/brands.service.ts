export async function getBrands() {
    try {
        const res = await fetch(
            'https://ecommerce.routemisr.com/api/v1/brands'
        );

if(!res.ok) throw new Error(res.statusText || "Failed to fetch Brands");

const data = await res.json();
return data;
    } catch (error) {
        console.log(error);
        return {error: error as string}
    }
}