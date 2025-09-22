import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { MyLocalStorage } from "../../features/localStorage/storage.js";
import LeaderboardList from "./leaderboardList.jsx";
const QuizResult = () => {
    const { score, questions } = useSelector(state => state.region);
    const [percentage, setPercentage] = useState(0);
    const getPercentage = () => {
        setPercentage(Math.floor((score / questions) * 100));
    };

    useEffect(() => {
        getPercentage();
    }, []);

    return (
        <section>
            <article>
                <header>
                    <h2>Result</h2>
                    <h3 className={percentage && percentage > 75 ? "green" : percentage > 50 ? "yellow" : "red"}>Your score: {score}/{questions}, {percentage}%</h3>
                </header>
            </article>
            <header>
                <h3>Leaderboard</h3>
            </header>
            <LeaderboardList />
        </section>
    )
}

export default QuizResult