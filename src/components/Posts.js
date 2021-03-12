import { useState } from "react"

const Posts = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data => data.json())
            .then(apiPosts => setPosts(apiPosts))
    }

    return (
        <div>
            <button onClick={fetchPosts}>Fetch Posts</button>
            {posts.map(post => {
                return (
                    <div key={post.title}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts