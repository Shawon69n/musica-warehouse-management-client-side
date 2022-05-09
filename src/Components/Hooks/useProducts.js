import { useEffect, useState } from "react"

const useProducts = () =>{
    const [newProducts,setNewProducts] = useState([]);
    
    useEffect(()=>{
        fetch('https://ancient-gorge-82683.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setNewProducts(data))
    },[])
    return [newProducts,setNewProducts]
}

export default useProducts;