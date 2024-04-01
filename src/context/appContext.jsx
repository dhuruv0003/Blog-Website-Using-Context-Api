import axios from "axios";
import { createContext, useState } from "react";
import { apiUrl } from "../apiUrl";

// step1 => Create context  

//  If we want to use appContext in any other page we need to ezport it
export const appContext = createContext();

//  step 2 => create context provider

//  Here children represents the elements present inside the the AppContextProvider element 
//  In main.jsx, the <App/> represents the children
function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    //Initially the posts has an empty array
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null)

    // now provide all of these above values to the to the consumer, by first storing it into an object 

    async function fetchData(page=1){

        setLoading(true);
        let url=`${apiUrl}?page=${page}`
        try {
            const result = await axios.get(url)
        } catch (error) {
            console.log("error");
        }
    } 


    const value = {
        loading, setLoading, posts, setPosts, page, setPage, totalPages, setTotalPages
    };

    // in main.jsx the children get the value i.e the app component gets all the values of value 

    return <AppContextProvider value={value}>
        {children}
    </AppContextProvider>


} 