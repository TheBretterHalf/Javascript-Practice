var arr = [];
var arrlength = 1000;
var pair = [];

function thousands(){
    for (let i=0; i<arrlength; i++){
        let x=(Math.floor((Math.random()-0.5)*1000));
        arr.push(x)
    }
}


// function swap(array, i, j) {
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
// }

// function bubbleSort() {
//     thousands();
//     for(var i = 0; i < arr.length; i++) {
//       for(var j = 1; j < arr.length; j++) {
//         if(arr[j - 1] > arr[j]) {
//           swap(arr, j - 1, j);
//         }
//       }
//     }
//     return arr;
//   }

thousands();

function pairs(array){
    console.log(array)
    for (let i=0; i<arrlength; i++){
        for(let j=i+1; j<arrlength; j++){
            if(array[i]+array[j]==0){
                pair.push(array[i], array[j])
            }else{}
        }
    }
    console.log(pair);
}



console.log(pairs(arr))