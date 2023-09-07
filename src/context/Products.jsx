import { createContext, useState } from "react";
import PRODUCTS from '../shopData.json'


export const ProductContext = createContext({
    products: [],

});


export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };

    // useEffect(()=> {
    //     const unsubscribe = onAuthListener((user)=>{
    //         if(user){
    //             createUserDocumentFromAuth(user)
    //         }
    //         setCurrentUser(user)
    //     });
    //     return unsubscribe;
    // },[]);
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>);
}