import UserForm from "../components/quiz/UserForm"
import QuizList from "../components/quiz/QuizList"
import { useSelector } from "react-redux";
const Quiz = () => {
    const { quizStatus } = useSelector(state => state.quiz);
    const { status } = useSelector(state => state.region);
    /* UserForm behöver ha en funktion som triggar nästa steg */

    return (
        <section>
            <header>
                <h2>World Map Quiz</h2>
            </header>
            {
                quizStatus === "idle" ? <UserForm />
                    : quizStatus === "start" ?
                    status === "succeeded" && <QuizList />
                        : quizStatus === "finished" ? <h3>Finished</h3>
                            : null
            }

        </section>
    )
}

export default Quiz