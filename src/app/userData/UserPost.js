export default async function UsersPost(id) {
  await new Promise ((resolve) => setTimeout(() => {
     resolve()
  },3000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
