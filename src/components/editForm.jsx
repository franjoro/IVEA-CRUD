import React from 'react'
import { useForm } from 'react-hook-form'

const EditForm = (props) => {

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('Nombre', props.currentUser.Nombre)
    setValue('tel', props.currentUser.tel)

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
            className="form-control"
                type="text" 
                name="Nombre"
                ref={register}
                defaultValue={props.currentUser.Nombre}
                />
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input 
            className="form-control"
                type="text" 
                name="tel" 
                ref={register}
                defaultValue={props.currentUser.tel}

                />
            <div>
                {errors?.username?.message}
            </div>
            <button className='btn btn-warning' type="submit">Editar</button>
            <button className="btn btn-info" onClick={() => props.setEditing(false)} >
                Cancel
            </button>
        </form>
    );
}
 
export default EditForm;