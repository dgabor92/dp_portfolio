export function AboutSection({ content, portrait }) {
  return (
    <section id="about" className="section reveal">
      <div className="section__inner section__inner--about">
        <header className="section__heading">
          <h2>{content.aboutMe.title}</h2>
        </header>

        <div className="about__layout">
          <div className="about__visual">
            <img className="about__image" src={portrait} alt={content.portfolioName} />
          </div>

          <p className="section__copy">{content.aboutMe.description}</p>
        </div>
      </div>
    </section>
  );
}
