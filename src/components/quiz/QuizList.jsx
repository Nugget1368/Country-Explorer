import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { updateScore, setQuizStatusFinished, setCountry, removeCountry } from "../../features/region/regionSlice";
const QuizList = () => {
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [showNext, setShowNext] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const { countries, country, score } = useSelector(state => state.region);
    const dispatch = useDispatch();

    useEffect(() => {
        !country && dispatch(setCountry());
        setShowNext(false);
        setShowAnswer(false);
        setAnswer("");
        if (index > 0) {
            dispatch(removeCountry(country.name.common));
            dispatch(setCountry());
        }
    }, [index]);

    const handleClick = () => {
        answer.toLocaleLowerCase() === country.name.common.toLocaleLowerCase() && dispatch(updateScore());
        correctAnswer();
        setShowNext(true);
    };

    const nextQuestion = () => index === 5 ? dispatch(setQuizStatusFinished()) : setIndex(index + 1);


    const correctAnswer = () => {
        dispatch(updateScore());
        setShowAnswer(true);
    }


    return (
        <article>
            <header>
                <h3>Quiestion {index + 1}</h3>
                <h4>Which country is this?</h4>
            </header>
            {countries && country &&
                <>
                    <img src={country.flags.png} alt={country.flags.alt} />
                    <div>
                        <label htmlFor="answer">Answer</label>
                        <input type="text" name="answer" id="answer" onChange={(e) => setAnswer(e.target.value)} />
                    </div>
                    {showAnswer &&
                        <div className={country.name.common === answer ? "correct" : "incorrect"}>
                            <h4>Correct answer: {country.name.common}</h4>
                        </div>
                    }
                    {showNext ?
                        <button className="btn" onClick={nextQuestion}>Next</button>
                        : <button className="btn" onClick={handleClick}>Answer</button>
                    }
                </>
            }
        </article>
    )
}

export default QuizList