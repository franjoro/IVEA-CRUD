import React from "react";
import { useForm } from 'react-hook-form'

const Formulario = (props) => {
  const { handleSubmit, register } = useForm();
  const onSubmit =  (values, e) => {
    props.add(values)
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col">
            <input type="text" name="Nombre"   className="form-control"  placeholder='Nombre'  ref={register}/>
          </div>
          <div className="col">
            <input type="text"  name="tel"  className="form-control" placeholder='Telefono' ref={register} />
          </div>
        </div>
        <br/>
        <input type="submit" className="btn btn-success"/>
      </form>
    </div>
  );
};
export default Formulario;
