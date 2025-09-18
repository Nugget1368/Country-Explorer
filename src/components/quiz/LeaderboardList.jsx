import { useSelector } from "react-redux"
import Leaderboard from "./leaderboard.jsx";
const LeaderboardList = () => {
    const { regions } = useSelector(state => state.region);
    return (
        <section>
            <header>
                <h4>Leaderboard</h4>
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