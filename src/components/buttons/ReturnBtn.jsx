import { useNavigate } from "react-router-dom"
import styles from './ReturnBtn.module.css'
const ReturnBtn = () => {
    let navigate = useNavigate()
    return (
        <>
            <button className={styles.btn} onClick={() => navigate(-1)}><span className="material-symbols-outlined">
                undo
            </span>Return</button>

        </>
    )
}

export default ReturnBtn