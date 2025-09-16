import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section>
            <header>
                <h2>Home</h2>
            </header>
            <article>
                <nav>
                    {/* <Link>Insert Link to pages</Link> */}
                    {/* <Link className="btn" to="/countries">Study countries</Link> */}
                    <Link to="/countries"><p>Study countries</p></Link>
                    <Link to="/collection"><p>My Collection</p></Link>
                </nav>
            </article>
        </section>
    )
}

export default Home