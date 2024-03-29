import React, { useEffect, useState } from "react";
import Banner from "../components/reusable/Banner";
import homeBanner from "../assets/image/Banner-home.png";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";


export default function Home() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./datas/logements.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((datas) => {
        setLogements(datas);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch(() => {
        navigate(ROUTES.NOTFOUND);
      });
  }, [navigate]);

  return (
    <>
      <div className={`custom-loader ${loading ? null : "hidden"}`}></div>
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
    </>
  );
}
