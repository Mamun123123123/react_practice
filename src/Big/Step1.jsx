import React,{useState} from "react";
export default function Step1(){
    const [products] = useState(
        [
            {name:"Apple",price:200},{name:"Banana",price:100},{name:"Mango",price:300}
        ]
    )
    return(
        <div>
         <h2>Product List</h2>
         <ul>
            {
                products.map((item,index)=>(
                    <li key={index}>
                       {index+1}: Name: {item.name} - Price : {item.price}
                    </li>
                ))
            }
         </ul>
        </div>
    )
}