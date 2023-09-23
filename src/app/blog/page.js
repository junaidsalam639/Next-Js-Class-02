import Link from "next/link";
import getData from "../userData/UserData"
export default  async function Blogs() {
    const data = await getData();
    return(
        <>
         {
          data.map((user , index) => {
           return(
            <>
            <Link href={`/blog/${user.id}`}>
            <div key={index} className="bg-indigo-500 mt-5 py-6 cursor-pointer text-indigo-50 rounded-md mx-4 px-6">
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
