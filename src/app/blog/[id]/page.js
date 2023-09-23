import UsersDetail from "@/app/userData/UserDetail";
import UsersPost from "@/app/userData/UserPost";

export default async function id ({params}) {
    const usersDetail = await UsersDetail(params.id)     
    const usersPost = await UsersPost(params.id)     
    console.log(usersDetail);
}
