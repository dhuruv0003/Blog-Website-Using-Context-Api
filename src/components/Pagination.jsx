import { useContext } from "react"
import { appContext } from "../context/appContext"

export default function Pagination() {

    const { page, handlePageChange, totalPages } = useContext(appContext)
    return (
        <div className="p-2 rounded-s-full rounded-r-full w- bg-[#fffcdd] mb-4">

            <div className=" flex justify-evenly items-center">
                {
                    //Previous buttoon tabhi ayega jab page>1 hoga
                    page > 1 &&
                    <button className="p-1 rounded-lg font-bold text-[#e7e0c4] bg-[#003049]" onClick={() => handlePageChange(page - 1)}>
                        Previous
                    </button>
                }

                <p>
                    Page {page} of {totalPages}
                </p>

                {
                    page < totalPages &&
                    <button className="px-3 py-1 rounded-lg font-bold text-[#e7e0c4] bg-[#003049]" onClick={() => handlePageChange(page + 1)}>Next</button>
                }


            </div>

        </div>

    )
}