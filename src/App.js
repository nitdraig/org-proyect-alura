import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Formulario from "./componentes/Formulario/Formulario";
import Header from "./componentes/Hedear/Header.js";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";

function App() {
  const [mostrarForm, actualizarForm] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "UX/UI",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true,
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulos: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },

    {
      id: uuid(),
      titulos: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulos: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulos: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },

    {
      id: uuid(),
      titulos: "UX/UI",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulos: "Mobile",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulos: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  //lista equipos
  // const equipos =

  const cambiarMostrar = () => {
    actualizarForm(!mostrarForm);
  };
  //actualizar color de seccion colaboradores
  const actualizarColor = (color, id) => {
    console.log("actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipos) => {
      if (equipos.id === id) {
        equipos.colorPrimario = color;
      }
      return equipos;
    });
    actualizarEquipos(equiposActualizados);
  };

  //registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //eliminar colaborador

    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };
  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  const eliminarColaborador = (id) => {
    console.log("eliminado", id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {/* {mostrarForm ? <Formulario /> : <></>} */}
      {mostrarForm && (
        <Formulario
          equipos={equipos.map((equipos) => equipos.titulos)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulos}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulos
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
