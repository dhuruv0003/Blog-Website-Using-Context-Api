import axios from "axios";
import { createContext, useState } from "react";
import { apiUrl } from "../apiUrl";

// step1 => Create context  

//  If we want to use appContext in any other page we need to ezport it
export const appContext = createContext();

//  step 2 => create context provider

//  Here children represents the elements present inside the the AppContextProvider element 
//  In main.jsx, the <App/> represents the children
export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    //Initially the posts has an empty array
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null)

    // now provide all of these above values to the to the consumer, by first storing it into an object 
// by default setpage 1
    async function fetchData(page=1){

        setLoading(true);
        let url=`${apiUrl}?page=${page}`
        try {
            const {data} = await axios.get(url)
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            
        } catch (error) {
            console.log("error");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    } 

    function handlePageChange(page){
        setPage(page);
        fetchData(page);
    }    

    const value = {
        loading, setLoading, posts, setPosts, page, setPage, totalPages, setTotalPages,fetchData,handlePageChange
    };

    // in main.jsx the children get the value i.e the app component gets all the values of value 

    return <appContext.Provider value={value}>
        {children}
    </appContext.Provider>;


} 