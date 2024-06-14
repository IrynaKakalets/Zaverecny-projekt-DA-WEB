import './style.css';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
export const InfoPage = () => {
  return (
    <>
      <Header />
  <section className="care" id="peče">
  
    <h2>Jak začít s akváriem</h2>

    <h3>Založení akvária krok za krokem</h3>

    <p>Akvárium máte doma, nyní je na řadě příprava nádrže. <strong>Jak postupovat?</strong></p>

<li>  Akvárium postavte na zpevněný povrch, na speciální podložkou pod akvárium (tlumí nárazy a vyrovná případné nerovnosti, které mohou způsobit prasknutí akvária).</li>

<li>Vodou důkladně omyjte vnitřní strany akvária.</li>

<li>Důkladně propláchněte akvarijní substrát (v případě písku, štěrku či drtě).</li>

<li>V případě použití výživného substrátu nasypte substrát na dno a na něj naneste vrstvu písku nebo substrátu dle našeho výběru.</li>

<li>Umístěte akvarijní techniku (filtr, topítko, teploměr, popř. vzduchovací kamínky, osvětlení - musí být dostatečné).</li>

<li>Zasaďte či rozmístěte rostliny, kořeny a dekorace.</li>

<li>Napusťte vodu (proud vody směřujte na plochý talíř, který si přidržujeme nad dnem, aby nám proud vody nerozvířil substrát), aplikujeme startovací bakterie a přípravek na úpravu vody, spustíme akvarijní techniku.</li>

    <h3>Než vpustíme akvarijní rybičky</h3>

    <img className="care-photo" src="img/uvod.jpg" alt="Peče"/>

    <p>
      Nikdy nepouštějte ryby do čerstvě založené nádrže. 
      <p>Máte ale dvě možnosti:</p>

      <li><strong>Počkejte 3 - 4 týdny</strong>, než se akvárium tzv. zaběhne.</li>
      <li><strong>Použijte startovací akvarijní chemií, která tento proces urychlí</strong>
      a ryby můžete vpustit již cca po 24 hodinách.</li>
    </p>

    <p>
      Tato chemie redukuje amoniak, dusitany a váže těžké kovy z kohoutkové
      vody. Také je dobré použít přípravek s obsahem nitrifikačních bakterií,
      což jsou prospěšné bakterie, které se usídlí ve filtraci a v substrátu a
      pomáhají neutralizovat škodlivé látky.
    </p>

    <h3>Vpuštění ryb</h3>
    <p>Ryby jsou studenokrevní živočichové. To znamená, že nedokáží samy regulovat tělesnou teplotu. Náhlé změny z tepla do chladu (a naopak) jim mohou způsobit teplotní šok.

      <li><strong>Před vpuštěním ryb nalijte do akvária přípravek na úpravu vody.</strong> Látky v něm pomáhají regulovat stres ryb a naváží na sebe škodlivé látky, které případně v akváriu zůstaly.</li>
      <li><strong>Abyste předešli zmiňovanému teplotními šoku, položte nejprve uzavřený sáček s rybami na hladinu.</strong> Zhruba po 15 minutách se teplota vody v sáčku vyrovná s teplotou vody v akváriu</li>
      <li><strong>Sáček opatrně otevřete a současně pomalu nalévejte akvarijní vodu do sáčku</strong>, dokud sáček nebude plný.</li>
      <li><strong>Ponořte sáček ve vodorovné poloze a nechte z něj rybky do nového domova vyplavat.</strong> Ryby nikdy do akvária nevylévejte nebo je násilně nesnažte vyhnat ze sáčku - již jsou dost vystresované a další stres o to více oslabuje imunitu.</li>
      </p>

  </section>
  <Footer />
    </>
  );
 
};
