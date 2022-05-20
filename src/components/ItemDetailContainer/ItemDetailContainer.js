import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestoreDB } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { productId } = useParams();
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getDoc(doc(firestoreDB, "products", productId)).then((response) => {
      const product = { id: response.id, ...response.data() };
      setProduct(product)
      setLoading(false);
    });

    return () => {
      setProduct();
    };
  }, [productId]);

  return (<div>
    {loading ? 
    
      <Loader/>
     
      :  <ItemDetail cat="detail" {...product} />}
  
      </div>
  );

};
export default ItemDetailContainer;
