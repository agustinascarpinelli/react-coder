import React,{useContext, useEffect, useState}from'react';
import CartContext from "../../context/CartContext";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { firestoreDB } from '../../services/firebase';
import { collection, addDoc, getDocs, where, query,documentId, writeBatch } from "firebase/firestore"
import './Cashout.css'




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
const [orderId, setOrderId] = useState(null)
useEffect(()=>{
    if(user){
        setEmail(user.email)
    }
    else {history('/login')}
})

const finishOrder=()=>{
    setCell("");
            setAdress("");
            ClearCart();
            setSuccess('Su compra se ha realizado exitosamente, gracias por confiar en nosotros')
            setTimeout(()=>{
                history('/')
            },8000)
}
const cashout= async(e)=>{
    e.preventDefault();
        const date=new Date ();
        const time =date.getTime();
     const order={ BuyerName:name,
            BuyerEmail:email,
            BuyerAdress:adress,
            BuyerPayment:totalPrice(),
            BuyerQuantity:getQuantity(),
            date,
            time ,}
       const collectionRef= collection(firestoreDB, 'orders')
        setOrderId(( await addDoc(collectionRef, order)).id)
        finishOrder(orderId)
        stock()
           
    
    }

const stock = () =>{
    const id = cart.map(p => p.id)
    const batch = writeBatch(firestoreDB);
    const prodStock = collection(firestoreDB, 'products');

    getDocs(query(prodStock, where(documentId(), 'in', id)))
        .then(response =>{
            response.docs.forEach(doc=>{
                const dataDoc = doc.data()
                const prod = cart.find(p=> p.id === doc.id)
                const prodQuantity = prod.quantity

                if(dataDoc.stock >= prodQuantity) {
                   batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                   batch.commit()
                }
            
            })
        }).catch(err =>{
            console.log(err)
        })

}






return(

    <>
    {success ? <div className='msgSuc'><span class="successMsg">{success}</span></div>:
    <div class="orderDet">
    <h1>Detalles de la compra</h1>
    <ul>{ cart.map(p=><li key={p.id}>{p.name} Cantidad: {p.quantity}<br></br>Precio uni: ${p.price}<br></br>Subtotal: {p.quantity * p.price} </li>)}

</ul>
        <p>El total de la compra es: $ {totalPrice()}</p>
    </div>}
    <div className='containerForm'>
    <form autoComplete='off' className='form-group' onSubmit={cashout}>
        <label htmlFor='name'>Nombre: </label>
        <input type="text" className='form-control' required  onChange={(e)=>setName(e.target.value)} value={name}/>
        <label htmlFor='email'>Email: </label>
        <input type="email" className='form-control' required value={email} disabled/>
        <label htmlFor='Cell'>Numero de telefono: </label>
        <input type="number" className='form-control' required  onChange={(e)=>setCell(e.target.value)} value={cell}/>
        <label htmlFor='adress'>Direccion: </label>
        <input type="text" className='form-control' required  onChange={(e)=>setAdress(e.target.value)} value={adress}/>
        <div className='buttonsConfirm'>
        <button  className="btnConf" type="submit">Finalizar compra</button>
        </div>
    </form>
    </div>
    {error&&<spam className="errorMsg">{error}</spam>}
   
    
    </>
)

}
export default Cashout;