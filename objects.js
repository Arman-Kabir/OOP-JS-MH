
// Factory function
function createCircle(radius) {

    return  {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

// circle.draw();

// constructor function
function Circle(radies){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}