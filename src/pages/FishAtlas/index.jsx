import './style.css';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
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
            <img src="obrazky/1zoloti-rybki.jpg" alt="Zlata rybka" />
            <p className="popisek">
              <span className="popisek-copy">
                <a href="zlatarybka.html">ZLATÉ RYBKY</a>
              </span>
            </p>
          </div>
          <div className="foto">
            <img src="obrazky/2hupiki.jpg" alt="Živorodky" />
            <p className="popisek">
              <span className="popisek-copy">
                <a href="gupi.html">ŽIVORODKY (Gupka)</a>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="obrazky/3daniki.jpg" alt="Danio" />
            <p className="popisek">
              <span className="popisek-copy">
                <a href="danio.html">DÁNIO PRUHOVÉ</a>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="obrazky/4ternetsii.jpg" alt="Tetra glofish" />
            <p className="popisek">
              <span className="popisek-copy">
                <a href="glofis.html">TETRA GLOFISH</a>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="obrazky/5neon.jpg" alt="Tetra neonová" />
            <p className="popisek">
              <span className="popisek-copy">
                <a href="neon.html">NEONKA OBECNÁ (Tetra neonová)</a>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="obrazky/6skaljarija-bila.jpg" alt="Skalára" />
            <p className="popisek">
              <span className="popisek-copy">
                <a href="skalara.html">SKALÁRA</a>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="obrazky/7pivnyk.jpg" alt="Bojovnice pestrá" />
            <p className="popisek">
              <span className="popisek-copy">
                <a href="pivnyk.html">BOJOVNICE PESTRÁ</a>
              </span>
            </p>
          </div>

          <div className="foto">
            <img src="obrazky/8mecenosci.jpg" alt="Mečovky" />
            <p className="popisek">
              <span className="popisek-copy">
                <a href="mecovky.html">MEČOVKY</a>
              </span>
            </p>
          </div>

          <div className="foto posledni">
            <img src="obrazky/9molineziki.jpg" alt="Black molly" />
            <p className="popisek">
              <span className="popisek-copy">
                <a href="molinezii.html">BLACK MOLLY</a>
              </span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
