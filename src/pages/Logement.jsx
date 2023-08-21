import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Slider from "../components/reusable/Slider";
import Collapsible from "../components/reusable/Collapsible";
import Rating from "../components/reusable/Rating";
import Tags from "../components/reusable/Tags";
import Host from "../components/reusable/Host";
import LogementTitle from "../components/reusable/LogementTitle";

export default function Logement() {
  const [logement, setLogement] = useState({});
  const { id } = useParams();
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    fetch("../datas/logements.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((logementsFromApi) => {
        let test = logementsFromApi.find((logement) => logement.id === id);
        if (test === undefined) {
          setIsNotFound(true);
        } else {
          setLogement(test);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (isNotFound) {
    return <Navigate to="/not-found" replace />;
  }

  const rating = parseInt(logement.rating) || 0;
  console.log(rating);

  return (
    <div>
      {!logement.pictures ? "" : <Slider images={logement.pictures} />}
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
    </div>
  );
}
