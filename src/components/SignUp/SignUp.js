import React,{useState} from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link,useNavigate } from 'react-router-dom';


export const Signup=()=>{
    const { signup } = useAuth();

    const [user, setUser] = useState({
      email: "",
      password: "",
    });

    const history=useNavigate();



    const[error,setError]=useState("")
  


    const signUp= async(e)=>{
        e.preventDefault();
        setError("")
        try{
            await signup(user.email, user.password);
            history('/')
        }catch(error) {
            setError(error.message);
          }
        };
    return (
        <div className='signup-container'>
            <h1>Completa tus datos</h1>
 
            <form className='form-group' autoComplete='off' onSubmit={signUp}>
                <label>Email: </label>
                <input type="text" className='form-control' required onChange={(e)=>setUser({...user, email:e.target.value})}/>
                <label>Contraseña: </label>
                <input type="password" className='form-control' required onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <button type='submit' className='btn-signup'>Registrarme</button>
                <span>Ya estas registrado? <Link to="login">Ingresa a tu cuenta</Link></span>
            </form>
            {error && <div className='error-signup'>{error}</div>}
        </div>
    )

}
export default Signup;