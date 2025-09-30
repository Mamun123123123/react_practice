let ob = [
    {name:"Mamun",mark:88},{name:"k",mark:90},
    {
        name:"W",mark:22
    }
]

function Sums(){
 
        let marks = ob.filter(item=>item.mark).reduce((sum,item)=>sum + item.mark,0)
    return(
        <>
        <p>Total marks : {marks}</p>
        
        </>
       
    )
}

export default Sums;