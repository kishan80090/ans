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

    return (
        <div>
            <button onClick={show}>Start Quize</button>
            {question.length > 0 &&
                <div>
                    <h1>Question_No : {question[que]["ques_no"]}</h1>
                    <h2>Question : {question[que]["question"]}</h2>
                     <p>
  <input type='radio' name="r"  /><b>A: {question[que]["a"]}</b></p>

<p><input type='radio' name="r" /><b>B: {question[que]["b"]}</b></p>

<p><input type='radio' name="r"/><b>C: {question[que]["c"]}</b></p>

<p><input type='radio' name="r" /><b>D: {question[que]["d"]}</b></p>


                    

                </div>
            }
            <button onClick={handleNext}>Next</button>

        </div>
    )
}
export default Ques;