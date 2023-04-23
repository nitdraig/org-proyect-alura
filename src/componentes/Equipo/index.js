import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulos, id } = props.datos;

  const colorObjs = {
    backgroundColor: hexToRgba(colorPrimario, 0.6),
  };
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
  const styloTitulo = {
    borderColor: colorPrimario,
  };

  return (
    <>
      {" "}
      {colaboradores.length > 0 && (
        <section className="equipo" style={colorObjs}>
          <input
            className="input-color"
            type="color"
            value={colorPrimario}
            onChange={(evento) => {
              actualizarColor(evento.target.value, id);
            }}
          />
          <h3 style={styloTitulo}>{titulos}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
