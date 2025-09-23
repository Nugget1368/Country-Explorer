import { useSelector } from "react-redux";
import UserForm from "../components/quiz/UserForm"
import QuizList from "../components/quiz/QuizList"
import QuizResult from "../components/quiz/QuizResult";
import style from "./quiz.module.css"
import ReturnBtn from "../components/buttons/ReturnBtn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuizStatusIdle, resetStates as resetStatesQuiz } from "../features/quiz/quizSlice";
import { resetStates as resetStatesRegion } from "../features/region/regionSlice";
const Quiz = () => {
    const { quizStatus } = useSelector(state => state.quiz);
    const { status } = useSelector(state => state.region);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(setQuizStatusIdle())
        return () => {
            dispatch(resetStatesQuiz());
            dispatch(resetStatesRegion());
        }
    }, []);

    return (
        <section className={style.article}>
            <header>
                {quizStatus === "idle" &&
                    <h2>World Map Quiz</h2>
                }
                <ReturnBtn />
            </header>
            {
                quizStatus === "idle" ? <UserForm />
                    : quizStatus === "start" ?
                        status === "succeeded" && <QuizList />
                        : quizStatus === "finished" ? <QuizResult />
                            : null
            }

        </section>
    )
}

export default Quiz