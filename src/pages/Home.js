import React from "react";
import { MdOutlineMail } from "react-icons/md";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h1>Zespół Aspergera i Dolina Krzemowa</h1>
        <div className="prompt">
          <p>
            Zespół Aspergera powiązano z wysokimi osiągnięciami matematyków,
            fizyków, informatyków oraz inżynierów i stwierdzono, że zespół
            często współgra z osiągnięciami na najwyższym poziomie w tych
            dziedzinach.
          </p>
          <p>Bez ludzi z zespołem Aspergera nie byłoby Doliny Krzemowej.</p>
          <MdOutlineMail />
        </div>
      </div>
      <div className="skills">
        <h2>Znani z zespołem Aspergera</h2>
        <ul className="list">
          <li className="item">
            <h3>Archimedes</h3>
            <span>ok. 287 - 212 p.n.e</span>
          </li>
          <li className="item">
            <h3>Michał Anioł</h3>
            <span>1475 - 1564</span>
          </li>
          <li className="item">
            <h3>Isaac Newton</h3>
            <span>1643 - 1727</span>
          </li>
          <li className="item">
            <h3>Immanuel Kant</h3>
            <span>1724 - 1804</span>
          </li>
          <li className="item">
            <h3>Thomas Jefferson</h3>
            <span>1743 - 1826</span>
          </li>
          <li className="item">
            <h3>Wolfgang Amadeus Mozart</h3>
            <span>1756 - 1791</span>
          </li>
          <li className="item">
            <h3>Ludwig van Beethoven</h3>
            <span>1770 - 1827</span>
          </li>
          <li className="item">
            <h3>Arthur Schopenhauer</h3>
            <span>1788 - 1860</span>
          </li>
          <li className="item">
            <h3>Hans Christian Andersen</h3>
            <span>1805 - 1875</span>
          </li>
          <li className="item">
            <h3>Charles Darwin</h3>
            <span>1809 - 1882</span>
          </li>
          <li className="item">
            <h3>Thomas Alva Edison</h3>
            <span>1847 - 1931</span>
          </li>
          <li className="item">
            <h3>Vincent van Gogh</h3>
            <span>1853 - 1890</span>
          </li>
          <li className="item">
            <h3>Albert Einstein</h3>
            <span>1879 - 1955</span>
          </li>
          <li className="item">
            <h3>Alfred Hitchcock</h3>
            <span>1899 - 1980</span>
          </li>
          <li className="item">
            <h3>George Orwell</h3>
            <span>1903 - 1950</span>
          </li>
          <li className="item">
            <h3>Andy Warhol</h3>
            <span>1928 - 1987</span>
          </li>
          <li className="item">
            <h3>Woody Alen</h3>
            <span>1935 -</span>
          </li>
          <li className="item">
            <h3>Anthony Hopkins</h3>
            <span>1937 -</span>
          </li>
          <li className="item">
            <h3>Dustin Hoffman</h3>
            <span>1937 -</span>
          </li>
          <li className="item">
            <h3>Bill Gates</h3>
            <span>1955 -</span>
          </li>
          <li className="item">
            <h3>Elon Musk</h3>
            <span>1971 -</span>
          </li>
          <li className="item">
            <h3>Daniel Tammet</h3>
            <span>1979 -</span>
          </li>
          <li className="item">
            <h3>Lionel Messi</h3>
            <span>1987 -</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
