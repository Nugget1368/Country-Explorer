import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { MyLocalStorage } from '../features/localStorage/storage'

const Home = () => {
    return (
        <section className={styles.article}>
            <header>
                <h2>Home</h2>
            </header>
            <article>
                <nav>
                    <Link className='btn btn-primary' to="/country-explorer/countries"><p>Study countries</p></Link>
                    <Link className='btn btn-primary' to="/country-explorer/collection"><p>My Collection</p></Link>
                    <Link className='btn btn-primary' to="/country-explorer/quiz"><p>Quiz</p></Link>
                    <Link className='btn btn-primary' to="/country-explorer/leaderboard"><p>Leaderboard</p></Link>
                </nav>
            </article>
        </section>
    )
}

export default Home