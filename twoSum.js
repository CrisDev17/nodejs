function twoSum(arr, target){
    var sum = 0;
    var arr1 = []
    for( var i = 0; i < arr.length; i++){
        for( var j = 0; j < arr.length ; j++){
                sum = arr[i] + arr[j]
                if( sum === target){
                 arr1.push([i,j])
                }
               }
            }
    for( var k = 0; k < arr1.length ; k++){
       if(arr1[k][0] === arr1[k][1]){
        arr1.splice(arr1.indexOf(arr1[k]),1)
       }
    }
    return arr1[0]
}
const result = twoSum([1,2,3,4,5], 6)
console.log(result)