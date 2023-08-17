import React, { useEffect, useState } from "react";
import Banner from "../components/reusable/Banner";
import homeBanner from "../assets/image/Banner-home.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [logements, setLogements] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./datas/logements.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((test) => {
        setLogements(test);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className={`custom-loader ${loading ? "" : "hidden"}`}></div>
      <div className={`content ${loading ? "hidden" : "visible"}`}>
        <div className="banner-home">
          <Banner title="Chez vous, partout et ailleurs" src={homeBanner} />
        </div>
        <div className="home-card">
          {logements.map((logement) => (
            <div className="home" key={logement.id}>
              <Link className="logement" to={`/Logement/${logement.id}`}>
                <img src={logement.cover} alt={logement.alt} />
                <div className="title">
                  <h2>{logement.title}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}