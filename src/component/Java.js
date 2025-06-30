import React, { useState, useEffect } from "react";
import './Java.css';
import axios from "axios";

function Java() {
    const [question, setQuestion] = useState([]);
    const [que, setQue] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [showFirework, setShowFirework] = useState(false);

    useEffect(() => {
        show(); 
    }, []);

    const show = () => {
        const baseURL = 'https://kishan80090.github.io/jsondata1/data.json';
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
        }).catch(error => {
            console.log("Error", error);
        });
    };

    const handleNext = (e) => {
        store();
        const selected = document.querySelector('input[name="r"]:checked');
        if (!selected || selected.id === "e") {
            alert("Please select an option");
            return;
        }

        let givenanswer = test();
        let correctanswer = question[que]["correct"];
        question[que]["answer"] = givenanswer;

        if (givenanswer === correctanswer) {
            setScore(prevScore => prevScore + 1);
            setShowFirework(true);
            setTimeout(() => setShowFirework(false), 2000);
        }

        if (que < question.length - 1) {
            setQue(que + 1);
            document.getElementById("e").checked = true;
        } else {
            alert("Question Finished");
            e.target.disabled = true;
            setQuizCompleted(true);
        }
    };

    const store = () => {
        localStorage.setItem("questions", JSON.stringify(question));
    };

    const test = () => {
        if (document.getElementById("a").checked) return "a";
        if (document.getElementById("b").checked) return "b";
        if (document.getElementById("c").checked) return "c";
        if (document.getElementById("d").checked) return "d";
        return false;
    };

    const restartQuiz = () => {
        show();
    };

    return (
        <div className="col">
            {question.length > 0 && !quizCompleted && (
                <div className="options">
                    <h1 className="que">Question No: {question[que]["ques_no"]}</h1>
                    <h3 className="ans">✯ Question: {question[que]["question"]}</h3>
                    <h4 className="score">🏆🎯 Your Score: {score}/{question.length}</h4>

                    <p><label><input type='radio' name="r" value="a" id="a" /> <b>A: {question[que]["a"]}</b></label></p>
                    <p><label><input type='radio' name="r" value="b" id="b" /> <b>B: {question[que]["b"]}</b></label></p>
                    <p><label><input type='radio' name="r" value="c" id="c" /> <b>C: {question[que]["c"]}</b></label></p>
                    <p><label><input type='radio' name="r" value="d" id="d" /> <b>D: {question[que]["d"]}</b></label></p>
                    <p><input style={{ display: "none" }} type='radio' name="r" value="e" id="e" defaultChecked /></p>

                    <button onClick={handleNext} className="col1" id="nextBtn">Next</button>
                    
                    {showFirework && (
                        <div className="firework-container">
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="fire-spark"  
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        backgroundColor: `hsl(${Math.random() * 360}, 100%, 60%)`,
                                        animationDelay: `${Math.random() * 0.10}s`,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {quizCompleted && (
                <>
                    <br />
                    <table border="1" className="summary-table">
                        <thead>
                            <tr>
                                <th className="quecolor" >Q. No</th>
                                <th className="quecolor" >Question</th>
                                <th className="quecolor" >Your Answer</th>
                                <th className="quecolor" >Correct Answer</th>
                                <th className="quecolor" >Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {question.map((q, index) => (
                                <tr key={index}>
                                    <td>{q.ques_no}</td>
                                    <td>{q.question}</td>
                                    <td>{q.answer ? q[q.answer] : "Not Answered"}</td>
                                    <td>{q[q.correct]}</td>
                                    <td style={{ color: q.answer === q.correct ? "green" : "red" }}>
                                        {q.answer === q.correct ? "✔ Correct" : "✘ Wrong"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="col3" onClick={restartQuiz}>Restart Quiz ⟲</button>
                </>
            )}

            {question.length > 0 && (
                <>
                    <a className="linkedin-name" href="https://github.com/kishan80090/ans/tree/master/src/component" target="_blank" rel="noopener noreferrer">
                        <img src="pic/github.jpg" alt="GitHub" /> Visit My GitHub ✫
                    </a>
                    <a className="linkedin-name1" href="https://www.linkedin.com/in/kishan-kumar-kannaujiya-858465350" target="_blank" rel="noopener noreferrer">
                        ✫ Visit My Linkedin <img className="linked" src="pic/linkedin.jpg" alt="LinkedIn" />
                    </a>
                    <p className="linkedin-name2">
                        <img className="padd" src="pic/kishan.jpg" alt="Kishan" />Kishan Kumar Kannaujiya
                    </p>
                </>
            )}
        </div>
    );
}

export default Java;
