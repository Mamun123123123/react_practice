// function All(...arr) {
//     let sum = arr.reduce((s,i)=>s+i,0)
//     let multi = arr.reduce((s,i)=>s * i,1)
//     let sub = arr.reduce((s,i)=> s-i)

//     return {sum,multi,sub}
// }
// console.log(All(5,3));



let calculate = (...arr) => {
    let sum = arr.reduce((s, i) => s + i, 0)
    let multi = arr.reduce((s, i) => s * i, 1)
    let sub = arr.reduce((s, i) => s - i)
    return {sum,multi,sub}
}
console.log(calculate(5,3));
