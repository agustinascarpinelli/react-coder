import React, { useEffect, useState } from "react";
import { firestoreDB } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
export const ItemPromoContainer = () => {
  const [products, setProducts] = useState([]);
  const[loading, setLoading]=useState(true)

  useEffect(() => {
    const collectionRef = collection(firestoreDB, "promo");

    getDocs(collectionRef).then((response) => {
      const products = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(products);
      setLoading(false)
    });
  }, []);

  if (loading) {
    return( <Loader></Loader>)}
  return (
    <div>
      <ItemList cat="promo" products={products} />
    </div>
  );
};
export default ItemPromoContainer;
