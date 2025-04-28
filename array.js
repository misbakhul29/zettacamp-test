const array = [1,2,3,4,5,6,7,8,9,10];
const genap = [];
const ganjil = [];

function splitarray(array) {
    array.forEach(num => {
        if (num % 2 == 0) {
            genap.push(num);
        } else {
            ganjil.push(num);
        }
    });
}

splitarray(array);
console.log('array: ', array);
console.log('genap: ', genap);
console.log('ganjil: ', ganjil);