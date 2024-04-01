import { useContext, useEffect } from "react"
import { appContext } from "../context/appContext"
import Spinner from "./Spinner"

export default function Blogs() {

    // now from app context we can use data easily by using usecontext hook 

    const { loading, posts } = useContext(appContext)


    return (
        <div className="flex flex-col mb-5">
            {
                loading ?
                    (<div className="w-full flex h-screen justify-center items-center "><Spinner /></div>
                    ) :
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
                                    <div key={post.id} className="mb-5 bg-[#faf0ca] rounded-xl p-5">
                                        <div className="bg-[#f4d35e] text-[#003049]">
                                            <p className=" font-bold text-center text-2xl">{post.title}</p>
                                            <p className="text-center ">
                                                By
                                                <span> {post.author}</span> on
                                                <span> {post.category}</span>
                                            </p>
                                            <p className="text-center">Posted on {post.date} </p>
                                        </div>

                                       
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