

import Link from "next/link";

export default function PostList(){
     const posts = [
        {id:1,title:"post 1"},
        {id:2,title:"post 2"},
        {id:3,title:"post 3"},
        {id:4,title:"post 4"}
    ];
    return(
        <ul>
        {posts.map((post)=>(
            <li key={post.id}>
              <Link href={`/app/${post.id}`}> {post.title}</Link>
            </li>
        ))}
        </ul>
    )

}
