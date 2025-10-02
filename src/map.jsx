export default function M(){
    // let arr = [1,2,3,4,5,6,7]
    // let str = ["mamun","M","K","L","K"]
    // let result = arr.map(item=>item * 2).join(" ")
    let str = [
        {name:"M",age:20},
        {name:"LK",age:204},
        {name:"Mdfd",age:2042}

    ]
    return (
        <div>
           <h1>Our Name list is : </h1>
           <ul>
            {
                str.map(({name,age},index)=>{
                    return (
                        <li>{index+1}:Name : {name} - Age : {age}</li>
                    )
                })
            }
           </ul>

        </div>
        
    )
}