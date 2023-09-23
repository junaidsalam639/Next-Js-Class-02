async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default  async function UsersData() {
    const data = await getData()
    return(
        <>
         {
          data.map((user) => {
           return(
            <>
            <div className="bg-indigo-500 mt-5 py-6 text-indigo-50 rounded-md mx-4 px-6">
             <p>Name : {user.name}</p>
             <p>Email : {user.email}</p>
            </div>
            </>
             )
          })
         }
        </>
    )
}
