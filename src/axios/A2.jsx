import React,{useState,useEffect} from 'react'
import axios from 'axios'

const A2 = () => {
    const [dog,setDogs] = useState([])
    useEffect(()=>{
        const loaddata = async () => {
            try {
                const res = await axios.get("https://dog.ceo/api/breeds/image/random/10")
                console.log(res.data);
                setDogs(res.data.message)
            } catch (error) {
                console.log(error)
            }
        }
        loaddata();
    },[])
  return (
    <div>
        <h1>Dogs </h1>
         <ul>
        {dog.map((item, index) => (
          <li key={index}>
            <img src={item} alt={`Dog ${index}`} style = {{width:"200px"}} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default A2