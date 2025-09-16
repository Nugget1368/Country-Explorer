import { useState } from "react"

const Quiz = () => {
    const regions = ['europe', 'africa', 'asia', 'america', 'oceania'];
    const [region, setRegion] = useState("");
    const [userName, setUserName] = useState("");
  return (
    <section>
        <header>
            <h2>World Map Quiz</h2>
        </header>
        <article>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="region">Pick a region</label>
                {regions.map((r) =>{
                    return (
                        <div key={r}>
                            <input type="radio" name="region" id={r} value={r} onChange={(e) => setRegion(e.target.value)}/>
                            <label htmlFor={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</label>
                        </div>
                    )
                })}
            </div>
        </article>
    </section>
  )
}

export default Quiz