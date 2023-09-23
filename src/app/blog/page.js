import Link from "next/link";
import getData from "../userData/UserData"
export default  async function Blogs() {
    const data = await getData();
    return(
        <>
        <h1 className="text-center text-3xl font-bold bg-indigo-400 py-5 text-indigo-50">User_All_Blogs</h1>
         {
          data.map((user , index) => {
           return(
            <>
            <Link href={`/blog/${user.id}`}>
            <div key={index} className="bg-indigo-500 mt-6 py-6 cursor-pointer text-indigo-50 rounded-md mx-4 px-6 hover:bg-indigo-400">
             <p>Name : {user.name}</p>
             <p>Email : {user.email}</p>
            </div>
            </Link>
            </>
             )
          })
         }
        </>
    )
}
