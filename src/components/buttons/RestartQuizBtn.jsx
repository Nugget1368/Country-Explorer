import styles from './ReturnBtn.module.css'
import { setQuizStatusIdle } from "../../features/region/regionSlice.js"
import { useDispatch } from "react-redux";

const RestartQuizBtn = () => {
    let dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setQuizStatusIdle())
    }
    return (
        <button className={styles.btn} onClick={() => handleClick()}><span className="material-symbols-outlined">
            replay
        </span>Restart</button>
    )
}

export default RestartQuizBtn