const Blog_Show = async ({ promise }) => {
    const wait = await promise
    return (
        <div>
            {
                wait.map((user, index) => {
                    return (
                        <div key={index} className="bg-indigo-700 mt-5 py-6 cursor-pointer text-indigo-50 rounded-md mx-4 px-6 hover:bg-indigo-400 shadow-md border-b-4">
                            <p>Title : {user.title}</p>
                            <p>Description : {user.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blog_Show
