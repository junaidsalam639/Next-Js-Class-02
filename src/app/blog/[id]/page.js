import UsersDetail from "@/app/userData/UserDetail";
import UsersPost from "@/app/userData/UserPost";
import Blog_Show from "@/app/component/Blog_Show";
import { Suspense } from "react";

export async function generateMetadata({ params }){
  const usersDetail = await UsersDetail(params.id);
  return{
    title : usersDetail.name,
    description : usersDetail.email,
  }
}
//   https://jsonplaceholder.typicode.com/posts?userId=9
// https://jsonplaceholder.typicode.com/users/5
// https://dummyjson.com/products/search?q=laptop
export default async function PostUser({ params }) {
  const usersDetail = await UsersDetail(params.id)
    const usersPost = await UsersPost(params.id)

    const [detail, post] = await Promise.all([usersDetail, usersPost]);
    return (
        <>
        <div className="bg-indigo-800">
          <h1 className="text-center text-3xl font-bold bg-indigo-800 py-5 text-indigo-50 border-b-4">User_All_Blogs_Detail</h1>
            <div className="bmt-5 py-6 cursor-pointer text-indigo-50 rounded-md px-6">
                <div className="bg-indigo-700 mt-5 py-6 cursor-pointer text-indigo-50 rounded-md mx-4 px-6 border-b-4">
                <p>Name : {detail.name}</p>
                <p>Email : {detail.email}</ p>
                </div>
                <Suspense fallback={<h2 className="text-center text-2xl">loading...</h2>}>
                    <Blog_Show promise={usersPost} />
                </Suspense>
            </div>
        </div>
        </>
    )
}

