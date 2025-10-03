let arr = [1,[2,[3,[4,[5]]]]]
let [a, [b, [c, [d, [e]]]]] = arr
console.log(a,b,c,d,e);

let ob = {
    1:{
        2:{
            3:{
                4:{
                    name:"Hello"
                }
            }
        }
    }
}

let {1:{2:{3:{4:{name}}}}} = ob
console.log(name);
