import { useContext, useEffect } from "react"
import { appContext } from "../context/appContext"
import Spinner from "./Spinner"

export default function Blogs() {

    // now from app context we can use data easily by using usecontext hook 

    const { loading, posts } = useContext(appContext)


    return (
        <div className="">
            {
                loading ?
                    (<Spinner />) :
                    (
                        posts.length === 0 ?
                            (
                                <div >
                                    <p>No Post Found</p>
                                </div>
                            ) :
                            (
                                //  Agar length 0 nhi hai toh har post ke liye card banado
                                posts.map((post) => (
                                    <div key={post.id} className="">
                                        <p className=" font-bold">{post.title}</p>
                                        <p>
                                            By 
                                            <span> {post.author}</span> on
                                            <span> {post.category}</span>
                                        </p>

                                        <p>Posted on {post.date} </p>
                                        <p>{post.content}</p>
                                        <div >
                                            {
                                                post.tags.map((tag, index) => {
                                                    return <span key={index}>{`  #${tag}`}</span>
                                                })
                                            }
                                        </div>

                                    </div>
                                ))
                            )
                    )
            }

        </div>
    )
}