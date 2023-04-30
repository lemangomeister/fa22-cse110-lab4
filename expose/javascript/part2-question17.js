function modifyArray(array, callback){
    const newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num) {
    return num * 2;
}

let a = modifyArray([1,2,3], doSomething);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);