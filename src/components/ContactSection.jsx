import { MapIcon, MailIcon, UserIcon } from "./Icons";
import { portraits } from "../data/assets";

export function ContactSection({ content }) {
  return (
    <section id="contact" className="section reveal">
      <div className="section__inner">
        <header className="section__heading">
          <h2>{content.contact.title}</h2>
        </header>

        <div className="contact">
          <div className="contact__details">
            <p className="contact__row">
              <UserIcon className="contact__icon" />
              <span>Deutsch Pál</span>
            </p>
            <p className="contact__row">
              <MailIcon className="contact__icon" />
              <a href="mailto:deutschpal67@gmail.com">deutschpal67@gmail.com</a>
            </p>
            <p className="contact__row contact__row--stacked">
              <MapIcon className="contact__icon" />
              <span>4600 Kisvárda, Nagyboldogasszony út 20.</span>
            </p>
            <p className="contact__row contact__row--stacked">
              <MapIcon className="contact__icon" />
              <span>
                Raktár: 4628 Tiszaszentmárton, Táncsics út 16 (Konzerv üzem)
                <br />
                GPS: 48,37697 22,22478
              </span>
            </p>
          </div>

          <a
            className="contact__badge"
            href="https://vjaszsz.hu/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={portraits.logo} alt="vajszsz" width="50" height="50" />
          </a>
        </div>
      </div>
    </section>
  );
}
