import React, {useState} from 'react';
import {auth} from '../firebaseconfig';

 
export const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    
    const registrarUsuario = (e) => {
        e.preventDefault()
        try{
            
            auth.createUserWithEmailAndPassword (email, pass)
            alert("Se registro correctamente")
        }
        catch(e){
            console.log(e + "Hubo un error")

        }



    }

return (
    <div>

    <h1>login</h1> <br /><br />
    <div>
    <form onSubmit={registrarUsuario}>

        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="" id="" placeholder="ingrese mail"/> <br /> <br />
        <input onChange={(e)=>{setPass(e.target.value)}} type="password" name="" id="" placeholder="Ingrese contraseña"/> <br /> <br />
        <input type="submit" value="Registrar Usuario" />

    </form>
    </div>

    </div>



)
}