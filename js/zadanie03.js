function bigestSumOfTwoElements(array){
    if(array.length === 0){
        return false
    }
    if(array.length === 1){
        return array[0]
    }

    return array.sort((a, b) => {
        return b - a
    }).slice(0, 2).reduce((a ,b) => {
        return a + b
    }, 0)
}

console.log(bigestSumOfTwoElements([1,2,3,4])) // => 7
console.log(bigestSumOfTwoElements([])) // => false
console.log(bigestSumOfTwoElements([76])) // => 76
console.log(bigestSumOfTwoElements([23,45,17,12])) // => 68