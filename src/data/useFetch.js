import { useEffect, useState } from "react";
import PRODUCTS from "./data.js";


const useFetch=()=>{

const [data,setdata]=useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(null);


useEffect(()=>{


setTimeout(()=>{

    try{

        setdata(PRODUCTS);
        setLoading(false)
         
    }catch(err){

       setError("Failed to fetch "+err.messege); 
       setLoading(false);
    }
},800);

}, []);

return{data,loading,error};
}

export default useFetch;


