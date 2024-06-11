import './style.css';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';

export const FishAtlas = () => {
  return (
    <>
      <Header />

      <section className="katalogryb" id="katalogryb">
        <h2>Katalog ryb pro začátečníky</h2>

        <p>
          <strong>Vhodné akvarijní ryby pro začátečníky.</strong>
        </p>

        <p>
          Jelikož některé ryby vyžadují speciální péči a podmínky, poradíme vám
          druhy, které jsou vhodné i pro ty, kteří ještě s akvaristikou nemají
          zkušenosti.
        </p>

        <p>
          Velmi oblíbené a na chov nenáročné akvarijní ryby jsou například
          <strong>
            <em>živorodky.</em>
          </strong>{' '}
          Tyto rybky jsou nejen krásné, ale také zajímavé tím, jak už jejich
          název napovídá, že samičky rodí živé rybičky, jejichž zárodky se
          vyvíjí uvnitř jejich bříška. Jejich nenáročnost spočívá v tom, že jsou
          všežravé a můžete jim tedy podávat krmivo vločkové, živé i mražené.
          Převážně se živí rostlinnou potravou, mají rády hlavně řasy. Mezi
          další oblíbené poddruhy těchto rybiček patří
          <strong>
            <em>paví očka</em>
          </strong>{' '}
          a{' '}
          <strong>
            <em>mečovky.</em>
          </strong>
        </p>

        <p>
          <strong>
            <em>
              Kromě živorodek nebo třeba teter a bojovnic, patří mezi vhodné
              akvarijní ryby pro začátečníky i sumečci
            </em>
          </strong>
          (např. krunýřovci nebo pancéřníčci). Krunýřovci jsou známí jako
          čističi akvárií - často je můžete pozorovat přisáté na sklo, kde
          konzumují vznikající řasy. Pancéřníčci zase hledají potravu na dně
          akvária. Oba druhy jsou tedy opravdu skvělými obyvateli akvária pro
          začátečníky, protože napomáhají udržovat ho v čistotě od řas a zbytků
          jídla.
        </p>
        <div className="galerie">
          <div className="foto">
            <img src="img/1zoloti-rybki.jpg" alt="Zlata rybka" />
            <p className="popisek">
              <span className="popisek-copy">
                <Link to="/FishAtlas/zlatarybka">ZLATÉ RYBKY</Link>
              </span>
            </p>
          </div>
          <div className="foto">
            <img src="img/2hupicki.jpg" alt="Živorodky" />
            <p className="popisek">
              <span className="popisek-copy">
                <Link to="/FishAtlas/guppy">ŽIVORODKY (Gupka)</Link>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="img/3daniki.jpg" alt="Danio" />
            <p className="popisek">
              <span className="popisek-copy">
                <Link to="/FishAtlas/danio">DÁNIO PRUHOVÉ</Link>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="img/4ternetsii.jpg" alt="Tetra glofish" />
            <p className="popisek">
              <span className="popisek-copy">
                <Link to="/FishAtlas/glofish">TETRA GLOFISH</Link>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="img/5neoni.jpg" alt="Tetra neonová" />
            <p className="popisek">
              <span className="popisek-copy">
                <Link to="/FishAtlas/neonka">NEONKA OBECNÁ (Tetra neonová)</Link>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="img/6skaljarija-bila.jpg" alt="Skalára" />
            <p className="popisek">
              <span className="popisek-copy">
                <Link to="/FishAtlas/skalara">SKALÁRA</Link>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="img/7pivnyk.jpg" alt="Bojovnice pestrá" />
            <p className="popisek">
              <span className="popisek-copy">
                <Link to="/FishAtlas/bojovnice">BOJOVNICE PESTRÁ</Link>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="img/8mecenosci.jpg" alt="Mečovky" />
            <p className="popisek">
              <span className="popisek-copy">
                <Link to="/FishAtlas/mecovky">MEČOVKY</Link>
              </span>
            </p>
          </div>

          <div className="foto posledni">
            <img src="img/9molinezii.jpg" alt="Black molly" />
            <p className="popisek">
              <span className="popisek-copy">
                <Link to="/FishAtlas/molly">BLACK MOLLY</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
