import { useSelector } from "react-redux"
import Leaderboard from "./leaderboard.jsx";
import ReturnBtn from "../buttons/ReturnBtn.jsx";
const LeaderboardList = () => {
    const { regions } = useSelector(state => state.region);
    return (
        <section>
            <header>
                <h4>Leaderboard</h4>
                <ReturnBtn />
            </header>
            {regions.map(region => {
                return (
                    <article key={region}>
                        <Leaderboard region={region} />
                    </article>
                )
            })}
        </section>
    )
}

export default LeaderboardList