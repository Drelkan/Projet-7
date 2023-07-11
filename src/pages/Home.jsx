import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Banner from "../components/reusable/Banner";
import homeBanner from "../assets/image/Banner-home.png";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("./datas/logements.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((test) => {
        setLogements(test);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header />
      <Banner title="Chez vous, partout et ailleurs" src={homeBanner} />
      {logements.map((logement) => (
        <div className="test" key={logement.id}>
          <Link className="logement" to={`/Logement/${logement.id}`}>
            <img src={logement.cover} alt={logement.alt} />
            <h2>{logement.title}</h2>
          </Link>
        </div>
      ))}
      <Footer />
    </div>
  );
}
