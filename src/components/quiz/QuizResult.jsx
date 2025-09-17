import { useSelector } from "react-redux"
const QuizResult = () => {
    const { score, questions } = useSelector(state => state.region);

    const getPercentage = () => {
        return Math.floor((score / questions) * 100) + "%";
    };

    return (
        <section>
            <header>
                <h3>Result</h3>
                <h4>Your score: {score}/{questions}, {getPercentage()}</h4>
            </header>
        </section>
    )
}

export default QuizResult