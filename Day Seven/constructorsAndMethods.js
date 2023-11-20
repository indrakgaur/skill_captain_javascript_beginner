function Rectangle(height, width) {
    this.height = height;
    this.width = width;
    this.calculateArea = function (width, height) {
        return this.height * this.width;
    };
}


let rectangleBox = new Rectangle(3, 9);
let area = rectangleBox.calculateArea();
console.log(`Area : ${area}`); 