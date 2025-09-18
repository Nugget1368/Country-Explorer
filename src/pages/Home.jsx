import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
    return (
        <section className={styles.article}>
            <header>
                <h2>Home</h2>
            </header>
            <article>
                <nav>
                    {/* <Link>Insert Link to pages</Link> */}
                    {/* <Link className="btn" to="/countries">Study countries</Link> */}
                    <Link className='btn btn-primary' to="/countries"><p>Study countries</p></Link>
                    <Link className='btn btn-primary' to="/collection"><p>My Collection</p></Link>
                    <Link className='btn btn-primary' to="/quiz"><p>Quiz</p></Link>
                </nav>
            </article>
        </section>
    )
}

export default Home