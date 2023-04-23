import React from "react";
import "./ListaOpciones.css";

//metodo map -> arreglo.map((equipo, index)=>{return <option> </option>})

const ListaOpciones = (props) => {
  const manejarCambio = (e) => {
    props.actualizarEquipo(e.target.value);
  };
  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Equipo
        </option>
        {props.equipos.map((equipo, index) => (
          <option key={index}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};
export default ListaOpciones;
