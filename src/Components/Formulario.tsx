import { AnyNsRecord } from 'dns';
import { ChangeEvent, useState } from 'react'
import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {
    
    const { nombre, email, edad, formulario, handleChange } = useForm<FormData>({
        email: 'dam@gmail.com',
        nombre: 'Damaris avila',
        edad: 30
    });

    //const {email, nombre, edad } = formulario;
    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: ''
    // });

    // const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    //     const {name, value} = target;

    //     setFormulario({
    //         ...formulario,
    //         [ name ]: value
    //     })
    // }

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email"
                        className="form-control"
                        name="email"
                        value={ formulario.email}
                        onChange={handleChange}
                    />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text"
                        className="form-control"
                        name="nombre"
                        value={ formulario.nombre}
                        onChange={handleChange}
                    />
            </div>
            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input type="text"
                        className="form-control"
                        name="edad"
                        value={ formulario.edad}
                        onChange={handleChange}
                    />
            </div>
            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}

export default Formulario