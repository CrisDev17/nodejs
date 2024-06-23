function reverseArray(arr){
    var arr1 = []
    var k = 0
    for(var i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === 'string'){
           arr1.push(arr[i])
           arr[i] = 0
        }
    }
    for(var j = 0; j < arr.length; j++){
        if(arr[j] === 0){
            k++
            arr[j] = arr1[arr1.length-k]
        } else {
            continue;
        }
    }
    return arr;
}
const arr = ['a',9,'e','m','n',3,4,5,5,4,'string',4,'tran',4,4,'dien',8]
const result = reverseArray(arr)
console.log(result)