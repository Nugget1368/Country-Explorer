import { useSelector } from "react-redux";
import UserForm from "../components/quiz/UserForm"
import QuizList from "../components/quiz/QuizList"
import QuizResult from "../components/quiz/QuizResult";
import LeaderboardList from "../components/quiz/leaderboardList";
import style from "./quiz.module.css"
const Quiz = () => {
    const { quizStatus } = useSelector(state => state.region);
    const { status } = useSelector(state => state.region);
    /* UserForm behöver ha en funktion som triggar nästa steg */

    return (
        <section className={style.article}>
            <header>
                <h2>World Map Quiz</h2>
            </header>
            {
                quizStatus === "idle" ?
                    <>
                        <UserForm />
                        <LeaderboardList />
                    </>
                    : quizStatus === "start" ?
                        status === "succeeded" && <QuizList />
                        : quizStatus === "finished" ? <QuizResult />
                            : null
            }

        </section>
    )
}

export default Quiz