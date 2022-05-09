import { useEffect, useState } from "react"

const useProducts = () =>{
    const [newProducts,setNewProducts] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setNewProducts(data))
    },[])
    return [newProducts,setNewProducts]
}

export default useProducts;