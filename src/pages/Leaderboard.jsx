import LeaderboardList from "../components/quiz/leaderboardList"
import ReturnBtn from "../components/buttons/ReturnBtn"

const Leaderboard = () => {
  return (
    <section>
        <header>
            <h2>Leaderboard</h2>
            <ReturnBtn />
        </header>
        <LeaderboardList />
    </section>
)
}

export default Leaderboard