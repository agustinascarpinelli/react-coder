import { async } from "@firebase/util";
import React, {useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";



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
        <h2>Ingresa tus datos</h2>
        <form autoComplete="off" className="form-group" onSubmit={logIn}>
            <label htmlFor="email">Email</label>
            <input type="email" className='form-control' required onChange={(e)=>setUser({...user, email:e.target.value})}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" className='form-control' required onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            <button type='submit' className="bnt-login">Ingresar</button>
            <a href="#!" onClick={handleResetPassword}>Ha olvidado la contraseña? </a>
        </form>
        <button onClick={handleGoogleSignin} className="google-signin">Ingresar con Google</button>
        {error && <span className='error-login'>{error}</span>}
        <span >No estas registrado?<Link to="signup">Registrate</Link></span>
    </div>
)
        }
export default Login;