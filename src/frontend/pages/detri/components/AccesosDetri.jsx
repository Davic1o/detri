import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/AccesosDetri.css";
import DetriAccesos from "../../../data/DetriAccesos";

function AccesosDetri() {
  const location = useLocation();

  return (
    <div className="contenedor__AccesosDetri">
      <div className="accesos__AccesosDetri">
        {DetriAccesos.map((item) => {
          const isActive = location.pathname === `/${item.Link}`;

          return (
            <Link
              to={`/${item.Link}`}
              className={`acceso__AccesosDetri ${isActive ? "active" : ""}`}
              key={item.id}
            >
              {item.Nombre}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AccesosDetri;
