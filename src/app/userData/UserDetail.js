export default async function UsersDetail(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/user/${id}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

