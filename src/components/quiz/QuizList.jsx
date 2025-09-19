import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { updateScore, setQuizStatusFinished, setCountry, removeCountry } from "../../features/region/regionSlice";
const QuizList = () => {
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [showNext, setShowNext] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const { countries, country, questions } = useSelector(state => state.region);
    const dispatch = useDispatch();

    useEffect(() => {
        !country && dispatch(setCountry());
        setAnswer("");
        setShowNext(false);
        setShowAnswer(false);
        setIsCorrect(false);
        if (index > 0) {
            //Remove Country from list to avoid dublicates
            dispatch(removeCountry(country.name.common));
            dispatch(setCountry());
        }
    }, [index]);

    const handleClick = () => {
        if (answer.toLowerCase().trim() === country.name.common.toLowerCase()) {
            dispatch(updateScore());
            setIsCorrect(true);
        }
        setShowAnswer(true);
        setShowNext(true);
    };

    const nextQuestion = () => index === questions ? dispatch(setQuizStatusFinished()) : setIndex(index + 1);

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
                        <input type="text" name="answer" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                    </div>
                    {showAnswer &&
                        <div className={isCorrect ? "correct green" : "incorrect red"}>
                            {isCorrect ? <h5><strong>Correct</strong></h5> : <h5><strong>Incorrect</strong></h5>}
                            <h6>Correct answer: {country.name.common}</h6>
                        </div>
                    }
                    {showNext ?
                        <button className="btn btn-primary" onClick={nextQuestion}>Next</button>
                        : <button className="btn btn-primary" onClick={handleClick}>Answer</button>
                    }
                </>
            }
        </article>
    )
}

export default QuizList