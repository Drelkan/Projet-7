import React, { useEffect, useState } from "react";
import Banner from "../components/reusable/Banner";
import homeBanner from "../assets/image/Banner-home.png";
import { Link } from "react-router-dom";
import Pagination from "../components/reusable/Pagination";

export default function Home() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const logementsPerPage = 4;

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

  const indexOfLastLogement = currentPage * logementsPerPage;
  const indexOfFirstLogement = indexOfLastLogement - logementsPerPage;
  const currentLogements = logements.slice(indexOfFirstLogement, indexOfLastLogement);

  return (
    <div>
      <div className={`custom-loader ${loading ? "" : "hidden"}`}></div>
      <div className={`content ${loading ? "hidden" : "visible"}`}>
        <div className="banner-home">
          <Banner title="Chez vous, partout et ailleurs" src={homeBanner} />
        </div>
        <div className="home-card">
          {currentLogements.map((logement) => (
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
        <Pagination
          logementsPerPage={logementsPerPage}
          totalLogements={logements.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

