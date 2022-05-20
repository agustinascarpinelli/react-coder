import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestoreDB } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemPromoDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading]=useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(firestoreDB, "promo", productId)).then((response) => {
      const product = { id: response.id, ...response.data() };
      setProduct(product);
      setLoading(false)
    });

    return () => {
      setProduct();
    };
  }, [productId]);

  if (loading) {
    return (
     <Loader></Loader>
    );
  }
  return (
   
        <ItemDetail cat="promo" {...product} />
      
  );
};
export default ItemPromoDetailContainer;
