import React,{useContext, useEffect, useState}from'react';
import CartContext from "../../context/CartContext";
import Form from '../Form/form';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { firestoreDB } from '../../services/firebase';



const Cashout=()=>{
const{cart,getQuantity, ClearCart,totalPrice}=useContext(CartContext)
const { user } = useAuth();
const history=useNavigate()
const [name,setName]=useState("")
const [email,setEmail]=useState("");
const [adress,setAdress]=useState("")
const [cell,setCell]=useState("")
const [error,setError]=useState("")
const[success,setSuccess]=useState("")
useEffect(()=>{
    if(user){
        setEmail(user.email)
    }
    else {history('/login')}
})
const cashout=(e)=>{
    e.preventDefault();
    if (user){
        const date=new Date ();
        const time =date.getTime();
        firestoreDB.collection('Buyer-info' + user.uid).doc('_' + time).set({
            BuyerName:name,
            BuyerEmail:email,
            BuyerAdress:adress,
            BuyerPayment:totalPrice(),
            BuyerQuantity:getQuantity(),

        }).then (()=>{
            setCell("");
            setAdress("");
            ClearCart();
            setSuccess('Su compra se ha realizado exitosamente, gracias por confiar en nosotros')
            setTimeout(()=>{
                history('/')
            },5000)
        }).catch (error=>setError(error.message))
    }
}
return(

    <>
    {success && <span>{success}</span>}
    <div>
    <h1>Detalles de la compra</h1>
    <ul>{ cart.map(p=><li key={p.id}>{p.name} Cantidad:{p.quantity}precio uni: {p.price}  subtotal: {p.quantity * p.price} </li>)}

</ul>
        <p>El total de la compra es:{getQuantity()}</p>
    </div>
    <form autoComplete='off' className='form-group' onSubmit={cashout}>
        <label htmlFor='name'>Name</label>
        <input type="text" className='form-control' required  onChange={(e)=>setName(e.target.value)} value={name}/>
        <label htmlFor='email'>Email</label>
        <input type="email" className='form-control' required value={email} disabled/>
        <label htmlFor='Cell'>Numero de telefono:</label>
        <input type="number" className='form-control' required  onChange={(e)=>setCell(e.target.value)} value={cell}/>
        <label htmlFor='adress'>Direccion</label>
        <input type="text" className='form-control' required  onChange={(e)=>setAdress(e.target.value)} value={adress}/>
        <button type="submit">Finalizar compra</button>
    </form>
    {error&&<spam>{error}</spam>}
   
    
    </>
)

}
export default Cashout;