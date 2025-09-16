import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { updateScore, setQuizStatusFinished } from "../../features/quiz/quizSlice";
const QuizList = () => {
    const [index, setIndex] = useState(1);
    const [answer, setAnswer] = useState("");
    const { countries } = useSelector(state => state.region);
    const dispatch = useDispatch();
    const [randomIndex, setRandomIndex] = useState(countries.length > 0 ? Math.floor(Math.random() * countries.length) : 1);
    
    const handleClick = () => {
        if (answer.toLocaleLowerCase() === countries[randomIndex].name.common.toLocaleLowerCase()){
            dispatch(updateScore());
        }
        setRandomIndex(Math.floor(Math.random() * countries.length));
        setIndex(index + 1);
        if (index === 5) {
            dispatch(setQuizStatusFinished());
        }
    };


    return (
        <article>
            <header>
                <h3>Quiestion {index}</h3>
                <h4>Which country is this?</h4>
            </header>
            {countries &&
                <>
                    <img src={countries[randomIndex].flags.png} alt={countries[randomIndex].flags.alt} />
                    <div>
                        <label htmlFor="answer">Answer</label>
                        <input type="text" name="answer" id="answer" onChange={(e) => setAnswer(e.target.value)} />
                    </div>
                    <button className="btn" onClick={handleClick}>Next</button>
                </>
            }
        </article>
    )
}

export default QuizList