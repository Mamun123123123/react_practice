import React,{useState} from "react";
export default function Step2(){
    const [search , setSearch] = useState("")
    const [products] = useState([
        {name:"Apple",price:200},{name:"Banana",price:300},{name:"Mango",price:200}

    ])
    const filtered = products.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return(
        <div>
            <h2>Search Filter</h2>
            <input placeholder="Search Here......" value={search} onChange={e=> setSearch(e.target.value)} />
            <ul>
                {
                    filtered.map((item,index)=>(
                        <li key={index}>
                            {item.name}- ${item.price}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}