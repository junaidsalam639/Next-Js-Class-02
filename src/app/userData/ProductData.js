export default async function productApi(value) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${value}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

