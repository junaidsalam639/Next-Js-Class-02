import UsersDetail from "@/app/userData/UserDetail";
import UsersPost from "@/app/userData/UserPost";
import Blog_Show from "@/app/component/Blog_Show";
import { Suspense } from "react";


export async function mataData({ params }){
    const usersDetail = UsersDetail(params.id);
    return{
        title : usersDetail.name,
        description : usersDetail.email,
    }
}

export default async function PostUser({ params }) {
    const usersDetail = await UsersDetail(params.id)
    const usersPost = await UsersPost(params.id)

    const [detail, post] = await Promise.all([usersDetail, usersPost]);
    console.log(detail);
    return (
        <>
            <div className="bg-indigo-500 mt-5 py-6 cursor-pointer text-indigo-50 rounded-md mx-4 px-6">
                <p>Name : {detail.name}</p>
                <p>Email : {detail.email}</p>
                <Suspense fallback={<h2 className="text-center">loading...</h2>}>
                    <Blog_Show promise={usersPost} />
                </Suspense>
            </div>
        </>
    )
}
