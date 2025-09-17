import { useEffect } from "react";
import { useSelector } from "react-redux"
import { MyLocalStorage } from "../../features/localStorage/storage.js";
import LeaderboardList from "./leaderboardList.jsx";
const QuizResult = () => {
    const { userName, score, region, questions } = useSelector(state => state.region);

    const getPercentage = () => {
        return Math.floor((score / questions) * 100) + "%";
    };

    useEffect(() => {
        // Save to localStorage
        MyLocalStorage.saveLeaderboard({ userName, region, score });
    }, []);

    return (
        <section>
            <header>
                <h3>Result</h3>
                <h4>Your score: {score}/{questions}, {getPercentage()}</h4>
            </header>
            <article>
                <LeaderboardList />
            </article>
        </section>
    )
}

export default QuizResult