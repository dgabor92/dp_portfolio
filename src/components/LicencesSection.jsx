import { documents } from "../data/assets";

export function LicencesSection({ content }) {
  return (
    <section id="experience" className="section reveal">
      <div className="section__inner">
        <header className="section__heading">
          <h2>{content.licence.title}</h2>
        </header>

        <div className="licences">
          {content.licence.items.map((item, index) => {
            const link = item.link
              ? item.link.includes("hu")
                ? documents.aeocHu
                : documents.aeocEn
              : null;

            return (
              <article
                key={`${item.title}-${item.referenceNumber}-${index}`}
                className="licence-card"
                style={{ "--delay": `${index * 70}ms` }}
              >
                <span className="licence-card__date">{item.date}</span>
                <h3 className="licence-card__title">{item.title}</h3>
                <p className="licence-card__reference">{item.referenceNumber}</p>
                {link ? (
                  <a className="licence-card__link" href={link} target="_blank" rel="noreferrer">
                    {item.referenceNumber}
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
