import { React, useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  // const [mostrar, actualizarMostrar] = useState(true);
  // const clickAdd = () => {
  //   console.log("mostrando", !mostrar);
  //   actualizarMostrar(!mostrar);
  // };
  return (
    <section className="orgSection">
      <h3 className="tittle">Mi Organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
