import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "../components/reusable/Slider";
import Collapsible from "../components/reusable/Collapsible";
import Rating from "../components/reusable/Rating";
import Tags from "../components/reusable/Tags";
import Host from "../components/reusable/Host";
import LogementTitle from "../components/reusable/LogementTitle";
import { ROUTES } from "../constants/routes";


export default function Logement() {
  const [logement, setLogement] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("../datas/logements.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((logementsFromApi) => {
        const logement = logementsFromApi.find((logement) => logement.id === id);
        if (!logement) {
          navigate(ROUTES.NOTFOUND)
                } else {
          setLogement(logement);
        }
      })
      .catch(() => navigate(ROUTES.NOTFOUND));
  }, [id, navigate]);


  return (
    <>
      {!logement.pictures ? null : <Slider images={logement.pictures} />}
      <div className="logement-card" key={logement.id}>
        <div className="logement-contener">
          <LogementTitle title={logement.title} location={logement.location} />
          <Tags tags={logement.tags} />
        </div>
        <div className="rating-contener">
          <Rating rating={logement.rating} />
          <Host host={logement.host} />
        </div>
      </div>
      <div className="collaps-logement">
        <Collapsible title="Description" content={logement.description} />
        <Collapsible title="Equipement" content={logement.equipments} />
      </div>
    </>
  );
}
