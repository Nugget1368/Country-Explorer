import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState, useRef } from "react";
import { updateScore, setQuizStatusFinished } from "../../features/quiz/quizSlice";
import { setCountry, removeCountry } from "../../features/region/regionSlice";
import { MyLocalStorage } from "../../features/localStorage/storage";
import RestartQuizBtn from "../buttons/RestartQuizBtn";
const QuizList = () => {
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [showNext, setShowNext] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const { country } = useSelector(state => state.region);
    const { questions, userName, region, score } = useSelector(state => state.quiz);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    useEffect(() => {
        if (index > 0) {
            //Remove Country from list to avoid dublicates
            dispatch(removeCountry(country.name.common));
        }
        dispatch(setCountry());
        resetStates();
        inputRef.current?.focus();
    }, [index]);

    const resetStates = () => {
        setAnswer("");
        setShowNext(false);
        setIsCorrect(false);
    }

    const handleClick = () => {
        // Check if answer is correct
        if (answer.toLowerCase().trim() === country.name.common.toLowerCase()) {
            dispatch(updateScore());
            setIsCorrect(true);
        }
        setShowNext(true);
    };

    const nextQuestion = () => {
        if ((index + 1) === questions) {
            MyLocalStorage.saveLeaderboard({ userName, region, score });
            dispatch(setQuizStatusFinished())
        }
        else {
            setIndex(index + 1)
        }
    };

    return (
        <article>
            <header>
                <h3>Quiestion {index + 1}</h3>
                <h4>Which country is this?</h4>
            </header>
            {country &&
                <>
                    <img src={country.flags.png} alt={country.flags.alt} />
                    <div>
                        <label htmlFor="answer">Answer</label>
                        <input ref={inputRef} placeholder="Country" type="text" name="answer" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                    </div>
                    {showNext &&
                        <div className={isCorrect ? "correct green" : "incorrect red"}>
                            {isCorrect ? <h5><strong>Correct</strong></h5> : <h5><strong>Incorrect</strong></h5>}
                            <h6>Correct answer: {country.name.common}</h6>
                        </div>
                    }
                    {showNext ?
                        <button className="btn btn-primary" onClick={nextQuestion}>Next</button>
                        : <button className="btn btn-primary" onClick={handleClick}>Answer</button>
                    }
                    <RestartQuizBtn />
                </>
            }
        </article>
    )
}

export default QuizList