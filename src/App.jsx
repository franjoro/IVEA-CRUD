import React, { useState } from "react";
import Tabla from "./components/table.jsx";
import Formulario from "./components/form.jsx";
import EditForm from "./components/editForm.jsx";
import { v4 as uuidv4 } from "uuid";

const data = [
  { id: uuidv4(), Nombre: "Franklin López", tel: 22780457 },
  { id: uuidv4(), Nombre: "Juan Perez", tel: 22780457 },
  { id: uuidv4(), Nombre: "Pedro Martinez", tel: 1223783 }
];

function App() {
  const [datos, setDatos] = useState(data);

  //Agregar
  const AgregarDatos = info => {
    info.id = uuidv4();
    setDatos([...datos, info]);
  };
  //Borrar
  const BorrarDatos = info => {
    setDatos(datos.filter(cliente => cliente.id !== info));
  };

  //Editar
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const editRow = user => {
    setCurrentUser({ id: user.id, Nombre: user.Nombre, tel: user.tel });
    setEditing(true);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setDatos(datos.map(user => (user.id === id ? updatedUser : user)));
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand">Ejemplo - CRUD</span>
      </nav>
      <div className="container p-4">
        <div className="row">
          <div className="col-6">
            <h3>Ingresar clientes</h3>
            <Formulario add={AgregarDatos} />
            {editing ? (
              <EditForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            ) : null}
          </div>
          <div className="col-6">
            <h3>Clientes</h3>
            <Tabla info={datos} borrar={BorrarDatos} editar={editRow} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
