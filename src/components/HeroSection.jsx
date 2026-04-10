export function HeroSection({ content, portrait }) {
  return (
    <section id="header" className="hero reveal">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">{content.portfolioName}</h1>
          <p className="hero__profession">{content.profession}</p>
          <p className="hero__about-copy">{content.aboutMe.description}</p>
        </div>

        <div className="hero__visual">
          <img className="hero__image" src={portrait} alt={content.portfolioName} />
        </div>
      </div>
    </section>
  );
}
