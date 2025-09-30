let n = 50;

function  Show(){
    return(
         [...Array(n).keys()].map(x=>x+1).filter(item=>item%2 === 0).join(" ")
    )
}
export default Show;