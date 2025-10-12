import React,{useState,useCallback} from "react";
export default function Step3(){
    const [cart,setcart] = useState([])
    const [products] = useState([
    { name: "Apple", price: 2 },
    { name: "Banana", price: 1 },
    { name: "Mango", price: 3 },
  ]);
  const handleadd = useCallback((item)=>{
    setcart(prev => [...prev,item])
  })
    return (
        <div>
            <h2>Add to Cart</h2>
            {
                products.map((item,index)=>(
                    <div key={index}>
                      {item.name} - ${item.price}
                      <button onClick={()=>handleadd(item)}>Add</button>
                    </div>

                ))
            }
            <h3>cart list</h3>
            {
                cart.map((it,index)=>(
                    <li key={index}>
                        {it.name}-${it.price}
                    </li>
                ))
            }
        </div>
    )
}