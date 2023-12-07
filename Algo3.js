function findValue(value){
    let odd = value.filter(val=> val % 2)
    let even = value.filter(val=> val % 2 === 0)
    if(odd.length > even.length){
        return even[0]
    } else {
        return odd[0]
    }

}
console.log(findValue([2,4,5]))
console.log(findValue([2,3,5]))