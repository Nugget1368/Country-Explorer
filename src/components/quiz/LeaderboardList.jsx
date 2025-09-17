import { useSelector } from "react-redux"
import Leaderboard from "./leaderboard.jsx";
const LeaderboardList = () => {
    const { regions } = useSelector(state => state.region);
    return (
        <section>
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