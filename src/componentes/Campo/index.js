import "./Campo.css";
import { React, useState } from "react";

const Campo = (props) => {
  const placeholderModificado = `${props.placeholder}...`;
  const [valor, actualizarValor] = useState("");
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };
  //destructuración
  const { type = "text" } = props;

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;
