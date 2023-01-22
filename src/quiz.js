import React, { useState } from 'react'
import './App.css';



export default function Quiz(props) {

    const [result, setresult] = useState(false)
    const [score, setscore] = useState(0)

    let data = props.data
    let num = props.length

    let i = props.index
    let ans = data.incorrect_answers

    let nextqus = props.nextqus

    let corrans = data.correct_answer


  

    function Atemp(e) {



        if (i < num) {

            nextqus()

            if (e.target.innerText == corrans) {

                setscore(score + 1)
            }


        }


        if (i >= num) {

            setresult(true)

        }


    }





    return (
        <>


            {!result &&
                <div className='quiz-div'>



                    <div style={{ display: "inline-block", width: "30%", height: "10%", color: "white" }}>
                        <h1>Question {i}/{num}</h1><br />
                        <h3>{data.question}</h3>
                    </div>






                    <div style={{ display: "inline-block", marginLeft: "8%", width: "50%", height: "50%" }}  >



                        <div style={{ width: "100%", height: "100%" }}>



                            {
                                ans.map((ans) => {
                                    return (

                                        <div className='ans-div' onClick={(e) => Atemp(e)} ><h2>{ans}</h2></div>

                                    )
                                })


                            }
                            <div className='ans-div' onClick={(e) => Atemp(e)}><h2>{data.correct_answer}</h2></div>

                        </div>

                    </div>

                </div>

            }




            {result &&


                <div className='quiz-div' style={{ color: "white", fontSize: "30px" }}><h1 style={{ marginTop: "30%" }}>You scored {score} out of {num}</h1></div>

            }



        </>
    )
}
