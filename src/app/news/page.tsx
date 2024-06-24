import Link from "next/link"

export default function NewsList(){
    const news = [
        {id:1,title:"news one" , content :"content one"},
        {id:2,title:"news two" , content :"content two"},
        {id:3,title:"news three" , content :"content three"},
        {id:4,title:"news foure" , content :"content foure"}

    ]
    
    return(
        <div>
            <h1>News:</h1>
            <ul>
                {news.map((item)=>(
                    <li key={item.id}>
                       <Link href={`/news/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}