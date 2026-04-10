import { CubeIcon, InfoIcon, PaperclipIcon } from "./Icons";

const serviceIcons = {
  exportCustomsClearance: PaperclipIcon,
  importCustomsClearance: PaperclipIcon,
  bondedWarehousing: CubeIcon,
  customsAdvice: InfoIcon,
};

export function ServicesSection({ content }) {
  const cards = [
    {
      key: "exportCustomsClearance",
      title: content.exportCustomsClearance.title,
      description: content.exportCustomsClearance.description,
    },
    {
      key: "importCustomsClearance",
      title: content.importCustomsClearance.title,
      description: content.importCustomsClearance.description,
    },
    {
      key: "bondedWarehousing",
      title: content.bondedWarehousing.title,
      description: content.bondedWarehousing.description,
    },
    {
      key: "customsAdvice",
      title: content.customsAdvice.title,
      description: content.customsAdvice.description,
    },
  ];

  return (
    <section id="service" className="section reveal">
      <div className="section__inner">
        <header className="section__heading">
          <h2>{content.service.title}</h2>
        </header>

        <div className="services">
          {cards.map((card, index) => {
            const Icon = serviceIcons[card.key];

            return (
              <article
                key={card.key}
                className="service-card"
                style={{ "--delay": `${index * 70}ms` }}
              >
                <div className="service-card__icon">
                  <Icon className="service-card__svg" />
                </div>
                <h3 className="service-card__title">{card.title}</h3>
                <p className="service-card__copy">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
