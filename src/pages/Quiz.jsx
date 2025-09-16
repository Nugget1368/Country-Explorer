const Quiz = () => {
    const regions = ['europe', 'africa', 'asia', 'america', 'oceania'];

  return (
    <section>
        <header>
            <h2>World Map Quiz</h2>
        </header>
        <article>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="region">Pick a region</label>
                {regions.map((region) =>{
                    return (
                        <div key={region}>
                            <input type="radio" name="region" id={region} value={region} />
                            <label htmlFor={region}>{region.charAt(0).toUpperCase() + region.slice(1)}</label>
                        </div>
                    )
                })}
            </div>
        </article>
    </section>
  )
}

export default Quiz