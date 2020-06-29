class Circle {
    contructor(xPos,  yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get surface (){
        return this.radius * this.radius * Math.PI;
    }
        
    move(xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos = yOffset;
    }

}

let superCircle = new Circle(2, 3, 4);
console.log(superCircle.surface);