
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

function Circle(radius) {
    // console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.location = { x: 1 };

const propertyName = 'location';



circle['location']  = {y:2};

delete circle.location;