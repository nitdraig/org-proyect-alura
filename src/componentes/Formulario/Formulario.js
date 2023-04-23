import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Buttom";
import { React, useState } from "react";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulos, actualizarTitulos] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const envioDatos = (e) => {
    e.preventDefault();
    console.log("hola");
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulos, colorPrimario: color });
  };

  return (
    <section className="section_formulario">
      {" "}
      <form onSubmit={envioDatos}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresa Nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresa Puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Selecciona una Foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        />
        <Boton texto="Crear" />
      </form>{" "}
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresa titulo"
          required
          valor={titulos}
          actualizarValor={actualizarTitulos}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresa el color en Hex..."
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton texto="Registrar equipo" />
      </form>
    </section>
  );
};
export default Formulario;
