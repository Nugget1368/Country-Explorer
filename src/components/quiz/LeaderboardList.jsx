import { useSelector } from "react-redux"
import Leaderboard from "./leaderboard.jsx";
import ReturnBtn from "../buttons/ReturnBtn.jsx";
const LeaderboardList = () => {
    const { regions } = useSelector(state => state.region);
    const { region } = useSelector(state => state.quiz);
    return (
        <section>
            {regions.map(r => {
                return (
                    <article key={r} className={r === region ? "correct" : ""}>
                        <Leaderboard region={r} />
                    </article>
                )
            })}
        </section>
    )
}

export default LeaderboardList