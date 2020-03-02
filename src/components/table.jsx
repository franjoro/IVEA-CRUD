import React from "react";

const Tabla = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>ID</td>
          <td>Nombre</td>
          <td>Teléfono</td>
          <td>Operacion</td>
        </tr>
      </thead>
      <tbody>
        {props.info.map(cliente => (
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.Nombre}</td>
            <td>{cliente.tel}</td>
            <td>
              <button type="button"  onClick={()=>{props.editar(cliente)}} className="btn btn-success">
                Editar
              </button>
              <button type="button" onClick={()=>{props.borrar(cliente.id)}} className="btn btn-danger">
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
