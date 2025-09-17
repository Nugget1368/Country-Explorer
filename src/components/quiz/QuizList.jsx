import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { updateScore, setQuizStatusFinished, setCountry, removeCountry } from "../../features/region/regionSlice";
const QuizList = () => {
    const [index, setIndex] = useState(1);
    const [answer, setAnswer] = useState("");
    const { countries, country, score } = useSelector(state => state.region);
    const dispatch = useDispatch();

    useEffect(() => {
        !country && dispatch(setCountry());
    }, []);
    
    const handleClick = () => {
        answer.toLocaleLowerCase() === country.name.common.toLocaleLowerCase() && dispatch(updateScore());
        setIndex(index + 1);
        if (index < 4) {
            setAnswer("");
            dispatch(removeCountry(country.name.common));
            dispatch(setCountry());
        }
        else {
            dispatch(setQuizStatusFinished());
            console.log("Score: " + score);
        }
    };


    return (
        <article>
            <header>
                <h3>Quiestion {index}</h3>
                <h4>Which country is this?</h4>
            </header>
            {countries && country &&
                <>
                    <img src={country.flags.png} alt={country.flags.alt} />
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