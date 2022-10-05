
let x = { value: 10 };

let y = x;

x.value = 20;


let obj = { value: 10 };
function increase(obj) {
    obj.value++;
    // console.log(number);
}

increase(obj);
console.log(obj);