import React, { useState } from "react";
import './Quesdesign.css';
import axios from "axios";
function Ques() {
    const [question, setQuestion] = useState([]);
    const [que, setQue] = useState('0');
    // let que = 0;
    const show = (e) => {
        const baseURL = 'https://kishan80090.github.io/jsondata/products.json';

        axios.get(baseURL).then((response) => {

            setQuestion(response.data);
            setQue(0);
        })
            .catch(error => {
                console.log("Error", error);
            });
    };
    const handleNext = (e) => {
        if (que < question.length - 1) 
            {
            setQue(que + 1);
        }
        else {
            alert("Question Finished");
        }
    };
        const  handleb=()=>{
            document.getElementById("e").checked=true;
        }
    return (
        <div className="col" >
            <button onClick={show}  className="col2" >Start Quize</button>
            {question.length > 0 &&
                <div className="options" >
                    
                    <h1 className="que">Question_No : {question[que]["ques_no"]}</h1>
                    <h2 className="ans" >Question : {question[que]["question"]}</h2>
                
                  <p>
  <input type='radio' name="r" value="a" id="a" />
  <b>A: {question[que]["a"]}</b>
</p>

<p>
  <input type='radio' name="r" value="b" id="b" />
  <b>B: {question[que]["b"]}</b>
</p>

<p> 
  <input type='radio' name="r" value="c" id="c" />
  <b>C: {question[que]["c"]}</b>
</p>

<p>
  <input type='radio' name="r" value="d" id="d" />
  <b>D: {question[que]["d"]}</b>
</p>

<p>
  <input style={{display:"none"}} type='radio' name="r" value="e" id="e" />
</p>

<button onClick={()=>{handleb();handleNext();}} className="col1" >Next</button>

<input className="im" type="image" src="pic/c1.jpg"/>

                </div>
 }
            
       </div>

    )   
}
export default Ques;