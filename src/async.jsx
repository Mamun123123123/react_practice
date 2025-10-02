export default function Sum(){
    let n=20;
    let result = [...Array(n).keys()].map(x=>x+1).reduce((sum,item)=>sum+item,0)
    return(
        result
    )
}