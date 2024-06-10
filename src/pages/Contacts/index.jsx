import './style.css';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
export const Contacts = () => {
  return (
    <>
      <Header />
      <section className="contact" id="kontakt">
        <h2>Kontakt</h2>

        <h4>
          Obě radi vzděláváme se a potkali jsme na DA Web. <br/>
          Baví nás programování, zvířata a cestování.
        </h4>

        <p>
          <strong>IRYNA KAKALETS</strong>
        </p>
        <p>
          Ahoj, jmenuju se Iryna.
          <br />
          Ráda se učím nové věci a poznávám nová místa.
          <br />
          Mám ráda zvířátka, od dětství chová akvarijní rybičky.
          <br />
          Pracovala jsem v Laboratoři, ale teď jsem připravená se rozvíjet v
          oblasti IT.
          <br />
        </p>

        <a href="https://www.linkedin.com/in/iryna-kakalets">
          <img
            src="img/linkedin.png"
            alt="Linkedin"
            className="tech-logo"
          />
        </a>
        <a href="https://github.com/IrynaKakalets">
          <img src="img/github.png" alt="Github" className="tech-logo" />
        </a>

        <p>Mobil: +420 778 583 618</p>
        <br />
        <p>
          <strong>BIBIANA ERNESTOVÁ </strong>
        </p>
        <p>
          Ahoj, moje meno je Bibi, ale všetci ma volajú Pony!
          <br />
          Ako správny nerd milujem zberateľské karty, hry všetkých typov,
          kreslenie, cosplay, maľovanie figúrok a všetko čo k tomu patrý.
          <br />
          Po ukončení kurzu by som sa chcela viac venovať UI/UX designu. Mojím
          dlhodobým cieľom a snom je však herný design.
          <br />
          Teším sa na svoju ďalšiu strastiplnú dlhú jazdu s IT!
          <br />
        </p>

        <a href="https://www.linkedin.com">
          <img
            src="img/linkedin.png"
            alt="Linkedin"
            className="tech-logo"
          />
        </a>
        <a href="https://github.com/cyberHoof">
          <img src="img/github.png" alt="Github" className="tech-logo" />
        </a>

        <p>Mobil: +420 776 072 292</p>

      </section>
      
      <Footer />
    </>
  );
};
