import React, { useState } from "react";
import './Quesdesign.css';
import axios from "axios";

function Ques() {
    const [question, setQuestion] = useState([]);
    const [que, setQue] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    let correctanswer = "";

    const show = () => {
        const baseURL = 'https://kishan80090.github.io/jsondata/products.json';

        axios.get(baseURL).then((response) => {
            setQuestion(response.data);
            setQue(0);
            setScore(0);
            setQuizCompleted(false);

            const options = ["a", "b", "c", "d", "e"];
            options.forEach(id => {
                const opt = document.getElementById(id);
                if (opt) opt.checked = false;
            });

            const nextBtn = document.getElementById("nextBtn");
            if (nextBtn) nextBtn.disabled = false;
        })
        .catch(error => {
            console.log("Error", error);
        });
    };

    // ✅ Handle answer selection and scoring
    const handleNext = (e) => {
        const selected = document.querySelector('input[name="r"]:checked');
        if (!selected || selected.id === "e") {
            alert("Please select an option");
            return;
        }

        let givenanswer = test();
        correctanswer = question[que]["correct"];

        if (givenanswer === correctanswer) {
            setScore(prevScore => prevScore + 1);
        }

        if (que < question.length - 1) {
            setQue(que + 1);
            document.getElementById("e").checked = true;
        } else {
            alert("🎉 Question Finished!\nYour Score: "
                + (score + (givenanswer === correctanswer ? 1 : 0))
                + "/" + question.length);
            e.target.disabled = true;
            setQuizCompleted(true);
        }
    };

    const test = () => {
        if (document.getElementById("a").checked) return "a";
        if (document.getElementById("b").checked) return "b";
        if (document.getElementById("c").checked) return "c";
        if (document.getElementById("d").checked) return "d";
        return false;
    };

    // ✅ Restart the quiz
    const restartQuiz = () => {
        setQue(0);
        setScore(0);
        setQuizCompleted(false);

        const options = ["a", "b", "c", "d", "e"];
        options.forEach(id => {
            const opt = document.getElementById(id);
            if (opt) opt.checked = false;
        });

        const nextBtn = document.getElementById("nextBtn");
        if (nextBtn) nextBtn.disabled = false;
    };

    return (
        <div className="col">
            
            <button onClick={show} className="col2"><b><i>Start Quiz</i></b></button>

            {question.length > 0 &&
                <div className="options">
                    <h1 className="que">Question No: {question[que]["ques_no"]}</h1>
                    <h3 className="ans">Question: {question[que]["question"]}</h3>
                    <h4 className="score">✅ Your Score: {score}/{question.length}</h4>

                    <p>
                        <label><input type='radio' name="r" value="a" id="a" />
                            <b>A: {question[que]["a"]}</b></label>
                    </p>
                    <p>
                        <label><input type='radio' name="r" value="b" id="b" />
                            <b>B: {question[que]["b"]}</b></label>
                    </p>
                    <p>
                        <label><input type='radio' name="r" value="c" id="c" />
                            <b>C: {question[que]["c"]}</b></label>
                    </p>
                    <p>
                        <label><input type='radio' name="r" value="d" id="d" />
                            <b>D: {question[que]["d"]}</b></label>
                    </p>

                    <p>
                        <input style={{ display: "none" }} type='radio' name="r" value="e" id="e" defaultChecked />
                    </p>

                    <button onClick={handleNext} className="col1" id="nextBtn">Next</button>
                    {question[que]["image"] && (
                        <img
                            src={question[que]["image"]}
                            alt={`Question ${que + 1}`}
                            className="im"/>
                    )}

                    {quizCompleted && (
                        <button className="col3" onClick={restartQuiz}>Restart Quiz</button>
                    )}

                    
                    <a className="linkedin-name" href="https://github.com/kishan80090/ans/tree/master/src/component" target="_blank" rel="noopener noreferrer">Visit My GitHub</a>
                    <a className="linkedin-name1" href="https://www.linkedin.com/in/kishan-kumar-kannaujiya-858465350" target="_blank" rel="noopener noreferrer">Visit My Linkedin</a>
                </div>
            }
        </div>
    );
}

export default Ques;
