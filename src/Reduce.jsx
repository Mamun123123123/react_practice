let arr = [1,2,3,4,5,6,7,8,9,10]
function Sum(){
    return (

        arr.reduce((sum,item)=> sum+item,0)
    )
}
export default Sum