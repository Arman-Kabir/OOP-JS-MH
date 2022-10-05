
// Functions are objects ...26m

// constructor function
// function Circle(radius) {
//     console.log('this', this);
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const Circle1 = new Function('radius', `
// this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// `);

// const circle = new Circle1(1);

// const another = new Circle(1);



// adding/removing property
// circle.location = { x: 1 };

// const propertyName = 'location';



// circle['location']  = {y:2};

// delete circle.location;

// enumearting properties
function Circle(radius) {
    // console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

for(let key in circle){
    if(typeof circle[key] !== 'function')
    console.log(key,circle[key]);
}

const keys = Object.keys(circle);

console.log(keys);

if('radius' in circle)
    console.log('circle has a radius');
