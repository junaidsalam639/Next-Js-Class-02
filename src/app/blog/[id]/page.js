import UsersDetail from "@/app/userData/UserDetail";
import UsersPost from "@/app/userData/UserPost";
import Blog_Show from "@/app/component/Blog_Show";
import { Suspense } from "react";

const metadata = async({ params }) => {
    const usersDetail = await UsersDetail(params.id);
    return {
      title: usersDetail.name,
      description: usersDetail.email,
    };
  }
  metadata();

export default async function PostUser({ params }) {
    const usersDetail = await UsersDetail(params.id)
    const usersPost = await UsersPost(params.id)

    const [detail, post] = await Promise.all([usersDetail, usersPost]);
    console.log(detail);
    return (
        <>
          <h1 className="text-center text-3xl font-bold bg-indigo-400 py-5 text-indigo-50">User_All_Blogs_Detail</h1>
            <div className="bmt-5 py-6 cursor-pointer text-indigo-50 rounded-md mx-4 px-6">
                <div className="bg-indigo-500 mt-5 py-6 cursor-pointer text-indigo-50 rounded-md mx-4 px-6">
                <p>Name : {detail.name}</p>
                <p>Email : {detail.email}</p>
                </div>
                <Suspense fallback={<h2 className="text-center text-2xl">loading...</h2>}>
                    <Blog_Show promise={usersPost} />
                </Suspense>
            </div>
        </>
    )
}

