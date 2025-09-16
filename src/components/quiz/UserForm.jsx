import { useDispatch, useSelector } from "react-redux";
import { setUserName, setQuizStatusStart } from "../../features/quiz/quizSlice.js";
import { fetchRegion } from "../../features/region/regionSlice.js";
import { useState } from "react";
const UserForm = () => {
    const { regions } = useSelector(state => state.quiz);
    const [region, setRegion] = useState("");
    const dispatch = useDispatch();

    const startQuiz = () => {
        dispatch(fetchRegion(region));
        dispatch(setQuizStatusStart());
    }

    return (
        <article>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={(e) => dispatch(setUserName(e.target.value))} />
            </div>
            <div>
                <label htmlFor="region">Pick a region</label>
                {regions.map((r) => {
                    return (
                        <div key={r}>
                            <input type="radio" name="region" id={r} value={r} onChange={(e) => setRegion(e.target.value)} />
                            <label htmlFor={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</label>
                        </div>
                    )
                })}
            </div>
            <button className="btn" onClick={() => startQuiz()}>Start</button>
        </article>
    )
}

export default UserForm