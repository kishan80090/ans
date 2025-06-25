import React, { useState } from "react";
import axios from "axios";
function Prectice() {
    const [ans, setAns] = useState('');
    const baseURL = 'https://kishan80090.github.io/jsondata/products.json';

    const show = (e) => {
        axios.get(baseURL)
            .then((response) => {
                setAns(response.data);
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
    return (
        <div>
            
            <button onClick={show}>Fetch Data</button>
            <br/>
<h1>Question_No: {ans[0]["ques_no"]}</h1>
<pre>
    {JSON.stringify(ans,null,2)}
</pre>
        </div>
            
    );
}

export default Prectice;
