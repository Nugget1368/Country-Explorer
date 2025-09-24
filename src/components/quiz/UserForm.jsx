import { useDispatch, useSelector } from "react-redux";
import { fetchRegion } from "../../features/region/regionSlice.js";
import { setUserName, setQuizStatusStart, setSelectedRegion, resetPlayer } from "../../features/quiz/quizSlice.js";
import { useEffect, useState } from "react";
const UserForm = () => {
    const { regions } = useSelector(state => state.region);
    const [region, setRegion] = useState("");
    const [name, setName] = useState("");
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetPlayer());
        setName("");
        setRegion("");
        setShowError(false);
        
    }, []);

    const startQuiz = () => {
        if (name !== "" && region !== "") {
            dispatch(setSelectedRegion(region));
            dispatch(setUserName(name));
            dispatch(fetchRegion(region));
            dispatch(setQuizStatusStart());
        }
        else {
            setShowError(true);
        }
    }

    return (
        <article>
            <div>
                <label htmlFor="name"><strong>Name</strong></label>
                <input placeholder="Player name" autoFocus className={showError ? "incorrect" : ""} type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="region"><strong>Pick a region</strong></label>
                <fieldset className={showError ? "incorrect" : ""}>
                    {regions.map((r) => {
                        return (
                            <div key={r}>
                                <input type="radio" name="region" id={r} value={r} onChange={(e) => setRegion(e.target.value)} />
                                <label className="" htmlFor={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</label>
                            </div>
                        )
                    })}
                </fieldset>
                {showError &&
                    <p className="red"><strong>Please enter a username and select a region</strong></p>
                }
            </div>
            <button className="btn btn-primary" onClick={() => startQuiz()}>Start</button>
        </article>
    )
}

export default UserForm