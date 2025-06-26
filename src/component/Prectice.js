import React,{useState} from "react";
import axios from "axios";
function Prectise () {
    const [set,setSet]= useState("");
    const show=(e)=>{
        const baseURL=`https://kishan80090.github.io/jsondata/products.json`;
        axios.get(baseURL).then((response)=>{
            setSet(response.data);

        })
        .catch(error=>{
            console.log("error",error);

        });
    }
    return(
        <div>
            <button onClick={show}>show</button>
            { set &&
            <pre>
                {JSON.stringify(set,null,2)};
            </pre>
             }
        </div>
    )
    

};
export default Prectise;