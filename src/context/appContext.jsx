import { createContext, useState } from "react";

// step1 => Create context  

    //  If we want to use appContext in any other page we need to ezport it
    export const appContext=createContext();

//  step 2 => create context provider

    //  Here children represents the elements present inside the the AppContextProvider element 
    //  In main.jsx, the <App/> represents the children
    function AppContextProvider({children})
    {
        const [loading,setloading]=useState(false);
        //Initially the posts has an empty array
        const [posts,setposts]=useState([])
        const [page,setpage]=useState(1);
        const[totalpages,setTotalPages]=useState(null )
    } 