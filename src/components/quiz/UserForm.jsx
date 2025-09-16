import { useDispatch, useSelector } from "react-redux";
import { setUserName, setRegionSelected, setQuizStatusStart } from "../../features/quiz/quizSlice.js";
const UserForm = () => {
    const { regions } = useSelector(state => state.quiz);
    const dispatch = useDispatch();
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
                            <input type="radio" name="region" id={r} value={r} onChange={(e) => dispatch(setRegionSelected(e.target.value))} />
                            <label htmlFor={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</label>
                        </div>
                    )
                })}
            </div>
            <button className="btn" onClick={() => dispatch(setQuizStatusStart())}>Start</button>
        </article>
    )
}

export default UserForm