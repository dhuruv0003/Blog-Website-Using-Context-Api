import { useContext } from "react"
import { appContext } from "../context/appContext"

export default function Pagination() {

    const { page , handlePageChange,totalPages} = useContext(appContext)
    return (
        <div className="">

            <div className=" flex justify-evenly">
                {
                    //Previous buttoon tabhi ayega jab page>1 hoga
                    page > 1 &&
                    <button className="border p-1 rounded-lg border-black" onClick={()=>handlePageChange(page-1)}>
                        Previous
                    </button>
                }

                {
                    page < totalPages &&
                    <button className="border p-1 rounded-lg border-black"  onClick={()=>handlePageChange(page+1)}>Next</button>
                }

                <p>
                    page {page} of {totalPages} 
                </p>
            </div>

        </div>

    )
}