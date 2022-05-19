import { async } from "@firebase/util";
import React, {useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Icon } from "react-icons-kit";
import {google3} from 'react-icons-kit/icomoon/google3'
import {alertTriangle} from 'react-icons-kit/feather/alertTriangle'






export const Login =()=>{
    const { login, loginWithGoogle, resetPassword } = useAuth();
    const [error,setError]=useState("");
    const history=useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
      });


    const logIn =  async(e)=>{
        e.preventDefault();
        setError("");
        try {
          await login(user.email, user.password);
          history("/");
        } catch (error) {
          setError(error.message);
        }
      };
     


  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      history("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };
return (
  
    <div className="containerForm">
        <h1>Ingresa tus datos</h1>
        {error && <span className='errorMsg'><Icon icon={alertTriangle}></Icon> {error}</span>}
        <form autoComplete="off" className="form-group" onSubmit={logIn}>
            <label htmlFor="email">Email</label>
            <input type="email" className='form-control' required onChange={(e)=>setUser({...user, email:e.target.value})}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" className='form-control' required onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            <div className="buttonsConfirm">
            <button type='submit' className="btnConf">Ingresar</button>
            <a href="#!" className="redirect" onClick={handleResetPassword}>Ha olvidado la contraseña? </a>
            </div>
        </form>
        <div className="buttonsExtra">
        <button onClick={handleGoogleSignin} className="btnConf google"><Icon icon={google3}></Icon> Ingresar con Google</button>
        <span className="redirect">No estas registrado?<Link to="/signup">Registrate</Link></span>
        </div>
       
    </div>
)
        }
export default Login;