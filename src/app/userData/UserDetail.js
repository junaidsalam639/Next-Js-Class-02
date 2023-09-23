export default async function UsersDetail(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

