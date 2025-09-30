let str = "abdullah al mamun"

function Longest_Word(){
    let words =  str.split(" ").sort((a,b)=> b.length - a.length)
    return(
       words[0]
    )
}


export default Longest_Word;